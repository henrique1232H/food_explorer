import {Container} from "./style"

export default function Input({placeholder, svg: Icon,...rest}) {

    return (
        <Container placeholder={placeholder} {...rest}/>
    )
}