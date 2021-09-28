import React from "react";
import CurrentDate from "./CurrentDate";
import IntroTitle from "./IntroTitle";
import TrainingTitle from "./TrainingTitle";
import ProfileCards from "./ProfileCards";
import Notes from "./Notes";
import TrainingCards from "./TrainingCards";

import { Container, Wrapper } from "./style";

// Get request goes here.
// use axios or fetch to go to http://yourbackendURL.com/months
// will return some object
// from that object we only need the first item


const LandingPage = () => (
  <Container>
    <Wrapper>
      <CurrentDate />
      <IntroTitle />
      <ProfileCards />
      <TrainingTitle />
      <TrainingCards />
      <Notes />
    </Wrapper>
  </Container>
);

export default LandingPage;
