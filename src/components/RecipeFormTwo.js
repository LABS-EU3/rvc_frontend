import React from "react";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from "./Footer";
import foodplaceholder from "../images/foodplaceholder.png";

export default function RecipeFormTwo(props) {
  const { step, prevPage, nextPage, uploadImage, recipe_file,
  onHandleSubmit,
  } = props;  
  
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
          <img className="back-arrow" src={back} alt="back arrow" />
        </div>
        <button
        type='submit'
          className="submit-recipe-container"
          >
          <img className="submit-recipe" src={check} alt="submit recipe" />
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
        <div className="progress-bar-container">
          <div
            style={{
              backgroundColor: "#0AB28A",
              height: "10px",
              width: "60%",
              borderRadius: "5px"
            }}
          ></div>
        </div>
      </div>
    </form>
    </div>
  );
}
