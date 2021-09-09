import React from "react";
import Footer from "../footer";
import SearchBar from "../SearchBar/SearchBar";
import { Container, Text, Wrapper } from "./style";

const ArchivesPage = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Previous Calls</Text>
        <SearchBar />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default ArchivesPage;
