import React from "react";
import ProfileCard from './ProfileCard'
import { Container } from "./style";

const ProfileCards = () => {
  const Mockdata = [
    {
      img: "",
      name: "handea",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt distinctio corrupti quam commodi ipsa cum blanditiis ab ullam aliquid velit necessitatibus alias beatae dicta, ex iste quis repellendus maiores suscipit?",
    },
    {
      img: "",
      name: "Stephanie",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt distinctio corrupti quam commodi ipsa cum blanditiis ab ullam aliquid velit necessitatibus alias beatae dicta, ex iste quis repellendus maiores suscipit?",
    },
    {
      img: "",
      name: "Greg",
      text:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt distinctio corrupti quam commodi ipsa cum blanditiis ab ullam aliquid velit necessitatibus alias beatae dicta, ex iste quis repellendus maiores suscipit?",
    },
  ];

  return (
  <Container>
      {Mockdata && Mockdata.map((userdata, index) => (
        <ProfileCard img={userdata.img} name={userdata.name} text={userdata.text} key={index}/>
      ))}
  </Container>
  );
};

export default ProfileCards;
