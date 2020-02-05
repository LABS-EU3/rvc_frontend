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

// profile
const initialProfileState = {
  // The following exist in the db as-is:
  profile_pic: "",
  first_name: "",
  last_name: "",
  bio: "Tap your username above to edit your profile and add a short bio!",
  // The following need their own request(s)...
  user_recipes: [], // A
  user_likes: [], // B
  forked_recipes_count: 0,
  // ... determining the following:
  recipe_count: 0, // A
  recipes_liked_count: 0, // B
  // And the following are meta:
  isFetchingProfileInfo: false,
  isFetchingUserRecipes: false,
  isFetchingLikedRecipes: false,
  isFetchingForkedRecipesCount: false,
  error: {},
  message: ""
};

// not used at the moment might be used later
// const dummyProfileState = {
//   // The following exist in the db as-is:
//   profile_pic: "",
//   first_name: "Dummy",
//   last_name: "Dummyname",
//   bio: "Oh boy, here I go cookin' again!",
//   // The following need their own request(s)...
//   user_recipes: [
//     {
//       id: 2,
//       recipe_title: "Pancakes",
//       author: "TEST",
//       time_required: 55,
//       difficulty: 1,
//       budget: 1,
//       images: [
//         "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1273477_8.jpg?itok=6VhpTntM"
//       ]
//     },
//     {
//       id: 2,
//       recipe_title: "Pancakes",
//       author: "TEST",
//       time_required: 55,
//       difficulty: 1,
//       budget: 1,
//       images: [
//         "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1273477_8.jpg?itok=6VhpTntM"
//       ]
//     },
//     {
//       id: 2,
//       recipe_title: "Pancakes",
//       author: "TEST",
//       time_required: 55,
//       difficulty: 1,
//       budget: 1,
//       images: [
//         "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1273477_8.jpg?itok=6VhpTntM"
//       ]
//     },
//     {
//       id: 2,
//       recipe_title: "Cakes",
//       author: "TEST",
//       time_required: 55,
//       difficulty: 1,
//       budget: 1,
//       images: [
//         "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/07/pick-and-mix-choc-cake-920x605.jpg"
//       ]
//     }
//   ], // A
//   user_likes: [
//     {
//       id: 2,
//       recipe_title: "Cookies",
//       author: "TEST",
//       time_required: 55,
//       difficulty: 1,
//       budget: 1,
//       images: [
//         "https://www.handletheheat.com/wp-content/uploads/2018/02/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9.jpg"
//       ]
//     }
//   ], // B
//   forked_recipes_count: 0,
//   // ... determining the following:
//   recipe_count: 2, // A
//   recipes_liked_count: 1, // B
//   // And the following are meta:
//   isFetchingProfileInfo: false,
//   isFetchingUserRecipes: false,
//   isFetchingLikedRecipes: false,
//   isFetchingForkedRecipesCount: false,
//   error: {},
//   message: ""
// };

export const profileReducer = (state = initialProfileState, action) => {
  switch (action.type) {
    case types.GET_PROFILE:
      return {
        ...state,
        isFetchingProfileInfo: true,
        isFetchingUserRecipes: true,
        isFetchingLikedRecipes: true,
        isFetchingForkedRecipesCount: true,
        error: "",
        message: "",
      }
    case types.GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        ...action.payload, // includes profile_pic, first_name, last_name, bio
        isFetchingProfileInfo: false,
        message: state.message + " Successfully fetched profile information.",
      }
    case types.GET_USER_RECIPES_SUCCESS:
      return {
        ...state,
        ...action.payload, // user_recipes, recipe_count
        isFetchingUserRecipes: false,
        message: state.message + " Successfully fetched user_recipes and recipe_count."
      }
    case types.GET_LIKED_RECIPES_SUCCESS:
      return {
        ...state,
        ...action.payload, // user_likes, recipes_liked_count
        isFetchingLikedRecipes: false,
        message: state.message + " Successfully fetched liked_recipes and recipes_forked_count."
      }
    case types.GET_FORKED_RECIPES_COUNT_SUCCESS:
      return {
        ...state,
        forked_recipes_count: action.payload, // forked_recipes_count
        isFetchingForkedRecipesCount: false,
        message: state.message + " Successfully fetched forked_recipes_count."
      }
    case types.GET_PROFILE_FAILURE:
      return {
        ...state,
        isFetchingProfileInfo: false,
        isFetchingUserRecipes: false,
        isFetchingLikedRecipes: false,
        isFetchingForkedRecipesCount: false,
        error: action.payload,
        message: "Failed to fetch profile."
      }
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
    default:
      return state;
  }
}

//EDIT RECIPE

export function editRecipeReducer(state = initialBody, action) {
  switch (action.type) {
    case types.EDIT_RECIPE:
      return {
        ...state
      };
    case types.EDIT_RECIPE_CATEGORIES:
      return {
        ...state,
        recipe_categories: state.recipe_categories.map(category => {
          if (category.id === action.payload.id) {
            return action.payload;
          }
          return category;
        })
      };
    case types.EDIT_IMAGES:
      return {
        ...state,
        images: state.images.map(image => {
          if (image.id === action.payload.id) {
            return action.payload;
          }
          return image;
        })
      };
    case types.EDIT_INSTRUCTIONS:
      return {
        //edit by deleting/clearing up entries and refilling
        ...state,
        instructions: state.instructions.map(instruction => {
          if (instruction.id === action.payload.id) {
            return action.payload;
          }
          return instruction;
        })
      };
    default:
      return state;
  }
}

const initialNewlyEditedRecipe = {
  editedData: [],
  error: ""
};

export function newlyEditRecipe(state = initialNewlyEditedRecipe, action) {
  switch (action.type) {
    case types.EDIT_RECIPE_FAIL:
      return { ...state, error: action.payload };
    case types.EDIT_RECIPE_OK:
      return { ...state, editedData: action.payload };
    default:
      return state;
  }
}

// General Modal Reducer:
const initialModalState = {
  modalType: "notification",
  message: "",
  buttonLink: "/login",
  isDisplaying: false
};
export function modalReducer(state = initialModalState, action) {
  switch (action.type) {
    case types.DISPLAY_NOTIFICATION_MODAL:
      return {
        modalType: "notification",
        isDisplaying: true,
        ...action.payload
      };
    case types.DISPLAY_LIKE_MODAL:
        return {
          modalType: "like",
          isDisplaying: true,
          ...action.payload,
        }
    case types.DISPLAY_ERROR_MODAL:
      return {
        modalType: "error",
        message: action.payload,
        buttonLink: "/login",
        isDisplaying: true
      };
    case types.DISMISS_MODAL:
      return initialModalState;
    default:
      return state;
  }
}

const initialUserLikesState = {
  likes: [],
  isGetting: false,
  isPosting: false,
  isDeleting: false,
  error: {},
  message: "",
}
export function userLikesReducer(state = initialUserLikesState, action) {
  switch (action.type) {
    case types.LIKE_RECIPE:
      return {
        ...state,
        isPosting: true,
        message: "",
      }
    case types.LIKE_RECIPE_SUCCESS:
      return {
        ...state,
        likes: [...state.likes, action.payload],
        isPosting: false,
        message: `Like added for recipe ${action.payload}!`,
      }
    case types.UNLIKE_RECIPE:
      return {
        ...state,
        isDeleting: true,
        message: "",
      }
    case types.UNLIKE_RECIPE_SUCCESS:
      return {
        ...state,
        likes: [...state.likes].filter(like => like !== action.payload),
        isDeleting: false,
        message: `Like removed for recipe ${action.payload}.`,
      }
    case types.GET_USER_LIKES:
      return {
        ...state,
        isGetting: true,
        message: "",
      }
    case types.GET_USER_LIKES_SUCCESS:
      return {
        ...state,
        likes: action.payload,
        isGetting: false,
        message: "Likes fetched!",
      }
    case types.LIKE_REQUEST_FAILURE:
      return {
        ...initialUserLikesState,
        likes: state.likes,
        error: action.payload,
        message: "Like request failed."
      }
    default:
      return state;
  }
}