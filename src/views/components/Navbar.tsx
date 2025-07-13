type Props = {
    isLoggedIn: boolean
}

export function Navbar(props: Props) {
    return (
        <nav className="bg-white shadow-sm border-b border-zinc-300 py-4">
            <div className="container mx-auto px-4 flex justify-between">
                <a className="text-3xl mb-0" href="/">
                    Logo
                </a>
                <div className="flex">
                    {props.isLoggedIn ? (
                        <button
                            className="my-auto hover:text-cyan-700 transition:colors cursor-pointer"
                            hx-get="/auth/logout"
                            hx-target="body"
                        >
                            Logout
                        </button>
                    ) : (
                        <a
                            className="my-auto hover:text-cyan-700 transition:colors"
                            href="/auth/login"
                        >
                            Login
                        </a>
                    )}
                </div>
            </div>
        </nav>
    )
}
