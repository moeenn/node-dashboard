import type { JSX } from "hono/jsx/jsx-runtime"
import { BaseLayout } from "#src/views/layouts/BaseLayout.js"

type Props = {
    title: string
    children: JSX.Element
}

export function AuthLayout(props: Props) {
    return (
        <BaseLayout title={props.title}>
            <div className="h-screen overflow-y-auto flex">
                <div className="container mx-auto m-auto w-96">
                    <div className="bg-white rounded border-zinc-300  p-6 shadow-lg border">
                        {props.children}
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}
