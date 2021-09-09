import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  justify-content: space-evenly;
  display: flex;
  margin-top: 3%;
  width: 100%;
`;

export const Text = styled.div`
  font-size: 36px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
