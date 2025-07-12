import type { Context, MiddlewareHandler } from "hono"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"
import { env } from "src/lib/env.js"

const AuthConfig = {
    authTokenCookieName: env.readString("AUTH_TOKEN_COOKIE_NAME", "auth.token"),
    cookieExpiryMinutes: env.readNumber("AUTH_COOKIE_EXP_MINUTES", 60),
} as const

export function isLoggedIn(c: Context): boolean {
    return getCookie(c, AuthConfig.authTokenCookieName) != undefined
}

export function setAuthCookie(c: Context) {
    const exp = new Date()
    exp.setMinutes(exp.getMinutes() + AuthConfig.cookieExpiryMinutes)

    // TODO: set JWT as token.
    setCookie(c, AuthConfig.authTokenCookieName, "some-random-token-value", {
        expires: exp,
    })
}

export function deleteAuthCookie(c: Context) {
    deleteCookie(c, AuthConfig.authTokenCookieName)
}

const IsLoggedInMiddleware: MiddlewareHandler = async function (c, next) {
    if (!isLoggedIn(c)) {
        return c.redirect("/auth/login")
    }
    return await next()
}

const IsNotLoggedInMiddleware: MiddlewareHandler = async function (c, next) {
    if (isLoggedIn(c)) {
        return c.redirect("/")
    }
    return await next()
}

export const middleware = {
    IsLoggedIn: IsLoggedInMiddleware,
    IsNotLoggedIn: IsNotLoggedInMiddleware,
}
