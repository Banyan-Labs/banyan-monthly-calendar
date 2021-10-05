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
          <h1>{data.trainings[0].trainingTitle}</h1>
          <TrainingCard 
         title={data.trainings[0].trainingTitle}
           img={data.trainings[0].trainingImage}
           name={data.trainings[0].presenter}
           text={data.trainings[0].trainingDescription}
           role={data.trainings[0].role}
           key={index} />
        </div>
      ))}
  </div>
);

export default TrainingsList;
