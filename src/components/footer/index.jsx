import React, { useState } from "react";
import {
  Container,
  Logo,
  FooterLinksContainer,
  FooterLink,
  Button,
} from "./style";
import Banyanlabslogo from "../../resource/images/Banyanlabslogo.png";
import SignIn from "../SignIn/index";
import SampleModal from "../SampleModal";

const Footer = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  
  //   const openModal = () => {
  //     setIsOpen(true);
  //   };
  const closeModal = () => {
    setToggleModal(true);
  };
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  return (
    <Container>
      <Logo src={Banyanlabslogo} alt="Banyan Labs Logo"></Logo>
      <FooterLinksContainer>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/trainings-page">Trainings</FooterLink>
        <FooterLink to="/archives-page">Archive</FooterLink>
        <SignIn show={toggleModal} />
        {/* <Button onClick={() => setToggleModal(true)}>Sign out</Button> */}
        <SampleModal />
      </FooterLinksContainer>
    </Container>
  );
};

export default Footer;
