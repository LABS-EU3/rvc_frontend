import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/authentication/PrivateRoute";
import FormikLoginForm from "./components/authentication/LoginForm";
import FormikRegisterForm from "./components/authentication/RegisterForm";
import RecipeView from "./components/recipe/RecipeView";
import SeeRecipe from "./components/recipe/SeeRecipe";
import ProfileView from "./components/profile/ProfileView";
import EditProfile from "./components/profile/EditProfile";
import IngredientView from "./components/ingredients/IngredientView";
import InstructionView from "./components/instructions/InstructionView";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={RecipeView} />
      <Route path="/login" component={FormikLoginForm} />
      <Route path="/register" component={FormikRegisterForm} />
      <Route path="/recipes" exact component={RecipeView} />
      <Route path="/recipes/:id" render={props => <SeeRecipe {...props} />} />
      {/* <PrivateRoute path='/profile' component={ProfileView}/> */}
      {/* <PrivateRoute path='/editprofile' component={EditProfile}/> */}
      <PrivateRoute path='/createrecipe' component={ CreateRecipe}/>
      <Route path="/profile" component={ProfileView} />
      <Route path="/editprofile" component={EditProfile} />
      {/* <Route path="/createrecipe" component={CreateRecipe} /> */}
      <Route path="/ingredient" component={IngredientView} />
      <Route path="/instruction" component={InstructionView} />
    </div>
  );
}

export default App;
