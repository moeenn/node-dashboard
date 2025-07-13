import type { Context } from "hono"
import { HomePage } from "./views/Home.page.js"
import { authHelper } from "#src/lib/middleware.js"

export const PublicController = {
    homePage(c: Context) {
        const loggedIn = authHelper.isLoggedIn(c)
        const content = HomePage({
            isLoggedIn: loggedIn,
            flashedMessage: "Welcome to the HTMX demo site",
        })
        return c.html(content)
    },
} as const
