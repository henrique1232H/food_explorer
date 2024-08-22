import { Container } from "./style";


export default function Stepper({removeDish, count, addDish}) {

    return (
        <Container>
            <button onClick={removeDish}> - </button>
            <h4> {count < 10 ? 0 : ""}{count} </h4>
            <button onClick={addDish}> + </button>
        </Container>
    )
}