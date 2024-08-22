import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
 padding: 2.4rem 2.4rem 4.6rem 2.4rem;
 background: ${({theme}) => theme.COLORS.DARK.DARK_200};
 border: 1px solid ${({theme}) => theme.COLORS.DARK.DARK_300};

 border-radius: 1rem;
 text-align: center;
 width: 304px;

 > div:nth-child(1) {
   display: flex;
   width: 100%;
   justify-content: end;
 }

 > div:nth-child(1) > button {
   display: flex;
   background: none;
   border: none;
   cursor: pointer;
   
   > svg {
      color: ${({theme, heart}) => !heart ? "#fff" : "red"};
   }
 }

 > div:last-child  {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

 }

 > p {
   color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_400};
 }



 > h2 {
   color: ${({theme}) => theme.COLORS.TINTS.CAKE_100};
   font-size: 32px;
   margin-bottom: 15px;
 }
 
 > img {
    height: 176px;
    width: 176px;
 }

 > p {
   margin-bottom: 15px
 }

 @media (max-width:900px) {
   width: 21rem;
   height: auto;

   > img {
      height: 8.8rem;
      width: 8.8rem;
   }

   > h2 {
      font-size: 16px;
   }

   > p {
      display: none;
   }

   > div:last-child {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > div {
         display: flex;
         justify-content: center;
         margin-bottom: 16px;

         > button:last-child {
            margin: 0;
         }
      }
   }
 }
`

export const GoToDish = styled(Link)`
    > h3 {
      font-size: 24px;
      font-weight: 800;
      margin: 15px 0;
   }

   @media (max-width: 900px) {
      > h3 {
         font-size: 14px;
      }
   }
`