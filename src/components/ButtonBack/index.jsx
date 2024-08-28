import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export default function ButtonBack({title}) {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <Container onClick={handleBack}>
             &lt; {title}
        </Container>
    )
}