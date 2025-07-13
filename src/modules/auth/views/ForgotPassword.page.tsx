import { ForgotPasswordForm } from "./ForgotPasswordForm.component.js"
import { AuthLayout } from "./Auth.layout.js"

type Fields = {
    email: string
}

type Props = {
    errors: Partial<Fields>
    values: Partial<Fields>
}

export function ForgotPasswordPage(props: Props = { errors: {}, values: {} }) {
    return (
        <AuthLayout title="Forgot Password">
            <ForgotPasswordForm errors={props.errors} values={props.values} />
        </AuthLayout>
    )
}
