import { Hono } from "hono"
import { DashboardController } from "./Dashboard.controller.js"

export function newDashboardRouter() {
    const dashboardRouter = new Hono()
    {
        dashboardRouter.get("/", DashboardController.dashboardHome)
    }

    return dashboardRouter
} 