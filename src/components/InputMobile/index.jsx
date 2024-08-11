import { Container } from "./style";

export default function InputMobile({placeholder, icon: Icon}) {

    return (
        <Container>
            {
                Icon && <Icon />
            }

            <input type="text" placeholder={placeholder} />

        </Container>
    )
}