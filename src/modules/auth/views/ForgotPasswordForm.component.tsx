import { InputError } from "#views/components/InputError.js"
import { Label } from "#views/components/Label.js"
import { MessageBox } from "#views/components/MessageBox.js"

type Fields = {
    email: string
}

type Props = {
    message?: string
    errors?: Partial<Fields>
    values?: Partial<Fields>
}

export function ForgotPasswordForm(props: Props) {
    return (
        <form hx-post="/auth/forgot-password">
            <h2 className="text-3xl mb-6">Forgot password</h2>
            {props.message && <MessageBox message={props.message} />}

            <fieldset className="mb-6">
                <Label htmlFor="email" text="Email" />
                <input
                    type="email"
                    name="email"
                    value={props.values?.email}
                    required
                    className="text-sm px-3 py-2 border border-zinc-300 rounded w-full outline-cyan-600"
                />
                {props.errors?.email && (
                    <InputError message={props.errors.email} />
                )}
            </fieldset>

            <fieldset className="mb-6">
                <a href="/auth/login" className="text-cyan-600 text-sm">
                    Login instead
                </a>
            </fieldset>

            <button className="w-full bg-cyan-600 hover:bg-cyan-700 transition-colors text-white text-sm px-3 py-2 rounded cursor-pointer">
                Submit
            </button>
        </form>
    )
}
