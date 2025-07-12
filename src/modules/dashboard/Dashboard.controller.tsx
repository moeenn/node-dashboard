import type { Context } from "hono";
import { DashboardHomePage } from "./views/pages/DashboardHomePage.js";

export const DashboardController = {
    async dashboardHome(c: Context) {
        const content = DashboardHomePage({})
        return c.html(content)
    }
} as const