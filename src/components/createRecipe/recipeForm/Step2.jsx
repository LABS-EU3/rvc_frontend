import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";
import imageUpload from "../../../utils/imageUpload";
import foodplaceholder from "../../../images/foodplaceholder.png";
import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Fab from "@material-ui/core/Fab";
import {
  NavigationSection1,
  Addtitle,
  Section3,
  ExportImg
} from "./FormStyled.styles";


function Step2(props) {
  const [imgUrl, setImgUrl] = useState(false);
  const [loading, setLoading] = useState(false);
  const { goForward, goBackward, addImagesToBody } = props;

  const onSubmit = e => {
    e.preventDefault();
    addImagesToBody(imgUrl);
    goForward(e);
  };

  const uploadImageToCloud = e => {
    imageUpload(e, setLoading, setImgUrl);
  };
  const goBack = e => {
    goBackward();
  };

  return (
    <form onSubmit={onSubmit}>
      <Section3>
        <NavigationSection1>
          <Fab
            style={{
              background: "none",
              "box-shadow": "none",
              outline: "none"
            }}
          >
            <ArrowBackIcon className="back-arrow" onClick={goBack} cgit />
          </Fab>
          <Fab
            style={{
              background: "none",
              "box-shadow": "none",
              outline: "none"
            }}
          >
            <CheckIcon className="check-icon" onClick={goForward} cgit />
          </Fab>
        </NavigationSection1>
        <Addtitle>
          <h1>Upload Image</h1>
        </Addtitle>
      </Section3>

      <ExportImg>
        <div>
          {imgUrl ? (
            <img alt="Img file to be uploaded" src={imgUrl} />
          ) : (
            <img
              src={foodplaceholder}
              alt="A display of the already finished recipe"
            />
          )}
        </div>
        <div>
          <input type="file" onChange={uploadImageToCloud} name="imageUrl" />
        </div>
        {loading && <h4>File upload in progress...</h4>}
      </ExportImg>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step2);
