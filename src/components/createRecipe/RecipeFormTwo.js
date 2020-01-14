import React from "react";
import Footer from "../navigation/FooterNav";
import foodplaceholder from "../../images/foodplaceholder.png";
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
} from "../../globals/form-styles";

export default function RecipeFormTwo(props) {
  const { step, prevPage, uploadImage, recipe_file,
  onHandleSubmit, loading, title
  } = props;  
  console.log("props is", props, title)
  const progressBarWidth = (step-1) * 100/4;
  
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
        {/* PREVIOUS CODE BLOCK */}
        {/* <button
        type='submit'
          className="submit-recipe-container"
          >
          <CheckIcon cgit style={{ fontSize: 40, color: 'white' }} />
        </button>
      </div>
        <h2>{ title }. Step is {step}</h2>
      </div>
      <div className="section1C"> */}
      {/* PREVIOUS CODE BLOCK  END*/}

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
        {/* </button> */}
        { loading ? <h4>...upLoading file</h4> : ""}
        {/* <div className="progress-bar-container"> */}
        </div>
          </ExportImg>
           <Step >
            Step {step}/4
          {/* <ProgressBarDiv>
          <div
            style={{
              backgroundColor: "#0AB28A",
              height: "10px",
              width: progressBarWidth+"%",
              borderRadius: "5px"
            }}
          ></div>
          </ProgressBarDiv> */}
          </Step >
      </div>
        </Section2b> 
    </form>
    <Footer/>
    </div>
  );
}
