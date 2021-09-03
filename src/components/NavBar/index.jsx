import React from 'react';
import Banyanlabslogo from "../../resource/images/Banyanlabslogo.png";

import { Container,  NavLinks, NavLinksContainer, Logo } from "./style";



const NavBar = () => {
    return (
        <Container>
            <Logo src={Banyanlabslogo} alt="Banyan Labs Logo">
            </Logo>
            <NavLinksContainer>
                <NavLinks to="#">Home</NavLinks>
                <NavLinks to="#">Trainings</NavLinks>
                <NavLinks to="#">Archive</NavLinks>
            </NavLinksContainer>
        </Container>
    );
};

export default NavBar;