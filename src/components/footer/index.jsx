import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Banyanlabslogo from "./images/Banyanlabslogo.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={Banyanlabslogo} className="logo" alt="Banyan Labs Logo" />
      <div className="links">
        <Link to="#" className="footerLinks" id="homeLink">
          Home
        </Link>
        <Link to="#" className="footerLinks" id="trainingLink">
          Trainings
        </Link>
        <Link to="#" className="footerLinks" id="archive">
          Archive
        </Link>
      </div>
    </div>
  );
}
