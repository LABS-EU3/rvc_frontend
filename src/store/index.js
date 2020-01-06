import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import * as reducers from "../reducers";

const monsterReducer = combineReducers({
  // count: reducers.countReducer
  onboard : reducers.onBoardingReducer,
  recipes : reducers.recipeViewReducer,
  create: reducers.createRecipeReducer
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
