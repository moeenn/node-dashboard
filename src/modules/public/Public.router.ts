import { Hono } from "hono"
import { PublicController } from "./Public.controller.js"

export function newPublicRouter() {
    const publicRouter = new Hono()
    {
        publicRouter.get("/", PublicController.homePage)
    }

    return publicRouter
}
