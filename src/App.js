import React from 'react';
import {  Route } from 'react-router-dom';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from './components/RegisterForm';
import Welcome from './components/Welcome';
import RecipeView from './components/RecipeView';
import Counter from './components/Couter'
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Route exact path='/' component={Welcome}/> */}
      <Route exact path='/' component={RecipeView}/>
      <Route path='/login' component={ FormikLoginForm}/>
      <Route path='/register' component={ FormikRegisterForm}/>
      <Route path='/recipe' component={RecipeView}/>
      <Route path='/counter' component={Counter} />
      <Route path='/' component={RecipeView}/>
      <Route exact path='/' component={Footer}/>
    </div>
  );
}


export default App;
