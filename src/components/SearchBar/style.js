import styled from "styled-components";

export const Container = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: right;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #c4c4c4;
  margin: 50% -10% 1% 100%;
  padding: 10px;
  height: 20px;
  width: 300px;
  border-radius: 6px;
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