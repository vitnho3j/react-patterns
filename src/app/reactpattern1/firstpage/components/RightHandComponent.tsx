type RightHandComponentProps = {
    message: string
}

export const RightHandComponent = (props: RightHandComponentProps) => {
    return (
        <h1 className="bg-red-400">{props.message}</h1>
    )
}