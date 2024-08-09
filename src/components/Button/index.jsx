import { Container } from "./style";




export default function Button({text,  receipt, count,isAdmin, icon: Icon, ...rest}) {

    console.log()

    return (
        <Container {...rest}>
            {
                Icon && <Icon/>
            }

            <p>{text}</p>

            {
                receipt && <span>({count})</span>
            }

            
        </Container>
    )
}