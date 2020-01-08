import React from "react";
import { withFormik, Form, Field } from "formik";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";

export default function RecipeFormOne(props) {
  const { step, nextPage } = props;
  return (
    <div>
      <div className="recipe-nav">
        <div
          onClick={() => console.log("go back")}
          className="back-arrow-container"
        >
          <img className="back-arrow" src={back} alt="back arrow" />
        </div>
        <div
          onClick={() => console.log("submit")}
          className="submit-recipe-container"
        >
          <img className="submit-recipe" src={check} alt="submit recipe" />
        </div>
        <div className="recipe-input">
          <input type="text" name="recipe" placeholder="enter recipe name" />
        </div>
      </div>
      <form>
        <div className="section2">
          <label>Category:</label>
          <select name="category">
            <option value="" label="pick a category" />
            <option value="breakfast" label="breakfast" />
            <option value="lunch" label="lunch" />
            <option value="dinner" label="dinner" />
          </select>
        </div>

        <div className="section3">
          <label>
            Options:
            <input type="radio" name="options" value="Private" />
            Private
          </label>
          <p>The private option hides your recipe from other users</p>
          <p>Add Tags</p>
          <input
            type="text"
            name="tag"
            placeholder="Add as many tags as you want to easily find your recipe"
          />
          <div className="step">Step {step}/3</div>
          <button onClick={nextPage}>Next</button>

            
            <div className="progress-bar-container">
            <div  style={{"backgroundColor":"#0AB28A", "height":"10px", "width":"30%", "borderRadius": "5px"}}></div>
            </div>
        </div>
      </form>
    </div>
  );
}
