import * as types from "../actions/actionTypes";

const initialOnboardingState = {
  user_id: localStorage.getItem("userID") || "",
  username: localStorage.getItem("username") || "",
  token: localStorage.getItem("token") || "",
  message: "",
  error: {},
  isFetching: false,
  isLoggedIn: false
};

export const onBoardingReducer = (state = initialOnboardingState, action) => {
  switch (action.type) {
    case types.REQUEST_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user_id: action.payload.id,
        username: action.payload.username,
        token: action.payload.token,
        message: action.payload.message,
        isFetching: false,
        isLoggedIn: true
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case types.LOGIN_SUCCESS:
      return {
        user_id: action.payload.id,
        username: action.payload.username,
        token: action.payload.token,
        message: action.payload.message,
        isFetching: false,
        isLoggedIn: true
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

const initialRecipeView = {
  recipeView: [],
  error: "",
  isFetching: false
};

export const recipeViewReducer = (state = initialRecipeView, action) => {
  switch (action.type) {
    case types.REQUEST_START:
      return {
        ...state,
        isFetching: true
      };
    case types.GET_ALL_RECIPES_SUCCESS:
      return {
        ...state,
        recipeView: action.payload,
        isFetching: false
      };
    case types.GET_ALL_RECIPES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return {
        ...state,
        isFetching: false
      };
  }
};

const initialSingleRecipe = {
  recipe: [],
  error: "",
  isFetching: false
};

export const singleRecipeReducer = (state = initialSingleRecipe, action) => {
  switch (action.type) {
    case types.GET_RECIPE:
      return {
        ...state,
        isFetching: true
      };
    case types.GET_RECIPE_SUCCESS:
      return {
        ...state,
        recipe: action.payload,
        isFetching: false
      };
    case types.GET_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return {
        ...state,
        isFetching: false
      };
  }
};

const initialIngredient = {
  ingredientView: [],
  error: "",
  isFetching: false
};

export const ingredientReducer = (state = initialIngredient, action) => {
  switch (action.type) {
    case types.REQUEST_START:
      return {
        ...state,
        isFetching: true
      };

    case types.GET_INGREDIENT_SUCCESS:
      return {
        ...state,
        ingredientView: action.payload,
        isFetching: false
      };
    case types.GET_INGREDIENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case types.RESET_DISPLAYED_INGREDIENTS:
      return {
        state: action.payload
      };
    case types.ADD_INGREDIENT_SUCCESS:
      return {
        ...state,
        ingredientView: [...state.ingredientView, action.payload],
        isFetching: false
      };
    case types.ADD_INGREDIENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

const initialInstruction = {
  instructionView: [],
  error: "",
  isFetching: false
};

export const instructionReducer = (state = initialInstruction, action) => {
  switch (action.type) {
    case types.REQUEST_START:
      return {
        ...state,
        isFetching: true
      };

    case types.GET_INSTRUCTION_SUCCESS:
      return {
        ...state,
        instructionView: action.payload,
        isFetching: false
      };
    case types.GET_INSTRUCTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case types.RESET_DISPLAYED_INSTRUCTIONS:
      return {
        state: action.payload
      };
    case types.ADD_INSTRUCTION_SUCCESS:
      return {
        ...state,
        instructionView: [...state.instructionView, action.payload],
        isFetching: false
      };
    case types.ADD_INSTRUCTION_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

const initialRecipeState = {
  title: "",
  description: "",
  budget: null,
  time_required: null,
  difficulty: null,

  recipe_categories: [],
  
  tags: [],
  recipe_tags: [],

  images: [],

  ingredients: [],
  recipe_ingredients: [],

  instructions: [],
  isFetching: false,
  error: "",
  message: ""
};

export const newRecipeReducerOld = (state = initialRecipeState, action) => {
  switch (action.type) {
    case types.ADD_TO_NEW_RECIPE:
      return {
        ...state,
        ...action.payload
      };

    case types.REQUEST_START:
      return {
        ...state,
        isFetching: true
      };
    case types.POST_NEW_RECIPE_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        isFetching: false
      };
    case types.RESET_NEW_RECIPE:
      return {
        ...state,
        title: "",
        description: "",
        budget: null,
        time_required: null,
        difficulty: null,
        recipe_categories: [],
        tags: [],
        recipe_tags: [],
        images: [],
        ingredients: [],
        recipe_ingredients: [],
        instructions: [],
        isFetching: false,
        error: "",
        message: ""
      };
    case types.POST_NEW_RECIPE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};


// THIS IS THE NEW STUFF DO NOT DELETE BELOW

const initialBody = {
  // All of the keys are needed and you can only send one recipe object
  recipe: {
    title: "",
    description: "",
    budget: null,
    time_required: null,
    difficulty: null
  },

  // This only takes in id's of existing categories, can be several (currently only configured for one category)
  recipe_categories: [],

  // This only takes the string of new tags, can be several (currently not implemented)
  tags: [],

  // This only takes in id's of existing tags, can be several
  recipe_tags: [],

  // This only takes the string for new image url, can be several
  images: [],

  // This only takes the string of new ingredients, can be several (currently not implemented)
  ingredients: [],

  // This is always needed and contains the quantity and units for ingredients, existing or new.
  recipe_ingredients: [],

  // This only takes in the strings for the instructions, can be several
  instructions: []
};

export function newRecipeReducer(state = initialBody, action) {
  switch (action.type) {
    case types.ADD_RECIPE_TO_BODY:
      return {
        ...state,
        recipe: action.payload
      };

    case types.ADD_RECIPE_CATEGORIES_TO_BODY:
      return {
        ...state,
        recipe_categories: action.payload
      };

    case types.ADD_TAGS_TO_BODY:
      return {
        ...state,
        tags: action.payload
      };

    case types.ADD_RECIPE_TAGS_TO_BODY:
      return {
        ...state,
        recipe_tags: action.payload
      };
    case types.ADD_IMAGES_TO_BODY:
      return {
        ...state,
        images: action.payload
      };
    case types.ADD_INGREDIENTS_TO_BODY:
      return {
        ...state,
        ingredients: action.payload
      };
    case types.ADD_RECIPE_INGREDIENTS_TO_BODY:
      return {
        ...state,
        recipe_ingredients: action.payload
      };
    case types.ADD_INSTRUCTIONS_TO_BODY:
      return {
        ...state,
        instructions: action.payload
      };
    default:
      return state;
  }
}

const initialNewlyAddedRecipe = {
  data: [],
  error: ""
};

export function newlyAddedRecipe(state = initialNewlyAddedRecipe, action) {
  switch (action.type) {
    case types.POST_RECIPE_FAIL:
      return { ...state, error: action.payload };
    case types.POST_RECIPE_OK:
      return { ...state, data: action.payload };
  }
}


//EDIT RECIPE 

export function editRecipeReducer(state = initialBody, action) { 
  switch (action.type) { 
   
    case types.EDIT_INSTRUCTIONS:
      return { 
        ...state,
        instructions: state.instructions.map(instruction=> { 
          if (instruction.id === action.payload.id) { 
            return action.payload;
          }
          return instruction
        })
      }
  }
}

export function deleteRecipeReducer(state = initialBody, action) {
  switch(action.type) { 
    case types.DELETE_INSTRUCTIONS:
      return { 
        ...state,
        instructions: state.instructions.filter(instruction => instruction.id !== action.payload)
      }
  }
}
 
const initialNewlyEditedRecipe = { 
  editedData: [],
  error: ""
};

export function newlyEditRecipe ( state = initialNewlyEditedRecipe, action) {
  switch (action.type) { 
    case types.EDIT_RECIPE_FAIL: 
      return { ...state, error: action.payload };
    case types.EDIT_RECIPE_OK: 
      return { ...state, data: action.payload }
  }
}