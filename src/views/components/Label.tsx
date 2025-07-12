type Props = {
    htmlFor: string
    text: string
}

export function Label(props: Props) {
    return (
        <label htmlFor={props.htmlFor} className="text-xs text-gray-800 mb-1">
            {props.text}
        </label>
    )
}
