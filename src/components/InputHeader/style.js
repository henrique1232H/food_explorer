import styled from "styled-components";



export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.DARK.DARK_800};
    border: none;
    border-radius: 0.8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    > div {
        position: absolute;
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_500};
        font-size: 13px;
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 1;
     
        
    }
    
    > input {
        background: none;
        border: none;
        width: 100%;
        padding: 1.4rem 1.6rem;
        border-radius: 0.8rem;
        color: #fff;
        outline: none;


    }

    > input::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_500};
        text-align: center;
    }

    > input:focus {
        border: 1px outset #fff;
    }


`