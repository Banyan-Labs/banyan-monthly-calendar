import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PreviousCallsList from "./PreviousCallsList";
import { Container, Text, Wrapper } from "./style";

const ArchivesPage = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Previous Calls</Text>
        <SearchBar />
      </Wrapper>
      <PreviousCallsList />
    </Container>
  );
};

export default ArchivesPage;
