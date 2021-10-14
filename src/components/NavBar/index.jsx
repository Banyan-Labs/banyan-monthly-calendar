import React from "react";
import Banyanlabslogo from "../../resource/images/Banyanlabslogo.png";
import { Container, NavLinks, NavLinksContainer, Logo, Wrapper, Text } from "./style";

const NavBar = () => (
  <Container>
    <Wrapper>
    <Logo src={Banyanlabslogo} alt="Banyan Labs Logo"></Logo>
    </Wrapper>
    <Text>Banyan Labs Monthly Calendar</Text>
    <NavLinksContainer>
      <NavLinks to="/">Home</NavLinks>
      <NavLinks to="/trainings-page">Trainings</NavLinks>
      <NavLinks to="/archives-page">Archive</NavLinks>
    </NavLinksContainer>
  </Container>
);

export default NavBar;
