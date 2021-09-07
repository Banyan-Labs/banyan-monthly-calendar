import React from "react";
import { Container, Input } from "./style";

const SearchBar = ({ updateInput }) => {
  return (
    <Container>
      <Input
        type="search"
        placeholder={"Search"}
        onChange={({ target: { value } }) => updateInput(value)}
      />
    </Container>
  );
};

export default SearchBar;
