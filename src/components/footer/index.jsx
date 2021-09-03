import React from "react";
import { Container, Logo, FooterLinksContainer, FooterLink } from "./style";
import Banyanlabslogo from "../../resource/images/Banyanlabslogo.png";

const Footer = () => {
  return (
    <Container>
      <Logo src={Banyanlabslogo} alt="Banyan Labs Logo"></Logo>
      <FooterLinksContainer>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/trainings-page">Trainings</FooterLink>
        <FooterLink to="/archives-page">Archive</FooterLink>
      </FooterLinksContainer>
    </Container>
  );
};

export default Footer;
