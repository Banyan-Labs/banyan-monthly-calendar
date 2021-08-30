// import React from "react";
// // import "./style.js";
// import { Footer, Links, FooterLinks, Logo } from "./style";
// import { Link } from "react-router-dom";
// import Banyanlabslogo from "../../resource/images/Banyanlabslogo.png";

// export default function Footer() {
//   return (
//     <div className="footer">
//       <img src={Banyanlabslogo} className="logo" alt="Banyan Labs Logo" />
//       <div className="links">
//         <Link to="#" className="footerLinks" id="homeLink">
//           Home
//         </Link>
//         <Link to="#" className="footerLinks" id="trainingLink">
//           Trainings
//         </Link>
//         <Link to="#" className="footerLinks" id="archive">
//           Archive
//         </Link>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Container, Logo, FooterLinksContainer,FooterLink } from "./style";
import Banyanlabslogo from "../../resource/images/Banyanlabslogo.png";

const Footer = () => {
  return (
    <Container>
      <Logo src={Banyanlabslogo} alt="Banyan Labs Logo">
      </Logo>
      <FooterLinksContainer>
        <FooterLink to="#">Home</FooterLink>
        <FooterLink to="#">Trainings</FooterLink>
        <FooterLink to="#">Archive</FooterLink>
      </FooterLinksContainer>
    </Container>
  );
};

export default Footer;
