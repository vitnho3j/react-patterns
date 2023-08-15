import { UncontrolledForm } from "./UncontrolledForm";
import { ControlledForm } from "./ControlledForm";
export default function Home() {
    return (
        <div className="text-black">
            <p>UNCONTROLLED FORM</p>
            <UncontrolledForm />
            <p>---------------------------------------</p>
            <p>CONTROLLED FORM</p>
            <ControlledForm />
            <p>---------------------------------------</p>          
        </div>
    )
}