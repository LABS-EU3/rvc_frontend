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
          <div className="menu-container">
            <nav role="navigation">
              <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <a href="#">
                    <li>Home</li>
                  </a>
                  <a href="#">
                    <li>About</li>
                  </a>
                  <a href="#">
                    <li>Info</li>
                  </a>
                  <a href="#">
                    <li>Contact</li>
                  </a>
                  <a href="https://erikterwan.com/" target="_blank">
                    <li>Show me more</li>
                  </a>
                </ul>
              </div>
            </nav>
          </div>
        </SearchBox>
      </div>
    </div>
  );
};

export default SearchBar;
