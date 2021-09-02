import React from 'react';
import { Card,Presenter,Title,Img,Text,FirstInitial } from './style';


const TrainingCard = ({presenter,img,text,title})=>{
    return (
        
        <Card>
           <Title>
            {title && title}
        </Title>
    <Presenter>
        {presenter && presenter}
    </Presenter>
    
    <Img>{img ? img : <FirstInitial> {presenter[0].toUpperCase() }</FirstInitial> } </Img>
    <Text>
        {text && text}
    </Text>
    
</Card>

    )
}

export default TrainingCard