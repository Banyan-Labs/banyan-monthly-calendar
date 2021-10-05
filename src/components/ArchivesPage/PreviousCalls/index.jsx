import React from "react";
import { Container, Text, MonthWrapper } from "./style";

const PreviousCallsList = ({ previousCallsList, searchQuery }) => {
  const customSearch = (value) => {
    let titleString = "";
    value.trainings.forEach(
      (training) => (titleString += training.trainingTitle)
    );
    console.log(titleString);
    return (
      new RegExp(`^${searchQuery}`, "i").test(value.month) ||
      titleString.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <Container>
      {previousCallsList.filter(customSearch).map((call, index) => (
        <MonthWrapper key={index}>
          <Text>{`${call.month} 2021 Company Call`}</Text>
        </MonthWrapper>
      ))}
    </Container>
  );
};

export default PreviousCallsList;
