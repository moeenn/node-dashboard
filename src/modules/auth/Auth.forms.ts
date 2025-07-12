type LoginFormError = {
    email?: string
    password?: string
}

export class LoginForm {
    readonly email: string
    readonly password: string

    public constructor(formData: FormData) {
        const email = formData.get("email")
        if (email == null || email == "") {
            this.email = ""
        } else {
            this.email = email.toString()
        }

        const password = formData.get("password")
        if (password == null || password == "") {
            this.password = ""
        } else {
            this.password = password.toString()
        }
    }

    public validate(): LoginFormError | null {
        const errors: LoginFormError = {}
        if (this.email == "") {
            errors.email = "Please provide an email"
        }

        if (this.password == "") {
            errors.password = "Please provide a password"
        }

        return Object.keys(errors).length > 0 ? errors : null
    }
}

type ForgotPasswordFormError = {
    email?: string
}

export class ForgotPasswordForm {
    readonly email: string

    public constructor(formData: FormData) {
        const email = formData.get("email")
        if (email == null || email == "") {
            this.email = ""
        } else {
            this.email = email.toString()
        }
    }

    public validate(): ForgotPasswordFormError | null {
        const errors: ForgotPasswordFormError = {}
        if (this.email == "") {
            errors.email = "Please provide an email"
        }

        return Object.keys(errors).length > 0 ? errors : null
    }
}
