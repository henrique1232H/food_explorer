import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.button`
    font-size: 24px;
    font-weight: 800;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: color ease-in 200ms;

    &:hover {
        color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_300};
    }

`