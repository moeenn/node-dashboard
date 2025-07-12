class ServerConfig {
    public readonly host: string
    public readonly port: number

    constructor() {
        this.host = "localhost"
        this.port = 3000
    }

    public url(): string {
        return `${this.host}:${this.port}`
    }
}

export class Config {
    server: ServerConfig

    public constructor() {
        this.server = new ServerConfig()
    }
}
