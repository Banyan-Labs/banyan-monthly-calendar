import styled from "styled-components";

export const Container = styled.p`
display:flex;
justify-content: center;
  margin: 1% 0% 10% 0%;
  padding: 0.5% 0% 1% 2%;
  @media screen and (max-width: 768px) {
    width: 20%;
    padding: 2% 0% 0% 2%;
  }
`;
export const Text = styled.div`
  
font-size: 40px;
border-bottom:#29648a solid 3px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
