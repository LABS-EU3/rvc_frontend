import React from 'react';
import {  Route } from 'react-router-dom';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from './components/RegisterForm';
import RecipeView from './components/RecipeView';
import Counter from './components/Couter'
import FormikCreateRecipeForm from './components/CreateRecipe';
import IngredientView from './components/IngredientView'
import InstructionView from './components/InstructionView'
import CreateRecipe from './components/CreateRecipe';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={RecipeView}/>
      <Route path='/login' component={ FormikLoginForm}/>
      <Route path='/register' component={ FormikRegisterForm}/>
      <Route path='/recipe' component={RecipeView}/>
      <Route path='/createrecipe' component={ FormikCreateRecipeForm}/>
      <Route path='/ingredient' component={IngredientView}/>
      <Route path='/instruction' component={InstructionView}/>
    </div>
  );
}


export default App;
