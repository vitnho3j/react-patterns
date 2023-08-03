import { Container } from "./Container"
import { Pane } from "./Pane"


type ElementType = React.ElementType;

interface SplitScreenProps {
    children: any
}

export const SplitScreen = ({
    children,
}: SplitScreenProps) => {
    const [left, right] = children
    return (
        <Container>
            <Pane>
                {left}
            </Pane>
            <Pane>
                {right}
            </Pane>
        </Container>
    )
}