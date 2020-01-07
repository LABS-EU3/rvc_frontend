import React from 'react';
import {  Route } from 'react-router-dom';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from './components/RegisterForm';
import Welcome from './components/Welcome';
import RecipeView from './components/RecipeView';
import SeeRecipe from './components/SeeRecipe';

function App() {
  return (
    <div className="App">
      {/* <Route exact path='/' component={Welcome}/> */}
      <Route exact path='/' component={RecipeView}/>
      <Route path='/login' component={ FormikLoginForm}/>
      <Route path='/register' component={ FormikRegisterForm}/>
      <Route path='/recipe' component={RecipeView}/>
      <Route path='/instruction' component={SeeRecipe}/>

    </div>
  );
}


export default App;
