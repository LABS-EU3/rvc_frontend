import React from "react";
import { withFormik, Form, Field } from "formik";

export default function RecipeFormOne(props) {
    const { step, nextPage } = props;
  return (
    <div>
      <form>
        <div className="section1">
          <button className="return">
            <img className="back-arrow" src="" alt="back arrow" />
          </button>
          <h1>Step is {step}</h1>
          <button type="submit" className="submit-recipe">
            <img className="submit-recipe" src="" alt="submit recipe" />
          </button>
          <div className="recipe">
            <input type="text" name="recipe" placeholder="enter recipe name" />
          </div>
        </div>

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
            <input
              type="radio"
              name="options"
              value="Private"
            />
            Private
          </label>
          <p>The private option hides your recipe from other users</p>
          <p>Add Tags</p>
          <input
            type="text"
            name="tag"
            placeholder="Add as many tags as you want to easily find your recipe"
          />
          <div className="step">
            Step {step}/3
          </div>
          <button onClick={nextPage}>Next</button>
        </div>        
      </form>
    </div>
  );
}
