type Props = {
    message: string
}
export function InputError(props: Props) {
    return <p class="text-xs text-red-700 pt-1">{props.message}</p>
}
