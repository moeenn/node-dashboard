import type { Context, Hono } from "hono"
import { HomePage } from "../views/pages/HomePage.js"
import { getCookie } from "hono/cookie"

export class PublicController {
    public registerRoutes(app: Hono) {
        app.get("/", (c) => this.homePage(c))
    }

    public homePage(c: Context) {
        const isLoggedIn = getCookie(c, "auth.user") != undefined
        const content = HomePage({ isLoggedIn })
        return c.html(content)
    }
}
