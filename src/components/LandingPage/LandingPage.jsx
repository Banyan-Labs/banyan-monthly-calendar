import React, { useEffect, useState } from "react";
import CurrentDate from "./CurrentDate";
import IntroTitle from "./IntroTitle";
import TrainingTitle from "./TrainingTitle";
import ProfileCards from "./ProfileCards";
import Notes from "./Notes";
import TrainingCards from "./TrainingCards";
import { Container, Wrapper } from "./style";



const LandingPage = () => {

  const [data, setData] = useState([])
  
  useEffect(() => {
    // const backendUrl = 'type your heroku backend url here'

    // fetch('https://jsonplaceholder.typicode.com/posts')
    const backendUrl = 'https://banyan-cmc-backend.herokuapp.com/'
    fetch(backendUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        console.log(json[0].title)
        setData(json)
      });
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
