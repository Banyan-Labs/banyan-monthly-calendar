import React from "react";
import TrainingCard from "../LandingPage/TrainingCards/TrainingCard";

const TrainingsList = ({ trainingsList, searchQuery }) => (
  <div>
    {trainingsList
      .filter(
        (data) =>
          new RegExp(`^${searchQuery}`, "i").test(
            data.trainings[0].trainingTitle
          ) ||
          new RegExp(`^${searchQuery}`, "i").test(data.trainings[0].presenter)
      )
      .map((data, index) => (
        <div key={index}>
          <TrainingCard
            title={data.trainings[0].trainingTitle}
            img={data.trainings[0].trainingImage}
            name={data.trainings[0].presenter}
            text={data.trainings[0].trainingDescription}
            role={data.trainings[0].role}
            key={index}
          />
        </div>
      ))}
  </div>
);

export default TrainingsList;
