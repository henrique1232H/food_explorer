import { Container, Form, Select, Textarea } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ButtonBack from "../../components/ButtonBack";
import Main from "../../components/Main";
import Input from "../../components/Input";
import Button from "../../components/Button";


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
                                <Input type="text" id="Name"/>
                            </div>

                            <div>
                                <label htmlFor="category">Categoria</label>
                                <Select name="category" id="category">
                                    <option value="refeicao">Refeição</option>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label htmlFor="ingredients">Ingredientes</label>
                                <Input type="text" id="ingredients"/>
                            </div>

                            <div>
                                <label htmlFor="price">Preço</label>
                                <Input type="number" id="price"/>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label htmlFor="description">Descrição</label>
                                <Textarea name="description" id="description" cols="30" rows="10" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></Textarea>
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