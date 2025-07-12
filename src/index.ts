import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { serveStatic } from "@hono/node-server/serve-static"
import { pino } from "pino"
import { newAuthRouter } from "./modules/auth/Auth.router.js"
import { newPublicRouter } from "./modules/public/Public.router.js"
import { newDashboardRouter } from "./modules/dashboard/Dashboard.router.js"
import { env } from "./lib/env.js"

export const ServerConfig = {
    host: env.readString("SERVER_HOST", "localhost"),
    port: env.readNumber("SERVER_PORT", 3000),
    url: function () {
        return `${this.host}:${this.port}`
    },
} as const

function main() {
    const logger = pino()
    const app = new Hono()
    {
        app.use("/public/*", serveStatic({ root: "./" }))
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
