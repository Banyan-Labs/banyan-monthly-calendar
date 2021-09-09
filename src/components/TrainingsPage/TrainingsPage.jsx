import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { BrowserRouter } from "react-router-dom";
import { Container, Wrapper1, Wrapper2 } from "./style";
import TrainingsList from "./TrainingsList";
import mockData from "../../mockData";
import PreviousTitle from "./PreviousTrainings/PreviousTitle";

const TrainingsPage = () => {
  const [input, setInput] = useState("");
  const [trainingsList, setTrainingsList] = useState([]);

  useEffect(() => {
    setTrainingsList(mockData);
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Wrapper1>
          <PreviousTitle />
          <SearchBar updateInput={setInput} />
        </Wrapper1>
        <Wrapper2>
          <TrainingsList trainingsList={trainingsList} searchQuery={input} />
        </Wrapper2>
      </Container>
    </BrowserRouter>
  );
};

export default TrainingsPage;
