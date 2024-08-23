
import {Container} from "./style"

export default function InputHeader({text, removePlaceholder, blur,placeholder, icon: Icon,...rest}) {



    return (
        <Container>

            {
                !placeholder ?  
                <div>
                    {Icon && <Icon />}
                    <h3 className="placeholderText">{text}</h3>
                </div>
                :
                ""
            
            }
            
            <input onFocus={removePlaceholder} onBlur={blur} {...rest}
                />
        </Container>
    )
}

