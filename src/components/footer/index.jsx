import React,
  { useState, useEffect}
  from "react";
import { Container, Logo, FooterLinksContainer, FooterLink } from "./style";
import Banyanlabslogo from "../../resource/images/Banyanlabslogo.png";
import SignIn from "../SignIn/index";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const history = useHistory();
   const {  loginWithRedirect, logout, isAuthenticated, isLoading, user } =
   useAuth0();
   console.log(user, "Footer User")
   useEffect(() => {
     if (!isLoading && user && isAuthenticated) {
      
       history.push('/adminForm');
    }
  }, [isLoading]);
  return (
    <Container>
      <Logo src={Banyanlabslogo} alt="Banyan Labs Logo"></Logo>
      <FooterLinksContainer>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/trainings-page">Trainings</FooterLink>
        <FooterLink to="/archives-page">Archive</FooterLink>
        {/* <SignIn /> */}
        <button onClick={()=>loginWithRedirect()}
         >SignIn</button> 
         <button onClick={()=>logout()}
         >Logout</button> 
      </FooterLinksContainer>
    </Container>
  );
};

export default Footer;
