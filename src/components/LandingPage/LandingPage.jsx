import React from 'react';
import CurrentDate from "./CurrentDate";
import IntroTitle from "./IntroTitle";
import TrainingTitle from "./TrainingTitle";
import ProfileCards from './ProfileCards';
import Notes from "./Notes";

import { Container, Wrapper } from './style';

const LandingPage = () => {

    return (
        <Container>
            <Wrapper>
              <CurrentDate />
                 <IntroTitle />
                 <ProfileCards />
               <TrainingTitle />
              <Notes />
            </Wrapper>
        </Container>
    );
};

export default LandingPage;