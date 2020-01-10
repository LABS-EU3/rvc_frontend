import * as reducers from "../reducers";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const monsterReducer = combineReducers({
  newRecipe : reducers.newRecipeReducer,
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
