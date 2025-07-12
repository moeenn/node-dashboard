import { BaseLayout } from "#src/views/layouts/BaseLayout.js"
import type { JSX } from "hono/jsx/jsx-runtime"

type Props = {
    title: string
    children: JSX.Element
}

export function DashboardLayout(props: Props) {
    return (
        <BaseLayout title={"Dashboard - " + props.title}>
            <div className="container mx-auto p-4">{props.children}</div>
        </BaseLayout>
    )
}
