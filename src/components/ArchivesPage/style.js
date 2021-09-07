import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

export const Text = styled.div`
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;