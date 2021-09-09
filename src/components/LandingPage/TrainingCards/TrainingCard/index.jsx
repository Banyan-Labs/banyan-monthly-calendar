import React from 'react';
import { Card, Presenter, Title, Headshot, Text, FirstInitial, Wrapper, Wrapper2, Wrapper3, Role } from './style';


const TrainingCard = ({ presenter, img, text, title, role }) => {
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
                    <Headshot>{img ? img : <FirstInitial> {presenter[0].toUpperCase()}</FirstInitial>} </Headshot>
                    <Wrapper3>
                    <Presenter>
                        Presented by: {presenter && presenter}
                        </Presenter>
                    <Role>
                        Role: {role && role}
                    </Role>
                     </Wrapper3>
                </Wrapper2>
            </Wrapper>
        </Card>

    )
}

export default TrainingCard