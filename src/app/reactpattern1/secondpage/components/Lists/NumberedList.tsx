
type RegularListProps<T> = {
    items: T[],
    resourceName: string
    ItemComponent: any
}


export const NumberedList = <T,>({

    items,
    resourceName,
    ItemComponent,

}: RegularListProps<T>) => {
    return (
        <>
        {items.map((item, i) => (
            <>
            <h3>{i + 1}</h3>
            <ItemComponent key={i} {...{[resourceName]: item}} />
            </>
        ))}
        </>
    )
}