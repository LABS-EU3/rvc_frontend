
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

const userLikesErrorHandler = (err, dispatch) => {
  dispatch({ type: types.LIKE_REQUEST_FAILURE, payload: err });
};
export const likeRecipe = (user_id, recipe_id) => dispatch => {
  dispatch({ type: types.LIKE_RECIPE });

  axiosWithAuth()
    .post("/api/likes", ({ user_id, recipe_id }))
    .then(res => {
      dispatch({ type: types.LIKE_RECIPE_SUCCESS, payload: res.data.id });
      // ^Note: Only need res.data.id, here, as userLikes might as well be an array of recipe ids. :)
    })
    .catch(err => userLikesErrorHandler(err, dispatch));
}
export const unlikeRecipe = (user_id, recipe_id) => dispatch => {
  dispatch({ type: types.UNLIKE_RECIPE });

  axiosWithAuth()
  .delete("/api/likes", {
    data: { user_id, recipe_id }
    // ^Note: see https://github.com/axios/axios/issues/736
  })
  .then(res => {
      dispatch({ type: types.UNLIKE_RECIPE_SUCCESS, payload: recipe_id });
    })
    .catch(err => userLikesErrorHandler(err, dispatch));
}
export const getUserLikes = user_id => dispatch => {
  dispatch({ type: types.GET_USER_LIKES });

  axiosWithAuth()
    .get(`/api/likes/${user_id}`)
    .then(res => {
      const likedRecipeIds = res.data.map(recipe => recipe.id);
      dispatch({ type: types.GET_USER_LIKES_SUCCESS, payload: likedRecipeIds });
    })
    .catch(err => userLikesErrorHandler(err, dispatch));
}

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

export const getProfile = user_id => dispatch => {
  dispatch({ type: types.GET_PROFILE });

  const getProfileInfo = axiosWithAuth().get('/api/profile');
  const getUserRecipes = axiosWithAuth().get(`/api/recipe/user/${user_id}`);
  const getUserLikes = axiosWithAuth().get(`api/likes/${user_id}`);
  const getForkedRecipesCount = axiosWithAuth().get(`api/likes/count/${user_id}`);

  Promise.all([ getProfileInfo, getUserRecipes, getUserLikes, getForkedRecipesCount ])
    .then(responses => {
      const profileInfoPayload = { ...responses[0].data };
      dispatch({ type: types.GET_PROFILE_INFO_SUCCESS, payload: profileInfoPayload });

      const user_recipes = [ ...responses[1].data ];
      const userRecipesPayload = {
        user_recipes,
        recipe_count: user_recipes.length,
      }
      dispatch({ type: types.GET_USER_RECIPES_SUCCESS, payload: userRecipesPayload });

      const user_likes = [ ...responses[2].data ];
      const userLikesPayload = {
        user_likes,
        recipes_liked_count: user_likes.length,
      }
      dispatch({ type: types.GET_LIKED_RECIPES_SUCCESS, payload: userLikesPayload });

      const forked_recipes_count = responses[3].data.likes;
      dispatch({ type: types.GET_FORKED_RECIPES_COUNT_SUCCESS, payload: forked_recipes_count });
    })
    .catch(error => {
      dispatch({ type: types.GET_PROFILE_FAILURE, payload: error});
    });
}

// for Modal:
export const displayNotificationModal = (message, buttonLink) => dispatch => {
  dispatch({ type: types.DISPLAY_NOTIFICATION_MODAL, payload: ({ message, buttonLink })});
}

export const displayLikeModal = (message, buttonLink) => dispatch => {
  dispatch({ type: types.DISPLAY_LIKE_MODAL, payload: ({ message, buttonLink })});

  setTimeout(() => dispatch({ type: types.DISMISS_MODAL }), 3001);
}

export const displayErrorModal = message => dispatch => {
  dispatch({ type: types.DISPLAY_ERROR_MODAL, payload: message });
}

export const dismissModal = () => dispatch => {
  dispatch({ type: types.DISMISS_MODAL });
}

//edit

export const editRecipe = (id, payload) => dispatch => { 
  dispatch({ type: types.EDIT_RECIPE})

  axiosWithAuth()
  .put(`api/recipe/${id}`, payload)
  .then(res =>  { dispatch({ 
    type: types.EDIT_RECIPE_OK, payload: res.data
  })})
  .catch(error => {
    console.dir(error);
    dispatch({ type: types.EDIT_RECIPE_FAIL, payload: error });
  });
}

export const cloneRecipe = (id, cloneData) => dispatch => { 
  axiosWithAuth()
  .post(`api/recipe/${id}`, cloneData) 
  .then(res => { dispatch({
    type: types.POST_RECIPE_OK})
  })
  .catch(error => { 
    console.dir(error);
    dispatch({ type: types.POST_RECIPE_FAIL})
  })
}

export const editIngredient = (id, ingredient) => dispatch => { 
  dispatch({ type: types.EDIT_INGREDIENT})
  axiosWithAuth()
  .put(`api/recipe/${id}/ingredient`, ingredient)
  .then(res => { dispatch({ 
    type: types.EDIT_INGREDIENT_OK, payload: res.data
  })})
  .catch(error => { 
    dispatch({ type: types.EDIT_INGREDIENT_FAIL, payload: error})
  })
}

export const addNewIngredient = (id, newIngredient) => dispatch => { 
  dispatch({ type: types.POST_INGREDIENT})
  axiosWithAuth()
  .post(`api/recipe/${id}/ingredient`, newIngredient)
  .then(res => { dispatch({ 
    type: types.POST_INGREDIENT_OK, payload: res.data
  })})
  .catch(error => { 
    dispatch({ type: types.POST_INGREDIENT_FAIL })
  })
}
export const editImage = (id , image) => dispatch => { 
  dispatch({ type: types.EDIT_IMAGE})
  axiosWithAuth()
  .post(`api/recipe/${id}/image`, image)
  .then(res => { dispatch({
    type: types.EDIT_IMAGE_OK, payload:res.data.url
  })})
  .catch(error => { 
    console.dir(error);
    dispatch({ type: types.EDIT_IMAGE_FAIL, payload: error})
  })
}

export const editCategory = (id, category) => dispatch => { 
  dispatch({ type: types.EDIT_CATEGORY})
  axiosWithAuth()
  .put(`api/category/${id}`, category)
  .then(res => { dispatch({ 
    type: types.EDIT_CATEGORY_OK, payload: res.data
  })})
  .catch(error => { 
    console.dir(error);
    dispatch({ type: types.EDIT_CATEGORY_FAIL, payload:error})
  })
}
export const editTag = (id, tag) => dispatch => { 
  dispatch({ type: types.EDIT_TAG})
  axiosWithAuth()
  .put(`api/tag/${id}`, tag)
  .then(res => { dispatch({ 
    type: types.EDIT_TAG_OK, payload: res.data
  })})
  .catch(error => { 
    console.dir(error);
    dispatch({ type: types.EDIT_TAG_FAIL, payload:error})
  })
}

export const editInstruction = (id, instruction) => dispatch => {
  dispatch({ type: types.EDIT_INSTRUCTION})
  axiosWithAuth()
  .put( `api/instruction/${id}`, instruction)
  .then(res => { dispatch({ 
    type: types.EDIT_INSTRUCTION_OK, payload: res.data
  })})
  .catch(error => { 
    console.dir(error);
    dispatch({ type: types.EDIT_INSTRUCTION_FAIL, payload: error})
  })
}

