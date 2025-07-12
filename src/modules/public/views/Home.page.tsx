import { Navbar } from "#src/views/components/Navbar.js"
import { BaseLayout } from "#src/views/layouts/BaseLayout.js"

type Props = {
    isLoggedIn: boolean
}

export function HomePage(props: Props) {
    return (
        <BaseLayout title="Home">
            <>
                <Navbar isLoggedIn={props.isLoggedIn} />

                <div className="container mx-auto p-4">
                    <div className="bg-white border border-zinc-300 shadow-sm rounded my-6 p-8">
                        <h1 className="text-2xl mb-2">Welcome to the home page</h1>
                        <p className="leading-related text-sm text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias perferendis beatae voluptas quisquam laborum non a delectus perspiciatis! Et nemo dolores quod facere iste, esse quibusdam delectus dolorem. Nulla, quia?</p>
                    </div>
                </div>
            </>
        </BaseLayout>
    )
}
