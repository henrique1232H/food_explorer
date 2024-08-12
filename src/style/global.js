import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background: ${({theme}) => theme.COLORS.DARK.DARK_400};
        height: 100vh;
    }

    h2 {
        line-height: 140%;
    }
    
    h1 {
        font-size: 42px;
        color: #fff;
        font-family: "Roboto", sans-serif;
    }

    h2 {
        font-size: 32px;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    label, input::placeholder, .placeholderText {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

    }

    button, a {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        line-height: 24px;
        font-size: 14px;
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    a:hover {
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_400};
    }
`