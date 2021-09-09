import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { BrowserRouter } from "react-router-dom";
import { Container, Wrapper1, Wrapper2 } from "./style";
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
        <Wrapper1>
          <PreviousTitle />
          <SearchBar updateInput={updateInput} />
        </Wrapper1>
        <Wrapper2>
          <TrainingsList trainingsList={trainingsList} />
        </Wrapper2>
      </Container>
    </BrowserRouter>
  );
};

export default TrainingsPage;
