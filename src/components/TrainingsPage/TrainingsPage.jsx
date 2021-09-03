import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { BrowserRouter } from "react-router-dom";
import { Container, Wrapper } from "./style";
import TrainingsList from "../SearchBar/TrainingsList";
import mockData from "./mockData";

const TrainingsPage = () => {
  const [input, setInput] = useState("");
  const [trainingsList, setTrainingsList] = useState([]);

  const updateInput = (input) => {
    const filtered = trainingsList.filter((trainings) => {
      return trainings.title.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setTrainingsList(filtered);
  };

  useEffect(() => {
    setTrainingsList(mockData);
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Wrapper>
          <SearchBar updateInput={updateInput} />
          <TrainingsList trainingsList={trainingsList} />
        </Wrapper>
      </Container>
    </BrowserRouter>
  );
};

export default TrainingsPage;
