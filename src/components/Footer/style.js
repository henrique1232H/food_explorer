import styled from "styled-components";

export const Container = styled.footer`
    background: ${({theme}) => theme.COLORS.DARK.DARK_600};
    padding: 2.8rem 0;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: min(120rem, 80%);
        margin: 0 auto;

        > img {
            margin-left: 3.5rem;

        }
        
        > h5 {
            color: #fff;
        }

    }
    
    @media (max-width: 990px) {

        > div {
            width: min(120rem, 90%);
            > img {margin-left: 0;}
        }
        
    }

    
`