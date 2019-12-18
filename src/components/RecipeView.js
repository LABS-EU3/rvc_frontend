import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import waterfall from '../waterfall';
import Recipe from './Recipe';

const recipesApi = 'http://localhost:3333/recipes';

const RecipeView = props => { 
  const [recipes, setRecipes] = useState([])

  const  [addRecipes, setAddRecipes] = useState({})
  useEffect(() => { 
    const getRecipes = () => { 
      axios
      .get(recipesApi)
      .then(res => { 
        setRecipes(res.data);
      })
      .catch(error => { 
        console.error(error.message)
      })
    }
    getRecipes()
  }, []);

  return(
    <div className='recipe-view columns'>
      {/* <div>Search bar component</div> */}
      <div className='waterfall'>
        {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe}/>
        ))}
      </div>
    </div>

  )
}

export default RecipeView;