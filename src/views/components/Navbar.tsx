type Props = {
    isLoggedIn: boolean
}

export function Navbar(props: Props) {
    return (
        <nav className="bg-white shadow-md border-b border-zinc-300 py-4">
            <div className="container mx-auto px-4 flex justify-between">
                <span className="text-3xl mb-0">Logo</span>
                <div className="flex">
                    {props.isLoggedIn ? (
                        <a
                            className="my-auto hover:text-cyan-700 transition:colors"
                            href="/auth/logout"
                        >
                            Logout
                        </a>
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
