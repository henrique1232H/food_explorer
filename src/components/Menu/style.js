import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: ${({theme}) => theme.COLORS.DARK.DARK_400};
    z-index: 1;

    @media (min-width: 900px) {
        display: none;
    }
    
`

export const Header = styled.header`
    background: ${({theme}) => theme.COLORS.DARK.DARK_700};
    padding: 58px 0 24px;

    > div {
        width: min(120rem, 90%);
        margin: 0 auto;

        > button {
            background: none;
            border: none;
            display: flex;
            align-items: center;
            cursor: pointer;
            gap: 16px;

            > h3 {
                color: #fff;
                font-size: 21px;
            }
        }
    }

     

`

export const Nav = styled.nav`
    width: min(120rem, 90%);
    margin: 4rem auto;
    height: 61vh;

    > ul {
        margin-top: 36px;

        > li {
            list-style: none;
            border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK.DARK_1000};
            padding: 20px 0 0;
            display: flex;
            align-items: center;
        }

    }
`