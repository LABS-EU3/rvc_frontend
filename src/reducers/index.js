import * as types from "../actions/actionTypes";

// const initialValueCount = 0;
// export function countReducer(count = initialValueCount, action) {
//   switch (action.type) {
//     case types.INCREMENT:
//       return count + 1;
//     case types.DECREMENT:
//       return count - 1;
//     case types.RESET:
//       return 0;
//     default:
//       return count;
//   }
// }

const initialOnboardingState = { 
  user_id : '',
  message : '',
  error : '', 
  isFetching : false,
  isLoggedIn : false
};

export const onBoardingReducer = (state = initialOnboardingState, action) => { 
  switch(action.type) { 
    case types.REQUEST_START: 
    return { 
      ...state,
      isFetching : true,
      error : ''
    };
    case types.REGISTER_SUCCESS:
      return { 
        ...state,
        user_id : action.payload.userID,
        message : action.payload.message,
        isFetching : false
      };
    case types.REGISTER_FAILURE: 
      return { 
        ...state,
        error : action.payload,
        isFetching : false
      };
    case types.LOGIN_SUCCESS: 
      return { 
        user_id : action.payload.userID,
        message : action.payload.message,
        isFetching : false,
        isLoggedIn : true
      };
    case types.LOGIN_FAILURE: 
      return { 
        ...state,
        error : action.payload,
        isFetching : false,
        isLoggedIn : false
      }
    default:
      return state;
  }
}

const initialRecipeView = { 
  recipeView : [],
  error : '',
  isFetching : false 
}

export const recipeViewReducer = (state = initialRecipeView, action) => { 
  switch( action.type) { 
    case types.REQUEST_START: 
      return { 
        ...state, 
        isFetching : true
      };
    case types.GET_ALL_RECIPES_SUCCESS:
      return { 
        ...state,
        recipeView : action.payload,
        isFetching : false
      };
    case types.GET_ALL_RECIPES_FAILURE: 
      return { 
        ...state,
        error : action.payload,
        isFetching : false
      };

    default:
      return state
  }
}
