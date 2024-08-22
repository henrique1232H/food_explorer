import { Container } from "./style";




export default function Button({text,  receipt, price,count,isAdmin, icon: Icon, ...rest}) {

    return (
        <Container isAdmin={isAdmin} {...rest}>
            { 
                Icon && <Icon/>
            }
            
            <p>{text} {price && <span> &middot; R${price}</span>}</p>

            {
                receipt && <span>({count})</span>
            }

            
        </Container>
    )
}