import { products } from "../secondpage/components/data";
import { LargeProductsListItem } from "../secondpage/components/products/LargeProductsList";
import { Modal } from "./components/Modal";
import { people } from "../secondpage/components/data";
import { LargePeopleListItem } from "../secondpage/components/people/LargePeopleList";

export default function Home() {
    return (
        <Modal>
            <LargePeopleListItem person={people[0]}/>
            <h1>-------------------------------------</h1>
            <LargeProductsListItem product={products[1]}/>
        </Modal>
    )
}