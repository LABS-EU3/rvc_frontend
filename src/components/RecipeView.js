import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import SearchBar from './SearchBar';
import { Home } from '../globals/card-styles';
import Footer from './Footer';
import '../App.css';

const recipesApi = 'http://localhost:3333/recipes';

const RecipeView = props => { 
  const [recipes, setRecipes] = useState([])

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
    <div>
      <SearchBar/>
      {/* <Home> */}
      <div className='container'>
        {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe}/>
        ))}
      </div>
      {/* </Home> */}
      <Footer/>
    </div>
  )
}

export default RecipeView;