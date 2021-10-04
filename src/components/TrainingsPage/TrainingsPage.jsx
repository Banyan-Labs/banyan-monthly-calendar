import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { BrowserRouter } from "react-router-dom";
import { Container, Wrapper1, Wrapper2 } from "./style";
import TrainingsList from "./TrainingsList";
import mockData from "../../mockData";
import PreviousTitle from "./PreviousTrainings/PreviousTitle";
import axios from 'axios';

const TrainingsPage = () => {
  const [input, setInput] = useState("");
  const [trainingsList, setTrainingsList] = useState([]);

  useEffect(() => {
    setTrainingsList(mockData);
  }, []);
  // const [input, setInput] = useState('')
  // const [trainingsList, setTrainingsList] = useState([])
  // const url = 'https://banyan-cmc-backend.herokuapp.com/api/month'

  // useEffect(() => {
  //   axios.get(url).then(res => {
  //     setTrainingsList(res.data)
  //     console.log(res.data)
  //   })
  // }, []);

  return (
    <BrowserRouter>
      <Container>
        <Wrapper1>
          <PreviousTitle />
          <SearchBar updateInput={setInput} />
        </Wrapper1>
        <Wrapper2>
        {trainingsList &&  <TrainingsList trainingsList={trainingsList} searchQuery={input} />}
        </Wrapper2>
      </Container>
    </BrowserRouter>
  );
};

export default TrainingsPage;
