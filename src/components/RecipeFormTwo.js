import React from "react";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from "./Footer";
import foodplaceholder from "../images/foodplaceholder.png";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";

export default function RecipeFormTwo(props) {
  const { step, prevPage, uploadImage, recipe_file,
  onHandleSubmit, loading
  } = props;  
  const progressBarWidth = (step-1) * 100/4;
  
  return (
    <div>  
    <form 
    onSubmit={onHandleSubmit}
    >
      <div className="section1B">
      
      

      <div className="recipe-nav">
        <div
          className="back-arrow-container"
          onClick={prevPage}
          >
          <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
        </div>
        <button
        type='submit'
          className="submit-recipe-container"
          >
          <CheckIcon cgit style={{ fontSize: 40, color: 'white' }} />
        </button>
      </div>
        <h2>Recipe Name. Step is {step}</h2>
      </div>
      <div className="section1C">
        <input
          onChange={uploadImage}
          type="file"
          name="recipe_file"
          placeholder="upload an image"
        />
        <button>
          <img src={recipe_file || foodplaceholder} alt="A display of the already finished recipe" />
        </button>
        { loading ? <h4>...upLoading file</h4> : ""}
        <div className="progress-bar-container">
          <div
            style={{
              backgroundColor: "#0AB28A",
              height: "10px",
              width: progressBarWidth+"%",
              borderRadius: "5px"
            }}
          ></div>
        </div>
      </div>
    </form>
    </div>
  );
}
