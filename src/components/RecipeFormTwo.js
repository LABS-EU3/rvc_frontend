import React from "react";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from "./Footer";
import foodplaceholder from "../images/foodplaceholder.png";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import {
  ProgressBarDiv,
  Section1,
  NavigationSection1,
  Addtitle,
  Title,
  Section2b,
  Step,
  ExportImg
} from "../globals/form-styles";

export default function RecipeFormTwo(props) {
  const { step, prevPage, uploadImage, recipe_file,
  onHandleSubmit, loading, title
  } = props;  
  
  return (
    <div>  
    <form 
    onSubmit={onHandleSubmit}
    >
    <Section1>
      <NavigationSection1>
        <div
          onClick={prevPage}
          >
          <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
        </div>
      </NavigationSection1>
      <Addtitle>
        <h1>{title}</h1>
        </Addtitle>
      </Section1>
      <Section2b>
      <Title>Add a  photo of your {title}</Title>
      <div>
        <input
          onChange={uploadImage}
          type="file"
          name="recipe_file"
          placeholder="upload an image"
          />
          <ExportImg>
        <div>
          <img src={recipe_file || foodplaceholder} alt="A display of the already finished recipe" />
        </div>
          </ExportImg>
           <Step >
            Step {step}/3
          <ProgressBarDiv>
          <div
            style={{
              backgroundColor: "#0AB28A",
              height: "10px",
              width: "60%",
              borderRadius: "5px"
            }}
          ></div>
          </ProgressBarDiv>
          </Step >
      </div>
        </Section2b> 
    </form>
    <Footer/>
    </div>
  );
}
