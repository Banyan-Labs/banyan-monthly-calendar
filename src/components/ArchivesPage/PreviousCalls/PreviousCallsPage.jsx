import React from "react";

const PreviousCallsPage = ({ previousCallsList }) => {
  return (
    <div>
      {previousCallsList.map((data, index) => (
        <div key={index}>
          <h1>{data.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default PreviousCallsPage;
