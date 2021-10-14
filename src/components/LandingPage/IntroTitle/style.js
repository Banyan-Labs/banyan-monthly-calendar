import styled from "styled-components";

export const Container = styled.p`

 
  margin-top: 1%;
  padding: 0.5% 0% 1% 2%;
  display:flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 20%;
    margin-left: 10%;
    padding: 1% 0% 0% 2%;
  }
`;
export const Text = styled.div`
  font-size: 40px;
  border-bottom:#29648a solid 3px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

