import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import {
  StyledRecipe
} from "./Recipe.styles";

import forkIcon from '../../images/fork-icon.png';

const Recipe = ({ recipe }) => {
  console.log("Recipe.js > recipe: ", recipe);

  const {
    id,
    recipe_title,
    author,
    time_required,
    difficulty,
    budget,
    imageUrl
  } = recipe;

  // let color = "";
  // if (difficulty === 1) color = "green";
  // else if (difficulty === 2) color = "orange";
  // else color = "red";
  
  // Refactored the above for functionality (i.e. no mutability!), variable name expressivenesss, and concision:
  const difficultyColors = ['green', 'orange', 'red'];
  const difficultyColor = difficultyColors[difficulty - 1]; // Note: _difficulty_ is either 1, 2, or 3.
  
  const lastLetter = author.substr(-1) === "s" ? "'" : "'s";

  const [buttonsShowing, setButtonsShowing] = useState(false);
  const showButtons = () => { setButtonsShowing(true) };
  const hideButtons = () => { setButtonsShowing(false) };
  const flipButtons = () => { setButtonsShowing(!buttonsShowing) };

  return (
    <StyledRecipe>
      <div className="recipe-img-box">
        <img className="recipe-img" src={imageUrl} alt="an " />
        <div className="overlay" style={buttonsShowing ? {background: "rgba(0, 0, 0, 0.3)"} : {background: "rgba(0, 0, 0, 0)"}}>
          <div className="card-button" id="fork-button" onClick={flipButtons}>
            <img id="fork-icon" src={forkIcon} alt="fork-icon"/>
          </div>
        </div>
      </div>
      <Link to={`/recipes/${id}`}>
        <div className="recipe-card">
          <p>{author + lastLetter}</p>
          <h2>{recipe_title}</h2>
          <div className="recipe-card-tag">
            <div>
              <p>{time_required} mins</p>
            </div>
            <div>
              <p>${budget}</p>
            </div>
            <div>
              <p style={{ backgroundColor: difficultyColor }} className="level-recipe">
                {difficulty}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </StyledRecipe>
  );
};

export default Recipe;
