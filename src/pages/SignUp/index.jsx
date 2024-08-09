import { useState } from 'react'
import { Container, Form } from './style'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Navigate, Link} from 'react-router-dom';

export default function SignUp() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")

  return (
    <Container>

      <div>
        <h1>food explorer</h1>
      </div>


      <div>
        <h2>Crie sua conta</h2>
        <Form>

          <div>
            <label htmlFor="Name">Seu nome</label>
            <Input
              type="text" 
              placeholder="Exemplo: Maria da Silva"
              id="Name"
              onChange={e => setName(e.target.value)}
              />
          </div>

          <div>
            <label htmlFor="Email">Email</label>
            <Input 
              type="email" 
              placeholder="Exemplo: exemplo@exemplo.com.br" 
              id="Email"
              onChange={e => setEmail(e.target.value)}
              />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <Input 
              type="password" 
              placeholder="No mínimo 6 caracteres" 
              id="password"
              onChange={e => setPassword(e.target.value)}
              />
          </div>

          <div>
            <Button text="Criar uma conta"/>
          </div>

        </Form>
          
        <Link to="/">
          <a href="#"> Já tenho uma conta</a>
        </Link>
        
      </div>
    </Container>
  )
}
