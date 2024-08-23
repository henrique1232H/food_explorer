import styled from "styled-components";

export const Container = styled.div`

    > main {
        padding-top: 40px;

        > h1 {
            margin: 24px 0 32px 0;
            font-size: 32px;
        }

    }
`

export const Form = styled.form`
    > div {
        display: flex;
        align-items: center;
        margin: 32px 0;

        
        > div {

            > label {
                color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_400};
                margin-bottom: 16px;
                display: block;
            }

        }

    }
    > div:last-child {
        display: flex;
        align-items: end;
        justify-content: end;
        width: 100%;

        > button {
            width: 15%;
        }
    }

    > div:nth-child(1) {

        > div:nth-child(2) {
            width: 60%;

        }

        > div:nth-child(3) {
            width: 30%;
        }
    }

    > div:nth-child(1), > div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    }

    > div:nth-child(2) {

        > div:nth-child(1) {
            width: 100%;
        }
    }

    > div:nth-child(3) {
        
        > div {
            width: 100%;
        }
    }

    @media (max-width: 900px) {
        > div {
            flex-direction: column;
            gap: 0;

        }

        > div:nth-child(1) {

            > div:nth-child(1) {
                width: 100%;
            }

            > div:nth-child(2) {
                width: 100%;
            }

            > div:nth-child(3) {
                width: 100%;
            }
            
        }

        > div:nth-child(2) {
            > div:last-child {
                width: 100%;
            }
        }

        > div:last-child {

            > button {
                width: 100%;
            }
        }
    }


`

export const Select = styled.select`
    width: 100%;
    padding: 1.4rem 1.6rem;
    border-radius: 0.4rem;
    background: ${({theme}) => theme.COLORS.DARK.DARK_800};
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_400};
    border: none;
`

export const Textarea = styled.textarea`
    width: 100%;
    background: ${({theme}) => theme.COLORS.DARK.DARK_800};
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_400};
    border: none;
    border-radius: 0.4rem;
    padding: 1rem;

    &::placeholder {
        font-size: 16px;
        font-family: "Roboto", sans-serif;
    }
`

export const Ingredients = styled.div`
    width: 100%;
    background: ${({theme}) => theme.COLORS.DARK.DARK_800};
    border: none;
    border-radius: 0.8rem;
    padding: 1.4rem 1.6rem;
    display: flex;
    gap: 2rem;
    align-items: center;
`