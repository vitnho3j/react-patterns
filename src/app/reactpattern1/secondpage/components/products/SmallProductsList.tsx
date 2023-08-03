type SmallProductsListItemProps = {
    product : {
        name: string,
        price: number,
    }
}

export const SmallProductsListItem = ({product} : SmallProductsListItemProps) => {

    const {name, price} = product

    return (
        <h3>{name} - {price}</h3>
    )

}