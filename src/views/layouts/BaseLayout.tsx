import { type JSX } from "hono/jsx/jsx-runtime"

type Props = {
    title: string
    children: JSX.Element
}

export function BaseLayout(props: Props) {
    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="stylesheet" href="/public/css/styles.css" />
                <script src="/public/js/htmx.min.js"></script>
                <script type="module" src="/public/js/spa-nav.js"></script>
                <title>{props.title}</title>
            </head>
            <body className="bg-slate-50 text-gray-900">{props.children}</body>
        </html>
    )
}
