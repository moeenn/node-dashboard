import type { Context } from "hono"
import { HomePage } from "./views/pages/HomePage.js"
import { getCookie } from "hono/cookie"

export const PublicController = {
    homePage(c: Context) {
        const isLoggedIn = getCookie(c, "auth.user") != undefined
        const content = HomePage({ isLoggedIn })
        return c.html(content)
    },
} as const
