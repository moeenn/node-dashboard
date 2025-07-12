import { Navbar } from "#views/components/Navbar.js"
import { BaseLayout } from "#views/layouts/BaseLayout.js"

type Props = {
    isLoggedIn: boolean
}

export function HomePage(props: Props) {
    return (
        <BaseLayout title="Home">
            <>
                <Navbar isLoggedIn={props.isLoggedIn} />

                <div className="container mx-auto p-4">
                    <h1>Welcome to the home page</h1>
                </div>
            </>
        </BaseLayout>
    )
}
