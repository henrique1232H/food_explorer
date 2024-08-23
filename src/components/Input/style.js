import styled from "styled-components";

export const Container = styled.div`
    background: ${({theme}) => theme.COLORS.DARK.DARK_800};
    border: none;
    border-radius: 0.8rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_500};
        margin-left: 20px;
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

`