import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    background: ${({theme}) => theme.COLORS.DARK.DARK_600};
    padding: 2.8rem 0;
    grid-area: header;

    > nav {
        width: min(120rem, 90%);
        margin: 0 auto;
        display: flex;
        align-items: center;


        > div > img {
            margin-right: 3.2rem;
        }

        > button {
            width: 30%;
            margin: 0 3.2rem;

            @media (max-width: 1100px) {
                width: 40%;
            }
        }


        @media (max-width: 900px) {

            > div:nth-child(2) {
                width: 100%;
                text-align: center;
                margin: 0 auto;
            }

            > button {
                display: none;
            }

            > div:nth-child(3) {
                display: none;
                visibility: hidden;
            }


        }
    }
    
    
`

export const Back = styled(Link)`
    
    display: flex;
    align-items: center;

    > svg {
        font-size: 32px;
    }

    @media (max-width: 900px) {
           display: none;
        }
`


export const LinkButton = styled(Link)`
    width: 30%;
    margin: 0 14px;

    @media (max-width: 900px) {
        display: none;
    }

`

export const MobileButton = styled.div`

    > button {
        display: none;
    }
    

    @media (max-width: 900px) {
        > button {
                display: block;
                background: none;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                position: relative;

                > svg {
                    color: #fff;
                    font-size: 2.4rem;
                }

                > span {
                    top: -10px;
                    right: -5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: ${({theme}) => theme.COLORS.TINTS.TOMATO_200};
                    border-radius: 10rem;
                    color: #fff;
                    height: 20px;
                    width: 20px;

                    position: absolute;
                }
        }

    }
`
