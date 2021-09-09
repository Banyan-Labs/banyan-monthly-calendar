import React from "react";
import TrainingCard from "../LandingPage/TrainingCards/TrainingCard";

const TrainingsList = ({ trainingsList, searchQuery }) => (
  <div>
    {trainingsList
      .filter(
        (data) =>
          new RegExp(`^${searchQuery}`, "i").test(data.title) ||
          new RegExp(`^${searchQuery}`, "i").test(data.presenter)
      )
      .map((data, index) => (
        <div key={index}>
          <h1>{data.title}</h1>
          <TrainingCard cardData={data} />
        </div>
      ))}
  </div>
);

export default TrainingsList;
