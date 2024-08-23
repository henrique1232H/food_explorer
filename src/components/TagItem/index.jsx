import { Container } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

export default function TagItem({title, isNew = false}) {

    return (
        <Container isNew={isNew}>

                <p>{title}</p>

                <button>
                    {
                        isNew ? <AiOutlineClose/> : <AiOutlineCheck/>
                    }
                </button>

        </Container>
    )
}