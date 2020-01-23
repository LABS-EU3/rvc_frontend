import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import PrivateRoute from "./components/authentication/privateRoute/PrivateRoute";
import FormikLoginForm from "./components/authentication/loginForm/LoginForm";
import FormikRegisterForm from "./components/authentication/registerForm/RegisterForm";
import RecipeView from "./components/recipe/RecipeView";
import SeeRecipe from "./components/recipe/SeeRecipe";
import ProfileView from "./components/profile/profileView/ProfileView";
import EditProfile from "./components/profile/editProfile/EditProfile";
import IngredientView from "./components/ingredients/ingredientView/IngredientView";
import InstructionView from "./components/instructions/instructionView/InstructionView";
import CreateRecipe from "./components/createRecipe/createRecipe/CreateRecipe";
import Modal from './components/notification/modal/Modal';

import "./App.css";

function App(props) {
  const { isDisplaying } = props;
  // ^Needed to stop the screen from scrolling when the modal is visible!

  return (
    <div className="App" style={{height: "100%", "overflow-y": isDisplaying ? "hidden" : "visible" }}>
      <Route exact path="/" component={RecipeView} />
      <Route path="/login" component={FormikLoginForm} />
      <Route path="/register" component={FormikRegisterForm} />

      <Route path="/recipes" exact component={RecipeView} />
      <Route path="/recipes/:id" render={props => <SeeRecipe {...props} />} />

      <PrivateRoute path='/profile' component={ProfileView}/>
      <PrivateRoute path='/editprofile' component={EditProfile}/>

      <PrivateRoute path='/createrecipe' component={ CreateRecipe}/>
      <Route path="/ingredient" component={IngredientView} />
      <Route path="/instruction" component={InstructionView} />

      <Modal />
    </div>
  );
}

export default connect(state => state.modal)(App);
