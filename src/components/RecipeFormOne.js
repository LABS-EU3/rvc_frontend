import React, { useState, useEffect } from "react";
import { addToNewRecipe } from "../actions";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";

export default function RecipeFormOne(props) {
  const { history, step, nextPage, onHandleChange, onHandleSubmit, addToNewRecipe } = props;

  return (
    <div>
      <div className="recipe-nav">
        <div
          className="back-arrow-container"
          onClick={() => history.push("/profile")}
        >
          <img className="back-arrow" src={back} alt="back arrow" />
        </div>
        <div
          // onClick={() => {
          //   addToNewRecipe();
          //   nextPage();
          // }}
          // onClick={ addToNewRecipe}
          onSubmit={onHandleSubmit}
          onClick={nextPage}
          className="submit-recipe-container"
        >
          <img className="submit-recipe" src={check} alt="submit recipe" />
        </div>
      </div>

      <form>
        <div className="recipe-input">
          <input
            onChange={onHandleChange}
            type="text"
            name="title"
            placeholder="enter recipe name"
          />
        </div>
        <div className="section2">
          <label>Category:</label>
          <select
          onChange={onHandleChange} name="recipe_category"
          >
            <option value="" label="pick a category" />
            <option value="breakfast" label="breakfast" />
            <option value="lunch" label="lunch" />
            <option value="dinner" label="dinner" />
          </select>
        </div>
        <div className="section3">
          {/* <label>
            Options:
            <input type="radio" name="options" value="Private" />
            Private
          </label> */}
          {/* <p>The private option hides your recipe from other users</p> */}
          <p>Add Tags</p>
          <input
            onChange={onHandleChange}
            type="text"
            name="tag"
            placeholder="Add as many tags as you want to easily find your recipe"
          />
          <div className="step">Step {step}/3</div>
          <button onClick={nextPage}>Next</button>
          <div className="progress-bar-container">
            <div
              style={{
                backgroundColor: "#0AB28A",
                height: "10px",
                width: "30%",
                borderRadius: "5px"
              }}
            ></div>
          </div>
        </div>
      </form>
    </div>
  );
}
