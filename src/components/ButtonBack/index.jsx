import { Container } from "./style";

export default function ButtonBack({title}) {

    return (
        <Container to="/">
             &lt; {title}
        </Container>
    )
}