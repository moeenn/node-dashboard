type Props = {
    message: string
}

export function MessageBox(props: Props) {
    return (
        <div className="bg-blue-100 p-3 border border-blue-200 rounded mb-6">
            <p className="text-blue-900 text-sm leading-relaxed">
                {props.message}
            </p>
        </div>
    )
}
