import React, { useState } from 'react';
import TrainingCard from "./TrainingCard";
import { Container } from './style';




const TrainingCards = () => {
  const FakeData = [
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
     
       {/* <CardTitle>Card title</CardTitle>
       <CardText className="cardText">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
       <CardSubtitle tag="h6" className="cardSubTitle">Card subtitle</CardSubtitle>
       
        <CardBody>
            <Row style={{marginTop:'5%'}}>
                <Col> 
                
                <img className="cardImage" src={avatar} alt="avatar" /> 
                
                </Col>
                <Col style={{marginRight:'8%'}}>
                
                
                </Col>
                </Row>
        
         
        </CardBody> */}
      


      
    </Container>

    
  );
};

  
  export default TrainingCards