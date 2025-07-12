import type { Context } from "hono"

export const htmx = {
    redirect(c: Context, to: string) {
        c.res.headers.append("HX-Redirect", to)
        return c.body(null, 204)
    },
}