import styled from "styled-components";

export const Container = styled.div`
  height: 5%;
  width: 25%;
  margin: 1% 0% 1% 0%;
  padding: 1% 0% 1% 2%;
  background-color: #c4c4c4;
  border-radius: 6px;
  text-align: left;
  @media screen and (max-width: 768px) {
    height: 2%;
    width: 30%;
    margin-left: 10%;
    padding: 2% 0% 0% 1%;
  }
`;
export const Day = styled.div`
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

