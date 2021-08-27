import React from 'react';
import '../App.css';
import BanyanLogo1 from '../images/BanyanLogo1.png'



function NavBar() {
    return (
        <div className="NavBar">
            <div className="leftSide">
                <img src={BanyanLogo1} className="BanyanLogo" alt="BanyanLogo" />
            </div>
            <div className="rightSide">
                <a href="/home" id="NavLinks">Home</a>
                <a href="/trainings" id="NavLinks">Trainings</a>
                <a href="/archive" id="NavLinks">Archive</a>
            </div>
        </div>
    )
}

export default NavBar;
