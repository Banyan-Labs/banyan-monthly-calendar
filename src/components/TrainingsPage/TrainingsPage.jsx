import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { BrowserRouter } from "react-router-dom";
import { Container, Wrapper1, Wrapper2 } from "./style";
import TrainingsList from "./TrainingsList";
import PreviousTitle from "./PreviousTrainings/PreviousTitle";
import axios from "axios";

const TrainingsPage = () => {
  const url = "https://banyan-cmc-backend.herokuapp.com/api/month";
  const [input, setInput] = useState("");
  const [trainingCardList, setTrainingCardList] = useState([]);

  const apiGetAllTrainingsData = async () => {
    await axios
      .get(url)
      .then((res) => {
        if (res.data) {
          setTrainingCardList(res.data);
        }
      })
      .catch((err) => console.error(err.message));
  };
  useEffect(() => {
    apiGetAllTrainingsData();
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Wrapper1>
          <PreviousTitle />
          <SearchBar updateInput={setInput} />
        </Wrapper1>
        <Wrapper2>
          {trainingCardList && (
            <TrainingsList
              trainingsList={trainingCardList}
              searchQuery={input}
            />
          )}
        </Wrapper2>
      </Container>
    </BrowserRouter>
  );
};

export default TrainingsPage;
