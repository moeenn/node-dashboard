import type { Context } from "hono"
import { LoginPage } from "./views/Login.page.js"
import { LoginForm, ForgotPasswordForm } from "./Auth.forms.js"
import { ForgotPasswordPage } from "./views/ForgotPassword.page.js"
import { ForgotPasswordForm as ForgotPasswordFormElement } from "./views/ForgotPasswordForm.component.js"
import { LoginForm as LoginFormElement } from "./views/LoginFom.component.js"
import { authHelper } from "#src/lib/middleware.js"
import { htmx } from "#src/lib/htmx.js"

export const AuthController = {
    async getLoginPage(c: Context) {
        const content = LoginPage()
        return c.html(content)
    },

    async processLogin(c: Context) {
        const loginForm = new LoginForm(await c.req.formData())
        const errors = loginForm.validate()
        if (errors) {
            const content = LoginFormElement({
                errors: errors,
                values: loginForm,
            })
            return c.html(content)
        }

        // TODO: implement auth.service.
        authHelper.setAuthCookie(c)
        return htmx.redirect(c, "/dashboard")
    },

    logout(c: Context) {
        authHelper.deleteAuthCookie(c)
        return c.redirect("/")
    },

    getForgotPasswordPage(c: Context) {
        const content = ForgotPasswordPage()
        return c.html(content)
    },

    async processForgotPassword(c: Context) {
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
            "Your request has been submitted. You will receive an email shortly" +
            " with instructions to reset your password."

        const content = ForgotPasswordFormElement({ message })
        return c.html(content)
    },
} as const
