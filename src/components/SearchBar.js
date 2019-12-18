import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from "axios";
import { SearchBox, SearchBarr } from "../globals/navbar-styles";

const SearchBar = ({ recipe }) => {
  // const { recipe_title } = recipe;

  // const [ searchRecipe, setSearchRecipe ]  = useState('');
  // const [ recipeSearchResult, setRecipeSearchResult ] = useState([]);
  // // const [recipeData, setRecipeData] = useState([]);

  // const handleChange = event => {
  //   setSearchRecipe(event.target.value);
  // };

  // useEffect(() => {

  //   const result = recipe_title.filter(data => data.toLowerCase().includes(searchRecipe));

  //   setRecipeSearchResult(result);
  // }, [] )
  // const result = recipeData['recipe_title'].filter(data => data.toLowerCase().includes(searchRecipe));
  // setRecipeSearchResult(result)

  return (
    <div>
      <div>
        <SearchBox>
          <input
            type="text"
            placeholder="search recipes..."
            // value={searchRecipe}
            // onChange={handleChange}
          />
          <div>
            <input type="checkbox" id="menyAvPaa" />
            <label id="burger" for="menyAvPaa">
              <div></div>
              <div></div>
              <div></div>
            </label>
            <div id="menuToggle">
              <ul id="menu">
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>Login</li>
                </a>
                <a href="#">
                  <li>Register</li>
                </a>
                <a href="#">
                  <li>Logout</li>
                </a>
              </ul>
            </div>
          </div>
        </SearchBox>
      </div>
    </div>
  );
};

export default SearchBar;
