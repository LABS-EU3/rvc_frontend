import React from 'react';
import {  Route } from 'react-router-dom';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from './components/RegisterForm';
import RecipeView from './components/RecipeView';
import Counter from './components/Couter'
import CreateRecipe2 from './components/CreateRecipe2'
import FormikCreateRecipeForm from './components/CreateRecipe';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={RecipeView}/>
      <Route path='/login' component={ FormikLoginForm}/>
      <Route path='/register' component={ FormikRegisterForm}/>
      <Route path='/recipe' component={RecipeView}/>
      <Route path='/createrecipe' component={ CreateRecipe2}/>
    </div>
  );
}


export default App;
