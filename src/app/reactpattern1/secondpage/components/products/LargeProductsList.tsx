type LargeProductsListItemProps = {
    product : {
        name: string,
        price: number,
        description: string,
        rating: number
    }
}

export const LargeProductsListItem = ({product} : LargeProductsListItemProps) => {

    const {name, price, description, rating} = product

    return (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Description:</h3>
            <p>{description}</p>
            <p>Average Rating: {rating}</p>
        </>
    );

}