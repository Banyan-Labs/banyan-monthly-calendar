import React from "react";
import {
  Container,
  Text,
  WrapperJan,
  WrapperFeb,
  WrapperMarch,
  WrapperApril,
  WrapperMay,
  WrapperJune,
  WrapperJuly,
  WrapperAugust,
} from "./style";

const PreviousCallsList = () => {
  return (
    <Container>
      <WrapperJan>
        <Text>Janurary 2021 Company Call</Text>
      </WrapperJan>
      <WrapperFeb>
        <Text>Feburary 2021 Company Call</Text>
      </WrapperFeb>
      <WrapperMarch>
        <Text>March 2021 Company Call</Text>
      </WrapperMarch>
      <WrapperApril>
        <Text>April 2021 Company Call</Text>
      </WrapperApril>
      <WrapperMay>
        <Text>May 2021 Company Call</Text>
      </WrapperMay>
      <WrapperJune>
        <Text>June 2021 Company Call</Text>
      </WrapperJune>
      <WrapperJuly>
        <Text>July 2021 Company Call</Text>
      </WrapperJuly>
      <WrapperAugust>
        <Text>August 2021 Company Call</Text>
      </WrapperAugust>
    </Container>
  );
};

export default PreviousCallsList;
