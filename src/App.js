import React from 'react';
import {  Route, NavLink } from 'react-router-dom';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from './components/RegisterForm';
import Welcome from './components/Welcome';
import RecipeView from './components/RecipeView';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Route path='/' component={SearchBar}/>
      <Route exact path='/' component={Welcome}/>
      <Route path='/login' component={ FormikLoginForm}/>
      <Route path='/register' component={ FormikRegisterForm}/>
      <Route path='/' component={RecipeView}/>
      <Route exact path='/' component={Footer}/>
    </div>
  );
}


export default App;
