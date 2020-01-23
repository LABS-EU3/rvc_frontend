import React, { useState } from "react";
import { StyledDiv } from './editProfile.styles'

export default function EditProfile({ close }) {
  const [profileFormData, setProfileFormData] = useState({
    fullname: "",
    username: "",
    bio: "",
    location: "",
    expertise: ""
  });

  const onInputChange = e => {
    setProfileFormData({
      ...profileFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    //TODO: make post request to required endpoint
  };

  return (
    <StyledDiv>
      <p className="close" onClick={close}>
        &times;
      </p>
      <h1>Profile</h1>
      <div className="profile-photo">
        <img
          className="profile-pic"
          alt="profile display phot"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwzk9us0OpvTp8XxAgvYAs3peCYVamG6PsGX_edQKrTPn1QBZz"
        />
      </div>
      <form className="edit-profile-form">
        <input
          type="text"
          placeholder="Name"
          id="nameInput"
          name="fullname"
          onChange={onInputChange}
        />
        <input
          type="text"
          name="username"
          id="usernameInput"
          placeholder="Username"
          onChange={onInputChange}
          required
        />
        <input
          type="text"
          name="bio"
          id="bioInput"
          placeholder="Bio"
          onChange={onInputChange}
        />
        <input
          type="text"
          name="location"
          id="locationInput"
          placeholder="Location"
          onChange={onInputChange}
        />
        <select name="expertise" onChange={onInputChange}>
          <option value="">Expertise</option>
          <option value="">Beginner</option>
          <option value="">Intermediate</option>
          <option value="">Expert</option>
          {/* {
expertise.map(exp_val => <option>{exp_val.value}</option>)
                  } */}
        </select>
        <button onClick={handleFormSubmit}>Go</button>
      </form>
    </StyledDiv>
  );
}
