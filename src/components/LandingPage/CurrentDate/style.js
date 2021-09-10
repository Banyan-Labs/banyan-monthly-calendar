import styled from "styled-components";

export const Container = styled.p`
  height: 2%;
  width: 25%;
  margin: 1% 0% 1% 0%;
  padding: 1% 0% 1% 2%;
  background-color: #c4c4c4;
  border-radius: 6px;
  text-align: left;
  @media screen and (max-width: 768px) {
    width: 30%;
    margin-left: 10%;
    padding: 2% 0% 0% 1%;
  }
`;
export const Day = styled.div`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
