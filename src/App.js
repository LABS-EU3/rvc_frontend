import React from 'react';
import {  Route } from 'react-router-dom';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from './components/RegisterForm';
import Welcome from './components/Welcome';
import RecipeView from './components/RecipeView';
import SeeRecipe from './components/SeeRecipe';
import Counter from './components/Couter'
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import ProfileView from './components/ProfileView';
import EditProfile from './components/EditProfile';
import IngredientView from './components/IngredientView'
import InstructionView from './components/InstructionView'
import CreateRecipe from './components/CreateRecipe';
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={RecipeView}/>
      <Route path='/login' component={ FormikLoginForm}/>
      <Route path='/register' component={ FormikRegisterForm}/>
      <Route path='/recipe' component={RecipeView}/>
      <Route path='/seerecipe' component={SeeRecipe}/>
      <Route path='/profile' component={ProfileView}/>
      <Route path='/editprofile' component={EditProfile}/>
      <Route path='/createrecipe' component={ CreateRecipe}/>
      <Route path='/ingredient' component={IngredientView}/>
      <Route path='/instruction' component={InstructionView}/>
    </div>
  );
}


export default App;
