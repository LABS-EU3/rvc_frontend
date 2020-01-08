import * as types from "./actionTypes";
import axios from 'axios'

export const register = (credentials, history) => dispatch => { 

  dispatch({ type: types.REQUEST_START });
  axios 
  .post('https://develop-forkbook.herokuapp.com/api/auth/register', credentials)
  .then(res => { 
    console.log(res.data);
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('userID', res.data.userID)
    dispatch({ type: types.REGISTER_SUCCESS, payload : res.data });
    history.push('/recipe')
  })
  .catch(error => { 
    // console.log(error.message);
    dispatch({ type: types.REGISTER_FAILURE, payload:( error.message = 'Username already exists')});
    // dispatch({ type: types.REGISTER_FAILURE, payload:( error.res.data.message = 'Username already exists')});
    // alert(error.message)
    // alert(error.response.data.message)
  });
}

export const login = (credentials, history) => dispatch => { 
  dispatch({ type: types.REQUEST_START });
  axios
  .post('https://develop-forkbook.herokuapp.com/api/auth/login', credentials)
  .then(res => { 
    console.log(res.data);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('userID', res.data.userID);
    dispatch({ type: types.LOGIN_SUCCESS, payload : res.data });
    history.push('/recipe')
  })
  .catch(error => { 
    // console.log(error.message);
    dispatch({ type: types.LOGIN_FAILURE, payload : error.message});
    // dispatch({ type: types.LOGIN_FAILURE, payload : error.response.data.message});
    // alert(error.message)
    // alert(error.response.data.message)
  })
}

export const logout = () => { 
  localStorage.clear();
  return { type : types.LOGOUT }
};

export const getRecipes = () => dispatch => { 
  dispatch({ type: types.REQUEST_START });
  axios
  // .get('http://localhost:3333/recipes')
  .get('https://develop-forkbook.herokuapp.com/api/recipe')
  .then(res => {
    dispatch({ type: types.GET_ALL_RECIPES_SUCCESS, payload: res.data})
  })
  .catch(error => { 
    dispatch({ type: types.GET_ALL_RECIPES_FAILURE, payload: error.message})
  })
};

export const createRecipe = (recipeData, history) => dispatch => { 
  dispatch( { type: types.REQUEST_START }) 
  axios
  .post('dummyApi', recipeData )
  .then( res => { 
    console.log(res.data)
    dispatch({ type: types.ADD_RECIPE_SUCCESS,
      payload: res.data});
    // history.push('/recipeprofile') 
    })
  .catch(error => { 
    console.log(error.message)
    dispatch({ type: types.ADD_RECIPE_FAILURE,
    payload : error.message})
  });
}

export const addIngredient = ingredient => dispatch => { 
  dispatch({ type : types.REQUEST_START })
  // axios
  // .post('dummyApi', ingredient )
  // .then(res => { 
  //   dispatch({ type : types.ADD_INGREDIENT_SUCCESS, payload : res.data })
  // })
  // .catch(error => { 
  //   dispatch({ type : types.ADD_INGREDIENT_FAILURE, payload : error.message })
  // })
  dispatch({ type : types.ADD_INGREDIENT_SUCCESS, payload : ingredient })
}

export const getIngredients = () => dispatch => { dispatch({ type : types.REQUEST_START });
axios
.get('dummyApi')
.then(res => { 
  //dispatch( { type : types.RESET_DISPLAYED_INGREDIENTS, payload : res.data });
  dispatch({type : types.GET_INGREDIENT_SUCCESS, payload : res.data })
})
.catch(error => { 
  dispatch({
    type : types.GET_INGREDIENT_FAILURE, payload : error.message
  })
})
}