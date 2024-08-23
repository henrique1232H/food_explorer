import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT.LIGHT_600 : "none"};
    padding: 0.1rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    border-color: ${({theme, isNew}) => !isNew ? theme.COLORS.LIGHT.LIGHT_600 : "none"};
    border-width: ${({theme, isNew}) => !isNew ? "1px" : "none"};
    border-style: ${({theme, isNew}) => !isNew ? "dashed" : "none"};

    > p, > button > svg {
        font-size: 16px;
        color: ${({theme, isNew}) => !isNew ? theme.COLORS.LIGHT.LIGHT_600 : "#fff"};

    }

    > button {
        background: none;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;

    }
`