import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background: ${({theme}) => theme.COLORS.TINTS.TOMATO_100};
    border: none;
    color: #fff;
    padding: 12px 0;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:  4px;
    transition: background 200ms ease-in;

    > svg {
        font-size: 22px;
    }

    &:hover {
        background: ${({theme}) => theme.COLORS.TINTS.TOMATO_400};
    }
`