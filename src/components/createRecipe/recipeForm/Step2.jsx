import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DropDown from "../../dropDown/DropDown";
import { Link } from "react-router-dom";
import { TextField, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Section1,
  NavigationSection1,
  Addtitle,
  Section2,
  Section3,
  Title,
  SwitchDiv
} from "./FormStyled.styles";

import axios from "axios";

function Step2(props) {
  const [imgUrl, setImgUrl] = useState(false);
  const { goForward, addImagesToBody } = props;

  const onSubmit = e => {
    e.preventDefault();
    addImagesToBody(imgUrl)
    goForward(e);
  };

  const uploadImage = async e => {
    e.preventDefault();
    try {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "recipe_image");
      const imageUrl = await axios .post("https://api.cloudinary.com/v1_1/dr34bum3p/image/upload", data)
      // Then
      setImgUrl([imageUrl.data.secure_url])
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Section3>
      <NavigationSection1>
            <Link to='/profile'>
              <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
            </Link>
          <button type='submit' style={{"border":"none", "background": "inherit", "outline":"none"}}>
          <CheckIcon cgit style={{ fontSize: 40, color: 'white', background:'transparent' }} />
        </button>
        </NavigationSection1>
        <Addtitle>
        {/* <h1>{title}</h1> */}
        </Addtitle>
      </Section3>
      
      <span>Upload Image </span>
      <input
        type="file"
        onChange={uploadImage}
        name="imageUrl"
        placeholder="imageUrl"
      />
      {imgUrl
        ? <img alt="image to uploaded" src={imgUrl} />
        : <h2>image here</h2>
      }
    </form>
  );
}

export default connect(state => state, dispatchers)(Step2);

