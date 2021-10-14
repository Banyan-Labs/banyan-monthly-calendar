import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;
export const Text = styled.div`
  font-size: 25px;
  border-bottom: #29648a solid 3px;
  white-space: nowrap;
  // font-size: calc(0.8em + 1vmin);
  @media screen and (max-width: 380px) {
    padding-right: 1em;
  }
`;
export const SearchBar = styled.div`
`;
