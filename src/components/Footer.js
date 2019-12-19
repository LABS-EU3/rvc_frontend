import React from "react";
import { NavLink, Route } from "react-router-dom";
import { FooterBar } from "../globals/footer-styles";
import home from '../globals/design-elements/home.png';
import play_button from '../globals/design-elements/play_button.png';
import user from '../globals/design-elements/user.png';


const Footer = () => {
  return (
    <FooterBar>
      <div className='home_icon'>
        <img src={home} alt="home icon" />
      </div>
      <div>
        <img src={play_button} alt="discover icon" />
      </div>
      <div>
        <img src={user} alt="cookbook icon" />
      </div>
    </FooterBar>
  );
};

export default Footer;
