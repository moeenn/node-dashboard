import { InputError } from "./InputError.js"
import { MessageBox } from "./MessageBox.js"

type Fields = {
    email: string
    password: string
}

type Props = {
    errors: Partial<Fields>
    values: Partial<Fields>
    redirect?: boolean
    message?: string
}

export function LoginForm(props: Props) {
    return (
        <form hx-post="/auth/login">
            <h2 className="text-3xl mb-6">Login</h2>
            {props.message && <MessageBox message={props.message} />}

            <fieldset className="mb-6">
                <label htmlFor="email" className="text-xs text-gray-800 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={props.values.email}
                    className="text-sm px-3 py-2 border border-zinc-300 rounded w-full outline-cyan-600"
                />
                {props.errors.email && (
                    <InputError message={props.errors.email} />
                )}
            </fieldset>

            <fieldset className="mb-6">
                <label
                    htmlFor="password"
                    className="text-xs text-gray-800 mb-1"
                >
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    value={props.values.password}
                    required
                    minlength={8}
                    className="text-sm px-3 py-2 border border-zinc-300 rounded w-full outline-cyan-600"
                />
                {props.errors.password && (
                    <InputError message="Please provide a stronger password" />
                )}
            </fieldset>

            <fieldset className="mb-6">
                <a
                    href="/auth/forgot-password"
                    className="text-cyan-600 text-sm"
                >
                    Forgot password
                </a>
            </fieldset>

            {props.redirect && (
                <script
                    dangerouslySetInnerHTML={{
                        __html: "setTimeout(() => { window.location.href = '/' }, 1_500)",
                    }}
                ></script>
            )}

            <input
                type="submit"
                value="Login"
                className="w-full bg-cyan-600 hover:bg-cyan-700 transition-colors text-white text-sm px-3 py-2 rounded cursor-pointer"
            />
        </form>
    )
}
