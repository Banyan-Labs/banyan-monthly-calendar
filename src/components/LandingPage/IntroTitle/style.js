import styled from "styled-components";

export const Container = styled.div`
  height: 4%;
  width: 15%;
  margin-top: 1%;
  padding: 0.5% 0% 1% 2%;
  background-color: #c4c4c4;
  border-radius: 6px;
  text-align: left;
  @media screen and (max-width: 768px) {
    height: 2%;
    width: 20%;
    margin-left: 10%;
    padding: 1% 0% 0% 2%;
  }
`;
export const Text = styled.div`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
