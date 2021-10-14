import styled from "styled-components";

export const Container = styled.p`
float:center;

  padding:5px;
  border-radius: 6px;
  text-align: center;
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
