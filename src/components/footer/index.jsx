import React, { useState } from "react";
import {
  Container,
  Logo,
  FooterLinksContainer,
  FooterLink
} from "./style";
import Banyanlabslogo from "../../resource/images/Banyanlabslogo.png";
import SignIn from "../SignIn/index";


const Footer = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  
    const openModal = () => {
      setIsOpen(true);
    };
  const closeModal = () => {
    setToggleModal(true);
  };
  return (
    <Container>
      <Logo src={Banyanlabslogo} alt="Banyan Labs Logo"></Logo>
      <FooterLinksContainer>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/trainings-page">Trainings</FooterLink>
        <FooterLink to="/archives-page">Archive</FooterLink>
        <SignIn show={toggleModal} />
      </FooterLinksContainer>
    </Container>
  );
};

export default Footer;
