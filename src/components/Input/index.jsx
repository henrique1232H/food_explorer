import { Container } from "./style";

export default function Input({placeholder, icon: Icon, ...rest}) {

    return (
        <Container>
            {
                Icon && <Icon />
            }

            <input placeholder={placeholder} {...rest} />

        </Container>
    )
}