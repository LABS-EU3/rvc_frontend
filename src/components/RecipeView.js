import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const RecipeView = props => { 
  const [recipes, setRecipes] = useState([])
  useEffect(() => { 
    const getRecipes = () => { 
      axios
      .get('dummyApi')
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
    <div className='recipe-view'>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe}/>
      ))}
    </div>

  )
}

