import React, { useState, useEffect } from "react";
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
import forkIconWhite from "../../images/fork-icon-white.png";
import vector from "../../images/Vector.png";
import clock from "../../images/clock.png";
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
  const moonlitAsteroid =  "#0f2027";
  const redLights = "#b92b27";
  const greenHouse = "#59C173";

  const difficultyColors = [greenHouse, 'orange', redLights, moonlitAsteroid];
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

  useEffect(() => {
    setLocalLikeCount(parseInt(likes));
  }, [likes])

  return (
    <StyledRecipe className="recipe-div">
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
            <div id="fork-icon-container" style={{
                 "z-index": "-1"
            }}>
              <img id="fork-icon" 
              src={forkIconWhite}
               alt="fork-icon"/>
            </div>
          </div>
          <div id="shadow"></div>
          <p className="likes"

            style={
              userLike && buttonsShowing ?
                {
                  background: "white",
                   color: "#FF3064"
                  } :
              userLike && !buttonsShowing ?
                {
                  background: "#FF3064",
                  color: "white"
                } :
              !userLike && buttonsShowing ?
                {
                  // background: "white",
                   color: "#0ab28a"
                  } :
              {
                // background: "#0ab28a",
                 color: "white",
                 "z-index": "1"

                }
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
            <div style={
              {
               width: "15%",
               height: "auto",
            }
            }>
              <img 
              style={{
                maxWidth:"100%",
                maxHeight:"100%"
                }} 
              src={clock} alt='clock'/>
              </div>
              <div>
              <p style={{fontWeight: 'bold'}}>{time_required} </p>
            </div>
            <div>
              <p style={{fontWeight: 'bold'}}>${budget}</p>
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
