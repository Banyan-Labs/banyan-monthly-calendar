import React from "react";
import { Container, Text, MonthWrapper } from "./style";

const PreviousCallsList = ({ previousCallsList, searchQuery }) => (
  <Container>
    {previousCallsList
      .filter((call) => new RegExp(`^${searchQuery}`, "i").test(call.title))
      .map((call, index) => (
        <MonthWrapper key={index}>
          <Text>{`${call.title} 2021 Company Call`}</Text>
        </MonthWrapper>
      ))}
  </Container>
);

export default PreviousCallsList;
