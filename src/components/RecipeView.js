import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/index'
import Recipe from './Recipe';
import SearchBar from './SearchBar';
import Footer from './Footer';
import '../App.css';


const RecipeView = ({ getRecipes, recipeView })=> {
  useEffect(() => { 
    getRecipes();
  }, [getRecipes]);

  return(
    <div>
      <SearchBar/>
      <div className='container'>
        {recipeView.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe}/>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default connect (state => 
  state.recipes, actionCreators)(RecipeView)