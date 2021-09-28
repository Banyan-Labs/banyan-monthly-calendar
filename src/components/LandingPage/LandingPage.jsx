import React, { useEffect, useState } from "react";
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

const LandingPage = () => {

  const [data, setData] = useState([])
  
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const backendUrl = 'type your heroku backend url here'

    // change where we are fetching
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        console.log(json[0].title)
        setData(json)
      });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <Container>
      <Wrapper>
        <CurrentDate />
        {
          data.length > 0 ?
          data.map((month)=> (<h1>{month.title}</h1>)): (<div>DATA NOT FOUND</div>)
        }
        <IntroTitle />
        <ProfileCards />
        <TrainingTitle />
        <TrainingCards />
        <Notes />
      </Wrapper>
    </Container>
  );
};

export default LandingPage;
