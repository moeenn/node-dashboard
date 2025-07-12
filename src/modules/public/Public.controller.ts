import type { Context } from "hono"
import { HomePage } from "./views/pages/HomePage.js"
import { isLoggedIn } from "src/middleware/middleware.js"

export const PublicController = {
    homePage(c: Context) {
        const loggedIn = isLoggedIn(c)
        const content = HomePage({ isLoggedIn: loggedIn })
        return c.html(content)
    },
} as const
