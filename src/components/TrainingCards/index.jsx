import React from 'react';
import TrainingCard from "./TrainingCard";
import { Container } from './style';




const TrainingCards = () => {
  const FakeData = [
    {
      title:"mindfulness",
      presenter:"Julie Landers",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam velit id hic reiciendis iusto excepturi vel dolor provident cupiditate.",
      img: ""
    },
    {
      title:"mindfulness",
      presenter:"Julie Landers",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam velit id hic reiciendis iusto excepturi vel dolor provident cupiditate.",
      img: ""
    }
  ]
  return (
    <Container>
      {FakeData && 
      FakeData.map((userdata,index)=>(
        <TrainingCard
        title={userdata.title}
        presenter={userdata.presenter}
        text={userdata.text}
        img={userdata.img}
        key={index}
        />
 ))}
     
 
   
    </Container>

    
  );
};

  
  export default TrainingCards