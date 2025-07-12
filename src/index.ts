import { serve } from "@hono/node-server"
import { Hono } from "hono"
import { serveStatic } from "@hono/node-server/serve-static"
import { pino } from "pino"
import { AuthController } from "./controller/AuthController.js"
import { Config } from "./config.js"
import { PublicController } from "./controller/PublicController.js"

function main() {
    const config = new Config()
    const logger = pino()

    const app = new Hono()
    app.use("/public/*", serveStatic({ root: "./" }))

    // register all controllers here.
    const publicController = new PublicController()
    const authController = new AuthController({ logger })
    publicController.registerRoutes(app)
    authController.registerRoutes(app)

    // start the server.
    serve({ fetch: app.fetch, port: config.server.port }, () => {
        logger.info({ address: config.server.url() }, "starting server")
    })
}

main()
