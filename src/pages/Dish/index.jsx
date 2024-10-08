import { Container, Tags, Edit } from "./style";
import Header from "../../components/Header"
import Footer from "../../components/Footer";
import TagDiv from "../../components/Tag";
import MaskGroup from "../../assets/Mask group-3.png"
import Stepper from "../../components/Stepper";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import ButtonBack from "../../components/ButtonBack";
import Main from "../../components/Main";
import { useAuth } from "../../hooks/auth";

export default function Dish() {

    const {admin} = useAuth()

    const [count, setCount] = useState(0)
    const [dish, setDish] = useState([])
    const [tags, setTags] = useState([])
    const [isAdmin, setIsAdmin] = useState(admin)

    useEffect(() => {
        setTags([{title: "Salada"}, {title: "Salada"}, {title: "Salada"},{title: "Salada"}, {title: "Salada"}, {title: "Salada"},{title: "Salada"}])
    }, [])

    return (
        <Container>
            <Header/>

            <Main>

                <ButtonBack title="Voltar"/>
                

                <div>
                    <img src={MaskGroup} alt="" />

                    <div>
                        <h1>Salada Ravanello</h1>

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate fugiat aperiam dicta. Voluptatum aliquid magnam eum saepe adipisci voluptates aut corporis natus accusantium maiores? Corporis quasi vel esse quas quam!</p>
                        
                        <Tags>
                            {
                                tags.map((tag, index) => {
                                    return <TagDiv key={String(index)} title={tag.title}/>
                                })
                            }
                        </Tags>

                        {
                            !isAdmin ? 
                                <div>
                                    <Stepper count={count} addDish={() => setCount(count + 1)} removeDish={() => setCount(count - 1)}/>

                                    <Button text="incluir" price="50,00"/>

                                </div>
                                :

                                <div>
                                    <Edit to="/edit">
                                        <Button text="Editar Prato" isAdmin={isAdmin} />
                                    </Edit>

                                </div>
                        }
                    </div>

                </div>
                
               
               
            </Main>


            <Footer/>

        </Container>
    )
}