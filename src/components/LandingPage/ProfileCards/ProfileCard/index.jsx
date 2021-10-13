import React from "react";
import { Card, Wrapper, Headshot, Name, Text, FirstInitial } from "./style";


const ProfileCard = ({ img, name, text }) => (
  <Card>
    <Wrapper>
      <Headshot>
        {img ? img : <FirstInitial>{name[0].toUpperCase()}</FirstInitial>}
      </Headshot>
      <Name>{name && name}</Name>
      <Text>{text && text}</Text>
    </Wrapper>
  </Card>
);

export default ProfileCard;
