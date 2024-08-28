import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    > main {
        padding: 4rem 0 3.9rem 0;


        > div {
            display: flex;
            align-items: center;

            > img {
                width: 39rem;
                height: 38rem;
                margin-right: 47px;
                margin-top: 42px;
            }

            > div {
                > p {
                    font-size: 24px;
                    color: #fff;
                    margin: 24px 0;
                }

                > div:last-child {
                    display: flex;
                    width: 100%;                    
                }
            }
        }
    }

    @media (max-width: 900px) {
        > main {
            
            > div {
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;

                > img {
                    height: 26.4rem;
                    width: 26.4rem;
                    margin: 0 auto;
                    display: block;
                }

                > div {
                    > h1 {
                        font-size: 27px;
                        margin-top: 16px;
                        margin-bottom: 24px;
                    }

                    > p {
                        font-size: 17px;
                        margin-bottom: 24px;
                    }

                    > div:last-child {
                        display: flex;
                        justify-content: center;
                    }

                }

            }
        }
    }
`

export const Tags = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 48px;

    @media (max-width: 900px) {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(3, 140px);
        row-gap: 20px;
    }
`


export const Edit = styled(Link)`

    width: 20%;


    @media (max-width: 900px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;


    }
`