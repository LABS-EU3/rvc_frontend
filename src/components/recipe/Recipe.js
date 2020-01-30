import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../actions/actionCreators";

import "../../App.css";
import {
  StyledRecipe
} from "./Recipe.styles";

import smallForkIcon from "../../images/small-fork-icon.png";
import shareIcon from "../../images/small-share-icon.png";
import optionsIcon from "../../images/small-options-icon.png";
import forkIcon from "../../images/fork-icon.png";

const Recipe = ({ recipe, userLike, likeRecipe, unlikeRecipe, user_id, displayLikeModal }) => {
  // console.log("Recipe.js > recipe: ", recipe);

  const {
    id,
    recipe_title,
    author,
    time_required,
    difficulty,
    budget,
    imageUrl,
    likes
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
  const hideButtons = () => setTimeout(() => setButtonsShowing(false), 0.5);
  const toggleButtons = () => { setButtonsShowing(!buttonsShowing) };

  const [localLikeCount, setLocalLikeCount] = useState(parseInt(likes));

  const toggleRecipeLike = () => {
    if (userLike) { // If the recipe has already been liked:
      unlikeRecipe(user_id, id);
      setLocalLikeCount(localLikeCount - 1);
      displayLikeModal("Recipe removed from cookbook.", "/profile");
    } else { // Otherwise:
      likeRecipe(user_id, id);
      setLocalLikeCount(localLikeCount + 1);
      displayLikeModal("Recipe added to cookbook!", "/profile");
    }
  }
  // Note: The above has the problem that localLikeCount is inc-/decremented whether or
  // not the like/unlike goes through. So could be in situation (if there's a network
  // error, say) where localLikeCount changes, but nothing else.

  // Should fix, but it's not a priority!

  return (
    <StyledRecipe>
      <div className="recipe-img-box">
        <img className="recipe-img" src={imageUrl} alt="an " />
        <div className="overlay" style={buttonsShowing ? {background: "rgba(0, 0, 0, 0.3)"} : {background: "rgba(0, 0, 0, 0)"}}>
          <div className="card-button" id="fork-button"
            onClick={toggleButtons}
            onBlur={hideButtons} tabIndex="1"
            style={
              userLike && buttonsShowing ? 
                {background: "white"} :  
              userLike && !buttonsShowing ?
                {background: "#FF3064"} :
              !userLike && buttonsShowing ?
                {background: "white"} :
              {}
            }
          >
            <img id="fork-icon" src={forkIcon} alt="fork-icon"/>
          </div>
          <p className="likes"
            style={
              userLike && buttonsShowing ?
                {background: "white", color: "#FF3064"} :
              userLike && !buttonsShowing ?
                {background: "#FF3064", color: "white"} :
              !userLike && buttonsShowing ?
                {background: "white", color: "#0ab28a"} :
              {background: "#0ab28a", color: "white"}
            }
          >
            {localLikeCount}
          </p>
          <div className="card-button" id="options-button" style={buttonsShowing? {} : {display: "none"}}>
            <img id="fork-icon" src={optionsIcon} alt="fork-icon"/>
          </div>
          <div className="card-button" id="share-button" style={buttonsShowing? {} : {display: "none"}}>
            <img id="fork-icon" src={shareIcon} alt="fork-icon"/>
          </div>
          <div className="card-button"
            id="small-fork-button"
            onClick={toggleRecipeLike}
            style={
              userLike && buttonsShowing ?
                {background: "#FF3064"} :
              !userLike && buttonsShowing ?
                {} :
              {display: "none"}
            }
          >
            <img id="fork-icon" src={smallForkIcon} alt="fork-icon"/>
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

export default connect(state => state.onboard, actionCreators)(Recipe);
