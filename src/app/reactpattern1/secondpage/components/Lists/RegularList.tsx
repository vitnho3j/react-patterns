
type RegularListProps<T> = {
    items: T[],
    resourceName: string
    ItemComponent: any
}


export const RegularList = <T,>({

    items,
    resourceName,
    ItemComponent,

}: RegularListProps<T>) => {
    return (
        <>
        {items.map((item, i) => (
            <ItemComponent key={i} {...{[resourceName]: item}} />
        ))}
        </>
    )
}