import { Container, Back, MobileButton, LinkButton } from "./style";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { IoMenu } from "react-icons/io5";
import { PiReceipt } from "react-icons/pi";
import logoUser from "../../assets/logo.svg"
import logoAdmin from "../../assets/logoAdmin.svg"
import { useState } from "react";
import { PiSignOutBold } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";
import Menu from "../Menu";
import Form from "../Form";
import { Link } from "react-router-dom";


export default function Header() {

    const [isAdmin, setIsAdmin] = useState(true);
    const [count, setPedido] = useState(0);
    const [removePlaceholder, setRemovePlaceholder] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)

    const handleRemovePlaceholder = (event) => {
        if(event !== "") {
            return
        }
        setRemovePlaceholder(!removePlaceholder)
    }

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <Container>
            <nav>

                <MobileButton>
                    <button onClick={handleMenu}>
                        <IoMenu />
                    </button>
                </MobileButton>

                <div>
                    <img src={!isAdmin ? logoUser : logoAdmin} alt="Logo" />
                </div>

                <Input 
                    onFocus={(e) => handleRemovePlaceholder(e.target.value)}
                    onBlur={(e) => handleRemovePlaceholder(e.target.value)}
            
                    placeholder={removePlaceholder}  
                    icon={IoSearchSharp} 
                    text="Busque por pratos ou ingredientes"/>

                {
                    isAdmin ?

                    <LinkButton to="/add">
                        <Button text="Novo prato"/> 
                    </LinkButton>
                    
                    :

                    <LinkButton>
                        <Button text="Pedidos" receipt count={count} icon={PiReceipt}/>
                    </LinkButton>
                    
                }

                <MobileButton>
                    <button>
                        <span>
                            {count}
                        </span>
                        <PiReceipt />
                    </button>
                </MobileButton>

                <Back to="/">
                    <PiSignOutBold />
                </Back>


                {
                    openMenu ? <Menu closeMenu={handleMenu} isAdmin={isAdmin}/> : ""
                }

            </nav>
        </Container>
    )
}