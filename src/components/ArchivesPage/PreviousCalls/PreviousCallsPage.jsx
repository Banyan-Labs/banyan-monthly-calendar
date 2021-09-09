import React from "react";


const PreviousCallsPage = ({ previousCallsList }) => {
  return (
    <div>
      {previousCallsList.map((data, index) => (
        <div key={index}>
          <h1>{data.title}</h1>
          {/* <PreviousCallsList mockData2 = {data} /> */}
        </div>
      ))}
    </div>
  );
};

export default PreviousCallsPage;