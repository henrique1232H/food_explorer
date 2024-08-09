import styled from "styled-components";

export const Container = styled.input`
    background: ${({theme}) => theme.COLORS.DARK.DARK_900};
    border: none;
    padding: 1.4rem 1.6rem;
    color: #fff;
    border-radius: 0.8rem;
    width: 100%;
    outline: none;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_500};
    }

    &:focus {
        border: 1px outset #fff;
    }

`