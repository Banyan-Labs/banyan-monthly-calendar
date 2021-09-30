import React from "react";
import CurrentDate from "./CurrentDate";
import IntroTitle from "./IntroTitle";
import TrainingTitle from "./TrainingTitle";
import ProfileCards from "./ProfileCards";
import Notes from "./Notes";
import TrainingCards from "./TrainingCards";
//import axios from 'axios';

import { Container, Wrapper } from "./style";

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
