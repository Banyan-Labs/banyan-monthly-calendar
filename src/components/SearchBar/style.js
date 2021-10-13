import styled from "styled-components";

export const Container = styled.form`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: fit-content;
  border-radius: 0.3em;
  padding: 0.5em 0.5em;
  white-space: nowrap;
  @media screen and (max-width: 750px) {
    width: fit-content;
  }
`;
export const Input = styled.input`
  font-size: calc(0.5em + 1vmin);
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
