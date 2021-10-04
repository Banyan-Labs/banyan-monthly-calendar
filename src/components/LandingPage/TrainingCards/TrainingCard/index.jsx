import React from 'react';
import { Card, Presenter, Title, Headshot, Text, FirstInitial, Wrapper, Wrapper2 } from './style';


const TrainingCard = ({  name, img, text, title, role }) => {
    // const { } = cardData
    return (
        <Card>
            <Wrapper>
                <Title>
                    {title && title}
                </Title>
                <Text>
                    {text && text}
                </Text>
                <Wrapper2>
                    <Headshot>{img ? img : <FirstInitial> {name[0].toUpperCase()}</FirstInitial>} </Headshot>
                    <Presenter>
                        Presented by: {name && name}
                        <br />
                        Role: {role && role}
                    </Presenter>
                     
                </Wrapper2>
            </Wrapper>
        </Card>

    )
}

export default TrainingCard