import { NumberedList } from "./components/Lists/NumberedList";
import { RegularList } from "./components/Lists/RegularList";
import { people, products } from "./components/data";
import { LargePeopleListItem } from "./components/people/LargePeopleList";
import { SmallPeopleListItem } from "./components/people/SmallPeopleList";
import { LargeProductsListItem } from "./components/products/LargeProductsList";
import { SmallProductsListItem } from "./components/products/SmallProductsList";

export default function Home() {
    return (
        <>
            <RegularList 
                items={people}
                resourceName="person"
                ItemComponent={SmallPeopleListItem} />
            <h1>------------------------------------------------------</h1>
            <NumberedList 
                items={people}
                resourceName="person"
                ItemComponent={LargePeopleListItem}
            />
            <RegularList 
                items={products}
                resourceName="product"
                ItemComponent={SmallProductsListItem} />
            <NumberedList 
                items={products}
                resourceName="product"
                ItemComponent={LargeProductsListItem}
            />
        </>
    )
}