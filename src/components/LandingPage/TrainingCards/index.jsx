import React, { useEffect, useState } from "react";
import TrainingCard from "./TrainingCard";
import { Container } from "./style";
import axios from "axios";

const TrainingCards = () => {
  const url = "https://banyan-cmc-backend.herokuapp.com/api/month";

  const [cardsToDisplay, setCardsToDisplay] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleDateString("en-US", {
      month: "long",
    })
  );
  const apiGetTrainingCardData = async () => {
    await axios
      .get(url)
      .then((res) => {
        if (res.data) {
          setCardsToDisplay(
            res.data.filter((card) => card.month === currentMonth)[0][
              "trainings"
            ]
          );
        }
      })
      .catch((err) => console.error(err.message));
  };
  useEffect(() => {
    apiGetTrainingCardData();
  }, []);

  return (
    <Container>
      {cardsToDisplay &&
        cardsToDisplay.map((data, index) => (
          <TrainingCard
            title={data.trainingTitle}
            img={data.trainingImage}
            name={data.presenter}
            text={data.trainingDescription}
            role={data.role}
            key={index}
          />
        ))}
    </Container>
  );
};
export default TrainingCards;
