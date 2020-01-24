import * as types from "./actionTypes";
import { Axios, axiosWithAuth } from "../utils/axios";

export const register = (credentials, history) => dispatch => {
  dispatch({ type: types.REQUEST_START });
  Axios()
    .post("api/auth/register", credentials)
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
  Axios()
    .post("api/auth/login", credentials)
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
  Axios()
    .get("api/recipe")

    .then(res => {
      dispatch({ type: types.GET_ALL_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: types.GET_ALL_RECIPES_FAILURE, payload: error.message });
    });
};

export const getRecipesById = id => dispatch => {
  dispatch({ type: types.GET_RECIPE });
  Axios()
    .get(`api/recipe/${id}`)

    .then(res => {
      dispatch({ type: types.GET_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: types.GET_RECIPE_FAILURE, payload: error.message });
    });
};
// Might not be needed
export const addIngredient = ingredientData => dispatch => {
  dispatch({ type: types.REQUEST_START });
  Axios()
    .post("api/recipe", ingredientData)

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
  Axios()
    .get("api/recipe/")

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
// Might not be needed
export const addInstruction = instructionData => dispatch => {
  dispatch({ type: types.REQUEST_START });
  Axios()
    .post("api/recipe", instructionData)

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
// Might not be needed
export const getInstructions = () => dispatch => {
  dispatch({ type: types.REQUEST_START });
  Axios()
    .get("api/recipe")

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
  axiosWithAuth()
    .post("api/recipe", newRecipeData)
    .then(res => {
      dispatch({ type: types.POST_NEW_RECIPE_SUCCESS, payload: res.data });
      dispatch({ type: types.RESET_NEW_RECIPE });
      history.push(`/recipes/${res.data.id}`);
    })
    .catch(error => {
      dispatch({ type: types.POST_NEW_RECIPE_FAILURE, payload: error.message });
      // This doesn't work because the url is not what dictates what view were in but the page counter
      history.push("/createrecipe");
    });
};

export const addToNewRecipe = newRecipeData => {
  return {
    type: types.ADD_TO_NEW_RECIPE,
    payload: newRecipeData
  };
};

/// THIS IS THE NEW STUFF DO NOT DELETE BELOW

export const addRecipeToBody = recipe => dispatch => {
  dispatch({
    type: types.ADD_RECIPE_TO_BODY,
    payload: recipe
  });
};

export const addRecipeCategoriesToBody = recipe_categories => dispatch => {
  dispatch({
    type: types.ADD_RECIPE_CATEGORIES_TO_BODY,
    payload: recipe_categories
  });
};
export const addTagsToBody = tags => dispatch => {
  dispatch({
    type: types.ADD_TAGS_TO_BODY,
    payload: tags
  });
};

export const addRecipeTagsToBody = recipe_tags => dispatch => {
  dispatch({
    type: types.ADD_RECIPE_TAGS_TO_BODY,
    payload: recipe_tags
  });
};

export const addImagesToBody = images => dispatch => {
  dispatch({
    type: types.ADD_IMAGES_TO_BODY,
    payload: images
  });
};

export const addRecipeIngredientsToBody = recipe_ingredients => dispatch => {
  dispatch({
    type: types.ADD_RECIPE_INGREDIENTS_TO_BODY,
    payload: recipe_ingredients
  });
};

export const addInstructionsToBody = instructions => dispatch => {
  dispatch({
    type: types.ADD_INSTRUCTIONS_TO_BODY,
    payload: instructions
  });
};

export const postRecipe = payload => dispatch => {
  axiosWithAuth()
    .post("api/recipe", payload)
    .then(res => {
      dispatch({ type: types.POST_RECIPE_OK, payload: res.data });
    })
    .catch(error => {
      console.dir(error);
      dispatch({ type: types.POST_RECIPE_FAIL, payload: error });
    });
};



//edit actions

export const editRecipeObj = recipe => dispatch => {
  dispatch({ 
    type: types.EDIT_RECIPE,
    payload: recipe
  })
}

export const editRecipeCategories = recipe_categories => dispatch => { 
  dispatch({ 
    types: types.EDIT_RECIPE_CATEGORIES,
    payload: recipe_categories
  })
}

export const editImages = images => dispatch => {
  dispatch({ 
    types: types.EDIT_IMAGES,
    payload: images
  })
}

export const editInstructions = instructions => dispatch => {
  dispatch({
    type: types.EDIT_INSTRUCTIONS, 
    payload: instructions
  })
}

export const editRecipe = (payload, id) => dispatch => { 
  axiosWithAuth()
  .put(`api/recipe/${id}`, payload)
  .then(res => { 
    dispatch({ type: types.EDIT_RECIPE_OK, payload: res.data});
  })
  .catch(error => { 
    console.dir(error);
    dispatch({ type: types.EDIT_RECIPE_FAIL, payload: error})
  })
}