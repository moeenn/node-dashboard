import type { Context, Hono } from "hono"
import { LoginPage } from "../views/pages/LoginPage.js"
import type { Logger } from "pino"
import { LoginForm, ForgotPasswordForm } from "./AuthControllerForms.js"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"
import { ForgotPasswordPage } from "../views/pages/ForgotPasswordPage.js"
import { ForgotPasswordForm as ForgotPasswordFormElement } from "../views/components/ForgotPasswordForm.js"
import { LoginForm as LoginFormElement } from "../views/components/LoginFom.js"

type AuthControllerArgs = {
    logger: Logger
}

export class AuthController {
    logger: Logger
    #authCookieName = "auth.user"

    constructor(args: AuthControllerArgs) {
        this.logger = args.logger
    }

    public registerRoutes(app: Hono) {
        app.get("/auth/login", (c) => this.loginPage(c))
        app.post("/auth/login", (c) => this.loginPage(c))
        app.get("/auth/logout", (c) => this.logout(c))
        app.get("/auth/forgot-password", (c) => this.forgotPasswordPage(c))
        app.post("/auth/forgot-password", (c) => this.forgotPasswordPage(c))
    }

    public async loginPage(c: Context) {
        if (getCookie(c, this.#authCookieName) != undefined) {
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

        setCookie(c, this.#authCookieName, "some-random-token-value", {
            expires: exp,
        })

        const message = "Login successful"
        const content = LoginFormElement({
            redirect: true,
            errors: {},
            values: {},
            message,
        })
        return c.html(content)
    }

    public logout(c: Context) {
        deleteCookie(c, this.#authCookieName)
        return c.redirect("/")
    }

    public async forgotPasswordPage(c: Context) {
        if (getCookie(c, this.#authCookieName) != undefined) {
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
    }
}
