import React from "react";
import { Link } from "react-router-dom";
import { FooterBar } from "../../../globals/footer-styles";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

const Footer = () => {
  return (
    <FooterBar>
      <Link to="/">
        <HomeOutlinedIcon cgit style={{ fontSize: 40, color: "gray" }} />
      </Link>
      <Link to="/">
        <PlayCircleOutlineOutlinedIcon
          color="primary"
          style={{ fontSize: 40, color: "gray" }}
        />
      </Link>
      <Link to="/profile">
        <PersonOutlineOutlinedIcon
          color="primary"
          style={{ fontSize: 40, color: "gray" }}
        />
      </Link>
    </FooterBar>
  );
};

export default Footer;
