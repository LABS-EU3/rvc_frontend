import * as types from "./actionTypes";
import axios from "axios";

export const register = (credentials, history) => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axios
    .post(
      "https://develop-forkbook.herokuapp.com/api/auth/register",
      credentials
    )
    .then(res => {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.id);
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      history.push("/recipes");
    })
    .catch(error => {
      dispatch({ type: types.REGISTER_FAILURE, payload: error.message });
      alert("Username already exists");
    });
};

export const login = (credentials, history) => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axios
    .post("https://develop-forkbook.herokuapp.com/api/auth/login", credentials)
    .then(res => {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.id);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
      history.push("/recipes");
    })
    .catch(error => {
      dispatch({ type: types.LOGIN_FAILURE, payload: error });
    });
};

export const logout = () => {
  localStorage.clear();
  return { type: types.LOGOUT };
};

export const getRecipes = () => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axios
    .get("https://develop-forkbook.herokuapp.com/api/recipe")
    .then(res => {
      dispatch({ type: types.GET_ALL_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: types.GET_ALL_RECIPES_FAILURE, payload: error.message });
    });
};

export const getRecipesById = id => dispatch => {
  dispatch({ type: types.GET_RECIPE });
  axios
    .get(`https://develop-forkbook.herokuapp.com/api/recipe/${id}`)
    .then(res => {
      dispatch({ type: types.GET_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: types.GET_RECIPE_FAILURE, payload: error.message });
    });
};

export const addIngredient = ingredientData => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axios
    .post("https://develop-forkbook.herokuapp.com/api/recipe", ingredientData)
    .then(res => {
      dispatch({
        type: types.ADD_INGREDIENT_SUCCESS,
        payload: res.data.ingredients
      });
    })
    .catch(error => {
      dispatch({ type: types.ADD_INGREDIENT_FAILURE, payload: error.message });
    });
};

export const getIngredients = () => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axios
    .get("https://develop-forkbook.herokuapp.com/api/recipe/")
    .then(res => {
      dispatch({ type: types.GET_INGREDIENT_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({
        type: types.GET_INGREDIENT_FAILURE,
        payload: error.message
      });
    });
};

export const addInstruction = instructionData => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axios
    .post("https://develop-forkbook.herokuapp.com/api/recipe", instructionData)
    .then(res => {
      dispatch({
        type: types.ADD_INSTRUCTION_SUCCESS,
        payload: res.data.instructions
      });
    })
    .catch(error => {
      dispatch({ type: types.ADD_INSTRUCTION_FAILURE, payload: error.message });
    });
};

export const getInstructions = () => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axios
    .get("https://develop-forkbook.herokuapp.com/api/recipe")
    .then(res => {
      dispatch({
        type: types.GET_INSTRUCTION_SUCCESS,
        payload: res.data.instructions
      });
    })
    .catch(error => {
      dispatch({
        type: types.GET_INSTRUCTION_FAILURE,
        payload: error.message
      });
    });
};

export const submitNewRecipe = (newRecipeData, history) => dispatch => {
  dispatch({ type: types.REQUEST_START });
  axios
    .post("https://develop-forkbook.herokuapp.com/api/recipe", newRecipeData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    })
    .then(res => {
      dispatch({ type: types.POST_NEW_RECIPE_SUCCESS, payload: res.data });
      dispatch({ type: types.RESET_NEW_RECIPE });
      history.push(`/recipes/${res.data.id}`);
    })
    .catch(error => {
      dispatch({ type: types.POST_NEW_RECIPE_FAILURE, payload: error.message });
      history.push("/createrecipe");
    });
};

export const addToNewRecipe = newRecipeData => {
  return {
    type: types.ADD_TO_NEW_RECIPE,
    payload: newRecipeData
  };
};
