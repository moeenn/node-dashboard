import { LoginForm } from "./LoginFom.component.js"
import { AuthLayout } from "./Auth.layout.js"

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
