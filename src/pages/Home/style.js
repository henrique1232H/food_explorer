import styled from "styled-components";
import food from "../../assets/Mask group.png"
import Carousel from 'react-multi-carousel'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas: 
    "header header header"
    "main main main"
    "footer footer footer";
`


export const Main = styled.main`
    width: min(120rem, 90%);
    height: auto;
    margin: 0 auto;
    grid-area: main;
    position: relative;


    
    > div {
        margin-top: 16.4rem;
        margin-bottom: 6.2rem;
        border-radius: 1rem;
        width: 100%;
        background: linear-gradient(#091e26, #00131c);
        height: 26rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        
        > div:nth-child(1) {
            position: relative;
            
            
            > img {
                position: absolute;
                top: -27rem;
                width: 100%;
                max-width: 20rem;
                min-width: 66rem;
                
            }

        }
        
        > div:nth-child(2) {
            display: flex;
            flex-direction: column;
            padding-right: 10rem;
            
            
            > p {
                color: #fff;
                font-size: 16px;
            }
        }
        
        
        
    }
    
    @media (max-width: 900px) {
        > div {
            height: 12rem;
            margin-top: 4.4rem;
            position: relative;

            > div:nth-child(1) {
                background-image: url(${food});
                background-position: center center;
                background-repeat: no-repeat;
                background-size: contain;
                width: 70%;
                height: 100%;

                > img {
                    display: none;
                }
            }

            > div:nth-child(2) {
                margin-left: 1rem;

                > h1 {
                    font-size: 18px;
                    width: 100%;
                }

                > p {
                    font-size: 12px;
                }
            }
        }
    }

`