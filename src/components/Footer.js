import React from "react";
import { FooterBar } from "../globals/footer-styles";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const Footer = () => {
  return (
    <FooterBar>
      <HomeOutlinedIcon color="primary" style={{ fontSize: 40, color: 'gray' }} />
      <PlayCircleOutlineOutlinedIcon color="primary" style={{ fontSize: 40, color: 'gray' }} />
      <PersonOutlineOutlinedIcon color="primary" style={{ fontSize: 40, color: 'gray' }} />
    </FooterBar>
  );
};

export default Footer;
