import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PreviousCallsList from "./PreviousCalls";
import { Container, Text, Wrapper } from "./style";
import mockData2 from "./PreviousCalls/mockData2";

const ArchivesPage = () => {
  const [input, setInput] = useState("");
  const [previousCallsList, setPreviousCallsList] = useState([]);

  useEffect(() => {
    setPreviousCallsList(mockData2);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Text>Previous Calls</Text>
        <SearchBar updateInput={setInput} />
      </Wrapper>
      <PreviousCallsList
        previousCallsList={previousCallsList}
        searchQuery={input}
      />
    </Container>
  );
};

export default ArchivesPage;
