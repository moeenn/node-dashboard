import { LoginForm } from "../components/LoginFom.js"
import { AuthLayout } from "../layouts/AuthLayout.js"

type Fields = {
    email: string
    password: string
}

type Props = {
    errors: Partial<Fields>
    values: Partial<Fields>
}

export function LoginPage(props: Props = { errors: {}, values: {} }) {
    return (
        <AuthLayout title="Login">
            <LoginForm errors={props.errors} values={props.values} />
        </AuthLayout>
    )
}
