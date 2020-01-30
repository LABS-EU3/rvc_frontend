import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actionCreators";

import Recipe from "./Recipe";
import SearchBar from "../navigation/searchBar/SearchBar";
import Footer from "../navigation/footerNav/FooterNav";
import Loader from "../loader/Loader";

import "../../App.css";

const RecipeView = ({
    getRecipes,
    recipeView,
    isFetching,
    // Likes:
    userLikes,
    getUserLikes,
    user_id
}) => {
  useEffect(() => {
    getRecipes();
    getUserLikes(user_id);
  }, [getRecipes, getUserLikes, user_id]);

  console.log("userLikes", userLikes);

  return (
    <div>
      <SearchBar />
      {isFetching ? <Loader /> : null}
      <div className="container">
        {recipeView.map(recipe => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            userLike={userLikes.includes(recipe.id)}
            user_id={user_id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default connect(state => {
  return {
    recipeView: state.recipes.recipeView,
    isFetching: state.recipes.isFetching,
    // Likes:
    userLikes: state.userLikes.likes,
    user_id: state.onboard.user_id
  }
}, actionCreators)(RecipeView);
