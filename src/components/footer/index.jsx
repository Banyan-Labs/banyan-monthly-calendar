import React,{ useState, useEffect} from "react";
import { Container, Logo, FooterLinksContainer, FooterLink, Button, Wrapper } from "./style";
import Banyanlabslogo from "../../resource/images/Banyanlabslogo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  const { loginWithRedirect, logout, isAuthenticated, isLoading, user } =
    useAuth0();

  useEffect(() => {
    if (!isLoading && user && isAuthenticated) {
      history.push("/adminForm");
    }
  }, [isLoading]);

  return (
    <Container>
      <Wrapper>
      <Logo src={Banyanlabslogo} alt="Banyan Labs Logo"></Logo>
      </Wrapper>
      <FooterLinksContainer>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/trainings-page">Trainings</FooterLink>
        <FooterLink to="/archives-page">Archive</FooterLink>
        {/* <SignIn /> */}
        <Button onClick={()=>loginWithRedirect()}
         >SignIn</Button> 
         <Button onClick={()=>logout()}
         >Logout</Button> 
      </FooterLinksContainer>
    </Container>
  );
};

export default Footer;
