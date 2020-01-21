import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Popup from "reactjs-popup";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

import Footer from "../../navigation/footerNav/FooterNav";
import EditProfile from "../editProfile/EditProfile";

import bookmark from "../../../globals/design-elements/bookmark.png";
import more from "../../../globals/design-elements/more.png";
import copy from "../../../globals/design-elements/copy-item.png";

import { StyledProfile } from './profileView.styles';
import profilePlaceholderImage from '../../../images/profile_placeholder_1.png';
// import profilePlaceholderImage from '../../../images/profile_placeholder_2.png';
// Not sure which is nicer!


export function ProfileView(props) {
  const { 
    profile_pic,
    first_name,
    last_name,
    bio
  } = props;

  return (
    <>
      <StyledProfile>
        <div className="profile-container">
  
          <div className="profile-img">
            {
              (profile_pic !== "" &&
              <img src={profile_pic} alt="default profile" />) ||
              <img src={profilePlaceholderImage} alt="default profile"/>
            }
          </div>

          <Popup modal trigger={<h4>@[USERNAME]</h4>}>
            {close => <EditProfile close={close} />}
          </Popup>

          <div className="name">
            <p>{first_name + " " + last_name}</p>
          </div>

          <div className="num-likes-and-forks">
            <div>
              <p className="likes-paragraph">8</p>
              <h4>Recipes</h4>
            </div>
            <div>
              <p className="likes-paragraph">21</p>
              <h4>Forked Recipes</h4>
            </div>
            <div>
              <p className="likes-paragraph">1225</p>
              <h4>Forks</h4>
            </div>
          </div>
        <p className="profile-bio">{bio}</p>
          <div className="profile-icons">
            <img className="profile-icons-image" src={bookmark} alt="" />
            <img className="profile-icons-image" src={copy} alt="" />
            <Link to='/createrecipe'>
            <img className="profile-icons-image" src={more} alt="" />
            </Link>
          </div>
          <div className="divider-wrapper">
            {" "}
            <hr id="divider" />
          </div>
          <div className="profile-food">
            <img
              className="profile-recipe-image"
              src="https://images.unsplash.com/photo-1571809839227-b2ac3d261257?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
            <img
              className="profile-recipe-image"
              src="https://images.unsplash.com/photo-1571809839227-b2ac3d261257?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt=""
            />
          </div>

        </div>
      </StyledProfile>

      <Footer />
    </>
  );
}

export default connect(state => state.profile, actionCreators)(ProfileView);
