type LeftHandComponentProps = {
    name: string
}

export const LeftHandComponent = (props: LeftHandComponentProps) => {
    return (
        <h1 className="bg-green-400">{props.name}</h1>
    )
}