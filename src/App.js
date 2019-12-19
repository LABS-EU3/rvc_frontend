import React from 'react';
import {  Route, NavLink } from 'react-router-dom';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from './components/RegisterForm';
import Welcome from './components/Welcome';
import RecipeView from './components/RecipeView';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Welcome}/>
      <Route path='/login' component={ FormikLoginForm}/>
      <Route path='/register' component={ FormikRegisterForm}/>
      <Route path='/recipe' component={RecipeView}/>
    </div>
  );
}


export default App;
