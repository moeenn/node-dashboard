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
                    {/* TODO: add logo here. */}
                    {/* <div className="flex pb-10">
                        <a className="text-lg mx-auto bg-cyan-600 text-white px-4 py-2 font-mono font-bold rounded" href="/">Logo</a>
                    </div> */}

                    <div className="bg-white rounded border-zinc-300  p-6 shadow-lg border border-zinc-100">
                        {props.children}
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}
