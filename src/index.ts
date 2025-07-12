import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { serveStatic } from "@hono/node-server/serve-static"
import { pino } from "pino"
import { Config } from "./config.js"
import { newAuthRouter } from "./modules/auth/Auth.router.js"
import { newPublicRouter } from "./modules/public/Public.router.js"
import { newDashboardRouter } from "./modules/dashboard/Dashboard.router.js"

function main() {
    const config = new Config()
    const logger = pino()

    const app = new Hono()
    app.use("/public/*", serveStatic({ root: "./" }))

    const publicRouter = newPublicRouter()
    app.route("/", publicRouter)

    const authRouter = newAuthRouter()
    app.route("/auth", authRouter)

    const dashboardRouter = newDashboardRouter()
    app.route("/dashboard", dashboardRouter)

    // start the server.
    serve({ fetch: app.fetch, port: config.server.port }, () => {
        logger.info({ address: config.server.url() }, "starting server")
    })
}

main()
