import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"

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
      <button type="submit">Next</button>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step2);

