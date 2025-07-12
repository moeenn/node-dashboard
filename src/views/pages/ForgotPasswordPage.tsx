import { ForgotPasswordForm } from "../components/ForgotPasswordForm.js"
import { AuthLayout } from "../layouts/AuthLayout.js"

type Fields = {
    email: string
}

type Props = {
    errors: Partial<Fields>
    values: Partial<Fields>
}

export function ForgotPasswordPage(props: Props = { errors: {}, values: {} }) {
    return (
        <AuthLayout title="ForgotPassword">
            <ForgotPasswordForm errors={props.errors} values={props.values} />
        </AuthLayout>
    )
}
