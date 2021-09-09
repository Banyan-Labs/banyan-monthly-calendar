import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Container, Text, Wrapper } from "./style";

const ArchivesPage = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Previous Calls</Text>
        <SearchBar />
      </Wrapper>
    </Container>
  );
};

export default ArchivesPage;
