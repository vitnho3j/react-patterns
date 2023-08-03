import {SplitScreen} from './components/SplitScreen'
import { LeftHandComponent } from './components/LeftHandComponent'
import { RightHandComponent } from './components/RightHandComponent'
export default function Home() {
    return (
        <SplitScreen>
            <LeftHandComponent name="Shaun"/>
            <RightHandComponent message="hello"/>
        </SplitScreen>
    )
}