import * as types from "../actions/actionTypes";

const initialOnboardingState = { 
  user_id : localStorage.getItem('userID') || '',
  username: localStorage.getItem('username') || '',
  token: localStorage.getItem('token') || '',
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
        user_id : action.payload.id,
        username: action.payload.username,
        token: action.payload.token,
        message : action.payload.message,
        isFetching : false,
        isLoggedIn : true
      };
    case types.REGISTER_FAILURE: 
      return { 
        ...state,
        error : action.payload,
        isFetching : false
      };
    case types.LOGIN_SUCCESS: 
      return { 
        user_id : action.payload.id,
        username: action.payload.username,
        token: action.payload.token,
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

// const initialRecipeState = { 
//   user_id : 1,
//   recipe_id : '',
//   message : '',
//   error : '', 
//   isFetching : false,
//   ingredients: '',
//   instructions: ''
// };
// export const createRecipeReducer = ( state = initialRecipeState, action) => {
//   switch(action.type) { 
//     case types.REQUEST_START :
//       return { 
//         ...state,
//         isFetching : true,
//         error : ''
//       };
//     case types.ADD_RECIPE_SUCCESS : 
//       return { 
//         ...state, 
//         recipe_id : action.payload.recipeID,
//         message : action.payload.message,
//         isFetching : false
//       };
//     case types.ADD_RECIPE_FAILURE : 
//       return { 
//         ...state,
//         recipe_id : action.payload.recipeID,
//         error : action.payload,
//         isFetching : false
//       }
//     default : 
//     return state;
//   }
// }

const initialIngredient = { 
  ingredientView : [],
  error : '', 
  isFetching : false
}

export const ingredientReducer = ( state = initialIngredient, action) => { 
    switch(action.type){
      case types.REQUEST_START:
        return {
          ...state,
          isFetching: true
        }
      
      case types.GET_INGREDIENT_SUCCESS:
        return { 
          ...state,
          ingredientView : action.payload,
          isFetching : false
        }
      case types.GET_INGREDIENT_FAILURE:
        return { 
          ...state,
          error : action.payload,
          isFetching : false
        }
      case types.RESET_DISPLAYED_INGREDIENTS:
        return {
          state : action.payload
        }
      case types.ADD_INGREDIENT_SUCCESS:
      return { 
        ...state,
        ingredientView : [...state.ingredientView, action.payload],
        isFetching : false
      }
    case types.ADD_INGREDIENT_FAILURE:
      return{ 
        ...state,
        error : action.payload, 
        isFetching : false
      }
    default:
      return state;
    }
  }

  const initialInstruction = { 
    instructionView : [],
    error : '', 
    isFetching : false
  }

  export const instructionReducer = ( state = initialInstruction, action) => { 
    switch(action.type){
      case types.REQUEST_START:
        return {
          ...state,
          isFetching: true
        }
      
      case types.GET_INSTRUCTION_SUCCESS:
        return { 
          ...state,
          instructionView : action.payload,
          isFetching : false
        }
      case types.GET_INSTRUCTION_FAILURE:
        return { 
          ...state,
          error : action.payload,
          isFetching : false
        }
      case types.RESET_DISPLAYED_INSTRUCTIONS:
        return {
          state : action.payload
        }
      case types.ADD_INSTRUCTION_SUCCESS:
      return { 
        ...state,
        instructionView : [...state.instructionView, action.payload],
        isFetching : false
      }
    case types.ADD_INSTRUCTION_FAILURE:
      return{ 
        ...state,
        error : action.payload, 
        isFetching : false
      }
    default:
      return state;
    }
  }


  //attempt 2 
  const initialRecipeState = { 
    
      title:'',
      recipe_category: '',
      tags: [],
      tag: '',
      recipe_file: '',
      ingredients: [],
      instructions: [],
      description: '',
      time_required: null,
      difficulty: null,
      budget: null,
      isFetching: false,
      error: '',
      message: ''
    };
  
  
  export const newRecipeReducer = ( state = initialRecipeState, action) => { 
    switch(action.type) { 
      case types.ADD_TO_NEW_RECIPE :
        return { 
          ...state,
          ...action.payload
        }
      
      case types.REQUEST_START :
        return { 
          ...state,
          isFetching : true
        }
      case types.POST_NEW_RECIPE_SUCCESS : 
      return {
        ...state,
        message : action.payload.message,
        isFetching : false
       }
      case types.RESET_NEW_RECIPE: 
        return {
            ...state,
            title:'',
            recipe_category: '',
            tags: [],
            tag: '',
            recipe_file: '',
            ingredients: [],
            instructions: [],
            description: '',
            time_required: null,
            difficulty: null,
            budget: null,
            isFetching: false,
            error: '',
            message: ''
        }
      case types.POST_NEW_RECIPE_FAILURE : 
       return { 
         ...state,
         error : action.payload,
         isFetching : false
       }
    
      default : 
        return state
      };


  }