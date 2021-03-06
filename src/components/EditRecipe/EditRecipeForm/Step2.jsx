import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import { useParams, Link } from "react-router-dom";
import {
  NavigationSection1,
  Addtitle,
  Section3,
  ExportImg
} from "../EditRecipe.styles";

import foodplaceholder from "../../../images/foodplaceholder.png";
import axios from "axios";

function Step2(props) {
  const [imgUrl, setImgUrl] = useState(false);
  const { goForward, editImage, displayNotificationModal } = props;

  const recipeID = useParams().id.trim()
  const modalActivator = useParams().block

  const onEditSubmit = e => {
    e.preventDefault();
    editImage(recipeID,imgUrl)
    modalActivator === 'all'
    ? 
    goForward(e)
    :
    displayNotificationModal('The edited recipe has been added to your cookbook!', '/seerecipe/:id');

  };

  const uploadImage = async e => {
    e.preventDefault();
    try {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "recipe_image");
      const imageUrl = await axios.post("https://api.cloudinary.com/v1_1/dr34bum3p/image/upload", data)
      // Then
      setImgUrl([imageUrl.data.secure_url])
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={onEditSubmit}>
      <Section3>
      <NavigationSection1>
        <Link to={`/editrecipe/${recipeID}`}>
          <Fab 
            style={{background: "none", "box-shadow": "none", "outline": 'none'}}
            >
              <ArrowBackIcon cgit="true" style={{ fontSize: 40, color: 'white' }} />
          </Fab>
        </Link>
          <button type='submit' style={{"border":"none", "background": "inherit", "outline":"none"}}>
            <Fab 
          style={{background: "none", "box-shadow": "none", "outline": 'none'}}
          >
            <CheckIcon cgit="true" style={{ fontSize: 40, color: 'white', background:'transparent' }} />
          </Fab>
        </button>
        </NavigationSection1>

        <Addtitle>
       <h1>
        Change Image
        </h1>
        </Addtitle>
      </Section3>
      <ExportImg>
        <div>
          <div >
          {imgUrl 
            ? <img style={{"max-height": "394px", "width": "100%"}}  src={imgUrl} alt="A display of recipe placeholder"/>
            : <img src={foodplaceholder} alt="A display of the already finished recipe" />
          }
          </div>
          <div>
          <input
            type="file"
            onChange={uploadImage}
            name="imageUrl"
            placeholder="imageUrl"
          />
        </div>
        </div>
    </ExportImg>
   </form>
      
  );
}

export default connect(state => state, dispatchers)(Step2);