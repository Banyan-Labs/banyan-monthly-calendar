import React from 'react';
import TrainingCard from "./TrainingCard";
import { Container } from './style';




const TrainingCards = () => {
  const FakeData = [
    {
      title:"Mindfulness",
      role:"Re-entry Manager",
      presenter:"Julie Landers",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repudiandae et explicabo inventore dignissimos asperiores ut aut aspernatur vitae officia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam velit id hic reiciendis iusto excepturi vel dolor provident cupiditate.",
      img: ""
    },
    {
      title:"Mindfulness",
      role:"Re-entry Manager",
      presenter:"Julie Landers",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit voluptatum ducimus perferendis laudantium possimus illum exercitationem sit est ut repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aliquam velit id hic reiciendis iusto excepturi vel dolor provident cupiditate.",
      img: ""
    }
  ]
  return (
    <Container>
      {FakeData && 
      FakeData.map((userdata,index)=> (
        <TrainingCard
          role={userdata.role}
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