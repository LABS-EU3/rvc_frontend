import React from 'react';
import {  Route } from 'react-router-dom';
import './App.css';
import FormikLoginForm from './components/LoginForm';
import FormikRegisterForm from './components/RegisterForm';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeView from './components/RecipeView';
import SeeRecipe from './components/SeeRecipe';
import Counter from './components/Couter'
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import ProfileView from './components/ProfileView';
import EditProfile from './components/EditProfile';


function App() {
  return (
    <div className="App">
      {/* <Route exact path='/' component={Welcome}/> */}
      <Route exact path='/' component={RecipeView}/>
      <Route path='/login' component={ FormikLoginForm}/>
      <Route path='/register' component={ FormikRegisterForm}/>
      <Route path='/recipe' component={RecipeView}/>
      <Route path='/instruction' component={SeeRecipe}/>

      <Route path='/profile' component={ProfileView}/>
      <Route path='/editprofile' component={EditProfile}/>
    </div>
  );
}


export default App;
