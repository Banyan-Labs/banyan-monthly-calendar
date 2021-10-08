import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import PreviousCallsList from "./PreviousCalls";
import { Container, Text, Wrapper } from "./style";
import axios from "axios";

const ArchivesPage = () => {
  const [input, setInput] = useState("");
  const [previousCallsList, setPreviousCallsList] = useState([]);
  const url = "https://banyan-cmc-backend.herokuapp.com/api/month";

  useEffect(() => {
    axios.get(url).then((res) => {
      setPreviousCallsList(res.data);
      console.log(res.data);
    });
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
