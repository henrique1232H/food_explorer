import { Link } from "react-router-dom";
import { Container, Header, Nav } from "./style";
import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import InputMobile from "../InputMobile";
import Footer from "../Footer";
import Form from "../Form";

export default function Menu({closeMenu, isAdmin}) {

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
                    <InputMobile
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
                        <Link to="/">
                            Sair
                        </Link>
                    </li>
                </ul>
                

            </Nav>


            <Footer />
        </Container>
    )
}