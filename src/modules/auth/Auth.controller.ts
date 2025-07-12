import type { Context } from "hono"
import { LoginPage } from "./views/pages/LoginPage.js"
import { LoginForm, ForgotPasswordForm } from "./Auth.forms.js"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"
import { ForgotPasswordPage } from "./views/pages/ForgotPasswordPage.js"
import { ForgotPasswordForm as ForgotPasswordFormElement } from "./views/components/ForgotPasswordForm.js"
import { LoginForm as LoginFormElement } from "./views/components/LoginFom.js"

const AUTH_COOKIE_NAME = "auth.user"

export const AuthController = {
    async loginPage(c: Context) {
        if (getCookie(c, AUTH_COOKIE_NAME) != undefined) {
            return c.redirect("/")
        }

        if (c.req.method === "GET") {
            const content = LoginPage()
            return c.html(content)
        }

        const loginForm = new LoginForm(await c.req.formData())
        const errors = loginForm.validate()
        if (errors) {
            const content = LoginFormElement({
                errors: errors,
                values: loginForm,
            })
            return c.html(content)
        }

        // TODO: perform actual login.
        const exp = new Date()
        exp.setHours(exp.getHours() + 1)

        setCookie(c, AUTH_COOKIE_NAME, "some-random-token-value", {
            expires: exp,
        })

        const message = "Login successful"
        const content = LoginFormElement({
            redirectTo: "/dashboard",
            errors: {},
            values: {},
            message,
        })
        return c.html(content)
    },

    logout(c: Context) {
        deleteCookie(c, AUTH_COOKIE_NAME)
        return c.redirect("/")
    },

    async forgotPasswordPage(c: Context) {
        if (getCookie(c, AUTH_COOKIE_NAME) != undefined) {
            return c.redirect("/")
        }

        if (c.req.method === "GET") {
            const content = ForgotPasswordPage()
            return c.html(content)
        }

        const form = new ForgotPasswordForm(await c.req.formData())
        const errors = form.validate()
        if (errors) {
            const content = ForgotPasswordFormElement({
                errors: errors,
                values: form,
            })
            return c.html(content)
        }

        const message =
            "Your request has been submitted. You will receive an email shortly with instructions to reset your password."
        const content = ForgotPasswordFormElement({
            message,
            errors: {},
            values: {},
        })
        return c.html(content)
    },
} as const
