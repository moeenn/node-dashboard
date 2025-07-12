import { Hono } from "hono"
import { AuthController } from "./Auth.controller.js"

export function newAuthRouter(): Hono {
    const authRouter = new Hono()
    {
        authRouter.get("/login", AuthController.loginPage)
        authRouter.post("/login", AuthController.loginPage)
        authRouter.get("/logout", AuthController.logout)
        authRouter.get("/forgot-password", AuthController.forgotPasswordPage)
        authRouter.post("/forgot-password", AuthController.forgotPasswordPage)
    }

    return authRouter
}
