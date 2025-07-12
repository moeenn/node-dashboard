import type { JSX } from "hono/jsx/jsx-runtime"
import { BaseLayout } from "#views/layouts/BaseLayout.js"

type Props = {
    title: string
    children: JSX.Element
}

export function AuthLayout(props: Props) {
    return (
        <BaseLayout title={props.title}>
            <div className="h-screen overflow-y-auto flex">
                <div className="container mx-auto bg-white rounded border-zinc-300 w-96 m-auto p-6 shadow-lg border border-zinc-100">
                    {props.children}
                </div>
            </div>
        </BaseLayout>
    )
}
