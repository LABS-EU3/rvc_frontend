import React from "react";
import { Banner } from "./profileView.styles";
import Navigation from "../../navigation/hamburgerNav/HamburgerNav";

const ProfileBanner = () => {
  return (
    <div>
      <div>
          <Banner>
            <h1>FORKBOOK</h1>
            <Navigation/>
          </Banner>
      </div>
    </div>
  );
};

export default ProfileBanner;
