import { randomBytes } from "node:crypto"
import { env } from "#src/lib/env.js"

export const ServerConfig = {
    host: env.readString("SERVER_HOST", "localhost"),
    port: env.readNumber("SERVER_PORT", 3000),
    url: function () {
        return `${this.host}:${this.port}`
    },
} as const

export const AuthConfig = {
    authTokenCookieName: env.readString("AUTH_TOKEN_COOKIE_NAME", "auth.token"),
    cookieExpiryMinutes: env.readNumber("AUTH_COOKIE_EXP_MINUTES", 60),
    jwtSecret: env.readString("AUTH_JWT_SECRET", Buffer.from(randomBytes(64)).toString('hex')),
} as const