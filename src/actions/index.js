import * as types from "./actionTypes";
import axios from 'axios'

// export function increment() {
//   return { type: types.INCREMENT };
// }

// export function decrement() {
//   return { type: types.DECREMENT };
// }

// export const reset = () => {
//   return { type: types.RESET };
// };

export const register = (credentials, history) => dispatch => { 

  dispatch({ type: types.REQUEST_START });
  axios 
  .post('https://develop-forkbook.herokuapp.com/api/auth/register', credentials)
  .then(res => { 
    console.log(res.data);
    dispatch({ type: types.REGISTER_SUCCESS, payload : res.data });
    history.push('/recipe')
  })
  .catch(error => { 
    console.log(error.message);
    dispatch({ type: types.REGISTER_FAILURE, payload: error.message})
  });
}

export const login = (credentials, history) => dispatch => { 
  dispatch({ type: types.REQUEST_START });
  axios
  .post('https://develop-forkbook.herokuapp.com/api/auth/login', credentials)
  .then(res => { 
    console.log(res.data);
    dispatch({ type: types.LOGIN_SUCCESS, payload : res.data });
    history.push('/recipe')
  })
  .catch(error => { 
    console.log(error.message);
    dispatch({ type: types.LOGIN_FAILURE, payload : error.message})
  })
}

export const getRecipes = () => dispatch => { 
  dispatch({ type: types.REQUEST_START });
  axios
  .get('http://localhost:3333/recipes')
  .then(res => {
    dispatch({ type: types.GET_ALL_RECIPES_SUCCESS, payload: res.data})
  })
  .catch(error => { 
    dispatch({ type: types.GET_ALL_RECIPES_FAILURE, payload: error.message})
  })
};
