import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PreviousCallsList from "./PreviousCalls";
import { Container, Text, Wrapper } from "./style";
import mockData2 from "./PreviousCalls/mockData2";


const ArchivesPage = () => {
  const [input, setInput] = useState("");
  const [previousCallsList, setPreviousCallsList] = useState([]);

  const updateInput = (input) => {
    const filtered = previousCallsList.filter((calls) => {
      return calls.title.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    filtered && input ? setPreviousCallsList(filtered) : setPreviousCallsList(mockData2);
  };

  useEffect(() => {
    setPreviousCallsList(mockData2);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Text>Previous Calls</Text>
        <SearchBar updateInput={updateInput}/>
      </Wrapper>
      <PreviousCallsList previousCallsList={previousCallsList}/>
    </Container>
  );
};

export default ArchivesPage;
