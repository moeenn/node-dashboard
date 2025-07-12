import type { Context, MiddlewareHandler } from "hono"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"
import { AuthConfig } from "./config.js"

export const authHelper = {
    isLoggedIn: function (c: Context): boolean {
        return getCookie(c, AuthConfig.authTokenCookieName) != undefined
    },

    setAuthCookie: function (c: Context) {
        const exp = new Date()
        exp.setMinutes(exp.getMinutes() + AuthConfig.cookieExpiryMinutes)

        // TODO: set JWT as token.
        setCookie(c, AuthConfig.authTokenCookieName, "some-random-token-value", {
            expires: exp,
        })
    },

    deleteAuthCookie: function (c: Context) {
        deleteCookie(c, AuthConfig.authTokenCookieName)
    },
}

export const middleware = {
    IsLoggedIn: async function (c, next) {
        if (!authHelper.isLoggedIn(c)) {
            return c.redirect("/auth/login")
        }
        return await next()
    } satisfies MiddlewareHandler,

    IsNotLoggedIn: async function (c, next) {
        if (authHelper.isLoggedIn(c)) {
            return c.redirect("/")
        }
        return await next()
    } satisfies MiddlewareHandler,
}
