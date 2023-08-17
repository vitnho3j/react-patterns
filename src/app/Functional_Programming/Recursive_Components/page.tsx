import { RecursiveComponent } from "./RecursiveComponent"
import { DangerButton } from "../Composition/composition";
import { BigSuccessButton } from "../Composition/partiallyApply";

const nestedObject = {
    a: 1,
    b:{
        b1: 4,
        b2: {
            b23: "Hello",
        },
        b3: {
            b31: {
                message: "Hi",
            },
            b32: {
                message: "Hi",
            }
        }
    },
    c: {
        c1: 2,
        c2: 3,
    }
}

export default function Home() {
    return (
        <>
            <RecursiveComponent data={nestedObject} />
            <DangerButton text="Don't do it !" />
            <BigSuccessButton text="yes" />
        </>
    );
}