import { Container, GoToDish } from "./style";
import Button from '../Button/index';
import MaskGroup from "../../assets/Mask group-1.png"
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";


export default function Card({title, description, isAdmin, img, count = "00" ,price, heart = false, add, remove}) {
    return (
        <Container heart={heart}>
            
            <div>
                {
                    !isAdmin ? 
                    <button>
                        {
                            !heart ? <FaRegHeart /> : <FaHeart />
                        }
                    </button>
                    : 
                    <button>
                        <GoPencil size={25}/>
                    </button>
                }
                
            </div>

            <img src={MaskGroup} alt="Foto do prato"/>
            
            <GoToDish to="/dish">
                <h3>{title} </h3>
            </GoToDish>

            <p> {description} </p>

            <h2>R${price}</h2>


            {
                !isAdmin ? 
                <div>
                    <div>
                        <button onClick={remove}> - </button>
                        <h4> {count < 10 ? 0 : ""}{count} </h4>
                        <button onClick={add}> + </button>
                    </div>

                 <Button text="Incluir" />
                </div>

                : ""
            }

            

        </Container>
    )
}