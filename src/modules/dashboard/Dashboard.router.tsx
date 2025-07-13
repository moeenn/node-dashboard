import { Hono } from "hono"
import { DashboardController } from "./Dashboard.controller.js"
import { middleware as m } from "#src/lib/middleware.js"

export function newDashboardRouter() {
    const dashboardRouter = new Hono()
    {
        dashboardRouter.get(
            "/",
            m.IsLoggedIn,
            DashboardController.dashboardHome,
        )
    }

    return dashboardRouter
}
