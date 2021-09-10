import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { BrowserRouter } from "react-router-dom";
import { Container, Wrapper, Wrapper2 } from "./style";
import TrainingsList from "../SearchBar/TrainingsList";
import mockData from "../../mockData";
import PreviousTitle from "./PreviousTrainings/PreviousTitle";

const TrainingsPage = () => {
  const [input, setInput] = useState("");
  const [trainingsList, setTrainingsList] = useState([]);

  const updateInput = (input) => {
    const filtered = trainingsList.filter((trainings) => {
      return trainings.title.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    filtered && input ? setTrainingsList(filtered) : setTrainingsList(mockData);
  };

  useEffect(() => {
    setTrainingsList(mockData);
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Wrapper>
          <PreviousTitle />
          <SearchBar updateInput={updateInput} />
        </Wrapper>
        <Wrapper>
          <TrainingsList trainingsList={trainingsList} />
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
};

export default TrainingsPage;
