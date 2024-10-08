import { Link } from "react-router-dom";
import { Container, Header, Nav } from "./style";
import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import Input from "../Input";
import Footer from "../Footer";
import Form from "../Form";
import { useAuth } from "../../hooks/auth";


export default function Menu({closeMenu, isAdmin}) {

    const {signOut} = useAuth()

    return (
        <Container>

            <Header>
                <div>
                    <button onClick={closeMenu}>
                        <IoMdClose color="#fff" size={30}/>

                        <h3>Menu</h3>
                    </button>
                </div>
            </Header>

            <Nav>
                <Form>
                    <Input
                        icon={IoSearchSharp} 
                        placeholder="Busque por pratos ou ingredientes"
                    />
                </Form>

                <ul>
                    {isAdmin ? 
                        <li>
                            <Link to="add">
                                Novo prato
                            </Link>
                        </li> : ""}
                        
                    <li>
                        <Link to="/" onClick={signOut}>
                            Sair
                        </Link>
                    </li>
                </ul>
                

            </Nav>


            <Footer />
        </Container>
    )
}