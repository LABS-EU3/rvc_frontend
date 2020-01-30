import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/actionCreators";

import Recipe from "./Recipe";
import SearchBar from "../navigation/searchBar/SearchBar";
import Footer from "../navigation/footerNav/FooterNav";
import Loader from "../loader/Loader";

import "../../App.css";

const RecipeView = ({ getRecipes, recipeView, isFetching, getUserLikes, userLikes }) => {
  useEffect(() => {
    getRecipes();
    getUserLikes();
  }, [getRecipes, getUserLikes]);

  console.log("userLikes", userLikes);

  return (
    <div>
      <SearchBar />
      {isFetching ? <Loader /> : null}
      <div className="container">
        {recipeView.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default connect(state => ({...state.recipes, ...state.userLikes }), actionCreators)(RecipeView);
