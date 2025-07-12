import process from "node:process"

function readString(
    name: string,
    fallback: string | undefined = undefined,
): string {
    const value = process.env[name]
    if (value == undefined) {
        if (fallback != undefined) {
            return fallback.trim()
        }
        throw new Error(`missing environment variable: ${name}`)
    }
    return value.trim()
}

function readNumber(
    name: string,
    fallback: number | undefined = undefined,
): number {
    const rawValue = readString(name, String(fallback))
    const parsedValue = parseFloat(rawValue)
    if (isNaN(parsedValue)) {
        throw new Error(`environment variable ${name} is not a valid number`)
    }
    return parsedValue
}

export const env = {
    readString,
    readNumber,
}
