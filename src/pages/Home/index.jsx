import { useState } from 'react'
import { Container, Main } from './style'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import food from "../../assets/Mask group.png"
import Section from '../../components/Section'

export default function Home() {

  return (
    <Container>
      <Header />

      <Main>
          <div>

            <div>
              <img src={food} alt="" />
            </div>
            

            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
            
          </div>

          <Section title="Refeições">

          </Section>

          <Section title="Sobremesas">

          </Section>

          <Section title="Bebidas">

          </Section>
      </Main>

                    
      <Footer />
    </Container>
  )
}
