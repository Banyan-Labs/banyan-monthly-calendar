import React from "react";
import { Container, Text, MonthWrapper } from "./style";

const PreviousCallsList = ({ previousCallsList, searchQuery }) => (
  <Container>
    {previousCallsList
      .filter((call) => new RegExp(`^${searchQuery}`, "i").test(call.month))
      .map((call, index) => (
        <MonthWrapper key={index}>
          <Text>{`${call.month} 2021 Company Call`}</Text>
        </MonthWrapper>
      ))}
  </Container>
);

export default PreviousCallsList;
