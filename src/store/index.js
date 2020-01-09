import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import * as reducers from "../reducers";
// import { reducer as formReducer } from 'redux-form'

// function createReducer(monsterReducer= {
//   onboard : reducers.onBoardingReducer,
//   recipes : reducers.recipeViewReducer,
//   create: reducers.createRecipeReducer,
//   ingredients : reducers.ingredientReducer,
//   instructions : reducers.instructionReducer
// }) {
  // return combineReducers({
    // form: formReducer,
    // ...monsterReducer
  // })
// }
const monsterReducer = combineReducers({
  onboard : reducers.onBoardingReducer,
  recipes : reducers.recipeViewReducer,
  create: reducers.createRecipeReducer,
  ingredients : reducers.ingredientReducer,
});

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
// const composeEnhancers =
//   typeof window === 'object' &&
//   (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose);

// export function configureStore() {
//   // const middlewares = [];
//   const store = createStore(
//     createReducer(),
//     {},
//     composeEnhancers(applyMiddleware(thunk))
//   );
//   return store;
// }

// export default configureStore;