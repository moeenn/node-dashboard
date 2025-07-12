import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { serveStatic } from "@hono/node-server/serve-static"
import { pino } from "pino"
import { newAuthRouter } from "./modules/auth/Auth.router.js"
import { newPublicRouter } from "./modules/public/Public.router.js"
import { newDashboardRouter } from "./modules/dashboard/Dashboard.router.js"
import { ServerConfig } from "./lib/config.js"
import { trimTrailingSlash } from "hono/trailing-slash"

function main() {
    const logger = pino()
    const app = new Hono()
    app.use("/public/*", serveStatic({ root: "./" }))
    app.use(trimTrailingSlash())
    {
        app.route("/", newPublicRouter())
        app.route("/auth", newAuthRouter())
        app.route("/dashboard", newDashboardRouter())
    }

    // start the server.
    serve({ fetch: app.fetch, port: ServerConfig.port }, () => {
        logger.info({ address: ServerConfig.url() }, "starting server")
    })
}

main()
