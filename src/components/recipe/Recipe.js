import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

const Recipe = ({ recipe }) => {
  const {
    id,
    recipe_title,
    author,
    time_required,
    difficulty,
    budget,
    imageUrl
  } = recipe;

  const difficultyColors = ['green', 'orange', 'red'];
  const difficultyColor = difficultyColors[difficulty - 1]; // Note: _difficulty_ is either 1, 2, or 3.
  
  const lastLetter = author.substr(-1) === "s" ? "'" : "'s";

  return (
    <div className="box">
      <Link to={`/recipes/${id}`}>
        <img className="recipe" src={imageUrl} alt="an " />
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
    </div>
  );
};

export default Recipe;
