import React from "react";
import TrainingCard from "../LandingPage/TrainingCards/TrainingCard";

const TrainingsList = ({ trainingsList }) => {
  return (
    <div>
      {trainingsList.map((data, index) => (
        <div key={index}>
          <h1>{data.title}</h1>
          <TrainingCard cardData = {data} />
        </div>
      ))}
    </div>
  );
};

export default TrainingsList;
