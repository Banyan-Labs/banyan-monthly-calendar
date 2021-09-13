import styled from "styled-components";

export const Container = styled.form`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #c4c4c4;
  padding: 10px;
  height: 20px;
  width: 300px;
  border-radius: 6px;
  margin-right: 2%;
`;
export const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  border: none;
  color: black;

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: black;
  }
`;
