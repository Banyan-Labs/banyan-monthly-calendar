import styled from "styled-components";

export const Container = styled.p`
  height: 2%;
  width: 15%;
  margin: 1% 0% 10% 0%;
  padding: 0.5% 0% 1% 2%;
  background-color: #c4c4c4;
  border-radius: 6px;
  text-align: left;
  @media screen and (max-width: 768px) {
    width: 20%;
    padding: 2% 0% 0% 2%;
  }
`;
export const Text = styled.div`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
