import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;


    > div:last-child {
        background: ${({theme}) => theme.COLORS.DARK.DARK_700};
        color: #fff;
        height: auto;
        width: 47.6rem;
        border-radius: 2rem;
        padding: 6.4rem;

        > h2 {
            margin-bottom: 32px;
        }
        
        > h2, > a {
            text-align: center;
            
        }

        > a {
            display: block;
        }

    }


    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;

        > div:last-child {
            background: none;

            > h2 {
                display: none;
                visibility: hidden;
            }
        }
    }
`

export const Form = styled.form`

    > div {
        margin-bottom: 3.2rem;

        > label {
            color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_400};
            display: block;
            margin-bottom: 8px;
        }
    }



`