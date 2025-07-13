import { MessageBox } from "#src/views/components/MessageBox.js"
import { Navbar } from "#src/views/components/Navbar.js"
import { BaseLayout } from "#src/views/layouts/BaseLayout.js"

type Props = {
    isLoggedIn: boolean
    flashedMessage?: string
}

export function HomePage(props: Props) {
    return (
        <BaseLayout title="Home">
            <>
                <Navbar isLoggedIn={props.isLoggedIn} />

                {props.flashedMessage && (
                    <div className="container mx-auto px-4 pt-4">
                        <MessageBox message={props.flashedMessage} />
                    </div>
                )}
            </>
        </BaseLayout>
    )
}
