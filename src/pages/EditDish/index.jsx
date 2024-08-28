import { Container, DeleteButton, Form, Ingredients, Select, Textarea, Upload } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ButtonBack from "../../components/ButtonBack";
import Main from "../../components/Main";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TagItem from "../../components/TagItem";
import { FiUpload } from "react-icons/fi";


export default function EditDish() {
    return (
        <Container>
            <Header />
                <Main>
                    <ButtonBack title="Voltar"/>
                    <h1>Editar prato</h1>

                    <Form action="get">
                        <div>
                            <Upload>
                                <label htmlFor="avatar">Imagem do prato</label>

                                <label htmlFor="avatar">
                                    <FiUpload />

                                    <p>Selecione avatar</p>

                                    <input
                                        id="avatar"
                                        type="file"
                                        accept="image/png, image/jpeg"
                                    />

                                </label>

                                
                            </Upload>

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
                            <DeleteButton>
                                Excluir prato
                            </DeleteButton>
                            <Button text="Salvar alterações" />
                        </div>
                    </Form>
                </Main>
            <Footer />

        </Container>
    )
}