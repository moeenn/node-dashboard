import { Hono } from "hono"
import { AuthController } from "./Auth.controller.js"
import { middleware as m } from "#src/lib/middleware.js"

export function newAuthRouter(): Hono {
    const authRouter = new Hono()
    {
        authRouter.get("/login", m.IsNotLoggedIn, AuthController.getLoginPage)
        authRouter.post("/login", m.IsNotLoggedIn, AuthController.processLogin)
        authRouter.get("/logout", m.IsLoggedIn, AuthController.logout)
        authRouter.get(
            "/forgot-password",
            m.IsNotLoggedIn,
            AuthController.getForgotPasswordPage,
        )
        authRouter.post(
            "/forgot-password",
            m.IsNotLoggedIn,
            AuthController.processForgotPassword,
        )
    }

    return authRouter
}
