import { Container, Back, MobileButton } from "./style";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { PiReceipt } from "react-icons/pi";
import logoUser from "../../assets/logo.svg"
import logoAdmin from "../../assets/logoAdmin.svg"
import { useState } from "react";
import { PiSignOutBold } from "react-icons/pi";


export default function Header() {

    const [isAdmin, setIsAdmin] = useState(false);
    const [count, setPedido] = useState(0)

    return (
        <Container>
            <div>

                <MobileButton>
                    <button>
                        <IoMenu />
                    </button>
                </MobileButton>

                <div>
                    <img src={!isAdmin ? logoUser : logoAdmin} alt="Logo" />
                </div>

                <Input  placeholder="Busque por pratos ou ingredientes"/>

                {
                    isAdmin ? 
                    <Button text="Novo prato"/> 
                    : 
                    <Button text="Pedidos" receipt count={count} icon={PiReceipt}/>
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


            </div>
        </Container>
    )
}