import { DashboardLayout } from "./layouts/DashboardLayout.js"

type Props = {
}

export function DashboardHomePage(props: Props) {
    return (
        <DashboardLayout title="Home">
            <h1>Welcome to the dashboard</h1>
        </DashboardLayout>
    )
}