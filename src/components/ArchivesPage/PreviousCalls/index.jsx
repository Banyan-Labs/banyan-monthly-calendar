import React from "react";
import {
  Container,
  Text,
  MonthWrapper
} from "./style";

const PreviousCallsList = () => {
  return (
    <Container>
      <MonthWrapper>
        <Text>Janurary 2021 Company Call</Text>
      </MonthWrapper>
      <MonthWrapper>
        <Text>Feburary 2021 Company Call</Text>
      </MonthWrapper>
      <MonthWrapper>
        <Text>March 2021 Company Call</Text>
      </MonthWrapper>
      <MonthWrapper>
        <Text>April 2021 Company Call</Text>
      </MonthWrapper>
      <MonthWrapper>
        <Text>May 2021 Company Call</Text>
      </MonthWrapper>
      <MonthWrapper>
        <Text>June 2021 Company Call</Text>
      </MonthWrapper>
      <MonthWrapper>
        <Text>July 2021 Company Call</Text>
      </MonthWrapper>
      <MonthWrapper>
        <Text>August 2021 Company Call</Text>
      </MonthWrapper>
    </Container>
  );
};

export default PreviousCallsList;
