import { Container, Form, Ingredients, Select, Textarea } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ButtonBack from "../../components/ButtonBack";
import Main from "../../components/Main";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TagItem from "../../components/TagItem";


export default function AddDish() {
    return (
        <Container>
            <Header />
                <Main>
                    <ButtonBack title="Voltar"/>
                    <h1>Adicionar prato</h1>

                    <Form action="get">
                        <div>
                            <div>
                                <label htmlFor="image">Imagem do prato</label>
                                <Input type="file" id="image" accept="image/png, image/jpeg"/>
                            </div>

                            <div>
                                <label htmlFor="Name">Nome</label>
                                <Input placeholder="Ex: salada" type="text" id="Name"/>
                            </div>

                            <div>
                                <label htmlFor="category">Categoria</label>
                                <Select name="category" id="category">
                                    <option value="" selected></option>
                                    <option value="refeicao">Refeição</option>
                                    <option value="sobremesa">Sobremesa</option>
                                    <option value="bebidas">Bebidas</option>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label htmlFor="ingredients">Ingredientes</label>
                                <Ingredients>
                                    <TagItem title="waffles" isNew/>
                                    <TagItem title="Adicionar" />
                                </Ingredients>
                            </div>

                            <div>
                                <label htmlFor="price">Preço</label>
                                <Input placeholder="R$ 00,00 " type="number" id="price"/>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label htmlFor="description">Descrição</label>
                                <Textarea  name="description" id="description" cols="30" rows="10" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></Textarea>
                            </div>
                            
                        </div>

                        <div>
                            <Button text="Salvar alterações" />
                        </div>
                    </Form>
                </Main>
            <Footer />

        </Container>
    )
}