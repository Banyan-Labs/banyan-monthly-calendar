import styled from "styled-components";

export const Container = styled.div`
  height: 5%;
  width: 80%;
  margin: 30% 0% -10% -80%;
  @media screen and (max-width: 768px) {
    height: 2%;
    width: 20%;
    margin: 1% 0% 3% 10%;
    padding: 1% 0% 0% 2%;
  }
`;
export const Text = styled.div`
  font-size: 25px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
