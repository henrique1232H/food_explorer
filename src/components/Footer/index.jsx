import { Container } from "./style";
import logoFooter from "../../assets/logoFooter.svg"

export default function Footer() {

    return (
        <Container>
            <div>
                <img src={logoFooter} alt="logo da food explorer" />

                <h5>© 2023 - Todos os direitos reservados.</h5>
            </div>
        </Container>
    )
}