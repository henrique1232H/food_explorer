import styled from "styled-components";

export const Container = styled.section`
 margin-bottom: 4.8rem;

 > h2 {
    color: #fff;
    margin-bottom: 1rem;
 }

 > div {
   z-index: 0;
   

   @media (max-width: 900px) {
     > button {
       display: none;
      }
   }
 }

`