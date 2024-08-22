import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;


    > h4 {
        font-size: 20px;
        font-weight: 800;
        color: #fff;
    }

    > button {
        background: none;
        border: none;
        color: #fff;
        font-size: 24px;
        cursor: pointer;
    }

    > button:last-child {
        margin-right: 16px;
    }
`