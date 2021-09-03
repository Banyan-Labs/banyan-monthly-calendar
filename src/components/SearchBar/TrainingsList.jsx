import React from "react";

const TrainingsList = ({ trainingsList }) => {
  return (
    <>
      {trainingsList.map((data, index) => (
        <div key={index}>
          <h1>{data.title}</h1>
        </div>
      ))}
    </>
  );
};

export default TrainingsList;
