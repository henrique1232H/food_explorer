import { useEffect, useState, } from 'react'
import { Container, Main } from './style'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import food from "../../assets/Mask group.png"
import Section from '../../components/Section'
import Card from '../../components/Card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import responsiveCarousel from '../../components/responsiveCarousel'

export default function Home() {

  const [dishes, setDish] = useState([])
  const [count, setCount] = useState(0);
  const [isAdmin, setAdmin] = useState(true)

  const addDish = (dish) => {
    dish.amount = dish.amount + 1;
    setCount(count + 1)
    
  }

  const removeDish = (dish) => {
    dish.amount = dish.amount - 1;
    setCount(count - 1)
  }


  useEffect(() => {
    setDish(prevState => [{title: "Spaguetti Gambe", description: "Massa fresca com camarões", price: 50, amount: count},{title: "Spaguetti Gambe", description: "Massa fresca com camarões", price: "50,00", amount: count}, {title: "Spaguetti Gambe", description: "Massa fresca com camarões", price: 50, amount: count}, {title: "Spaguetti Gambe", description: "Massa fresca com camarões", price: 50, amount: count}, {title: "Spaguetti Gambe", description: "Massa fresca com camarões", price: 50, amount: count}, {title: "Spaguetti Gambe", description: "Massa fresca com camarões", price: 50, amount: count}]);
  }, [])

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

            <Carousel
              responsive={responsiveCarousel} 
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              partialVisible
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              >
              
              {
                dishes.map((dish, index) => {
                  return <Card key={index} title={dish.title} description={dish.description} price={dish.price} isAdmin={isAdmin} count={dish.amount} addDish={() => addDish(dish)} removeDish={() => removeDish(dish)}/>
                })
              }


            </Carousel>
          </Section>

          <Section title="Sobremesas">

            <Carousel
                responsive={responsiveCarousel} 
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                >
                
                {
                  dishes.map((dish, index) => {
                    return <Card key={index} title={dish.title} description={dish.description} price={dish.price} isAdmin={isAdmin} count={dish.amount} add={() => addDish(dish)} remove={() => removeDish(dish)}/>
                  })
                }


              </Carousel>
          </Section>

          <Section title="Bebidas">

            <Carousel
                responsive={responsiveCarousel} 
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                partialVisible
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                >
                
                {
                  dishes.map((dish, index) => {
                    return <Card key={index} title={dish.title} description={dish.description} price={dish.price} isAdmin={isAdmin} count={dish.amount} add={() => addDish(dish)} remove={() => removeDish(dish)}/>
                  })
                }


              </Carousel>
          </Section>
      </Main>

                    
      <Footer />
    </Container>
  )
}
