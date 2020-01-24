export const REQUEST_START = "REQUEST_START";

//register and login action types
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT = "LOGOUT";

//create recipe
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE = "ADD_RECIPE_FAILURE";

//add to new recipe
export const ADD_TO_NEW_RECIPE = "ADD_TO_NEW_RECIPE";

//submit new recipe
export const POST_NEW_RECIPE_SUCCESS = "POST_NEW_RECIPE_SUCCESS";
export const POST_NEW_RECIPE_FAILURE = "POST_NEW_RECIPE_FAILURE";

//reset new recipe
export const RESET_NEW_RECIPE = "RESET_NEW_RECIPE";

// view recipe
export const GET_ALL_RECIPES_SUCCESS = "GET_ALL_RECIPES_SUCCESS";
export const GET_ALL_RECIPES_FAILURE = "GET_ALL_RECIPES_FAILURE";

//view single recipe
export const GET_RECIPE = "GET_RECIPE";
export const GET_RECIPE_SUCCESS = "GET_RECIPE_SUCCESS";
export const GET_RECIPE_FAILURE = "GET_RECIPE_FAILURE";

// add category
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE";

// view categories
export const GET_ALL_CATEGORIES_SUCCESS = "GET_ALL_CATEGORIES_SUCCESS";
export const GET_ALL_CATEGORIES_FAILURE = "GET_ALL_CATOGORIES_FAILURE";

// add tag
export const ADD_TAG_SUCCESS = "ADD_TAG_SUCCESS";
export const ADD_TAG_FAILURE = "ADD_TAG_FAILURE";

//view tags
export const GET_ALL_TAGS_SUCCESS = "GET_ALL_TAGS_SUCCESS";
export const GET_ALL_TAGS_FAILURE = "GET_ALL_TAGS_FAILURE";

//add photo
export const ADD_PHOTO_SUCCESS = "ADD_PHOTO_SUCCESS";
export const ADD_PHOTO_FAILURE = "ADD_PHOTO_FAILURE";

//view photos
export const GET_ALL_PHOTOS_SUCCESS = "GET_ALL_PHOTOS_SUCCESS";
export const GET_ALL_PHOTOS_FAILURE = "GET_ALL_PHOTOS_FAILURE";

//add ingredient
export const ADD_INGREDIENT_SUCCESS = "ADD_INGREDIENT_SUCCESS";
export const ADD_INGREDIENT_FAILURE = "ADD_INGREDIENT_FAILURE";

//view ingredients
export const GET_INGREDIENT_SUCCESS = "GET_INGREDIENT_SUCCESS";
export const GET_INGREDIENT_FAILURE = "GET_INGREDIENT_FAILURE";
export const RESET_DISPLAYED_INGREDIENTS = "RESET_DISPLAYED_INGREDIENTS";

//add instruction
export const ADD_INSTRUCTION_SUCCESS = "ADD_INSTRUCTION_SUCCESS";
export const ADD_INSTRUCTION_FAILURE = "ADD_INSTRUCTION_FAILURE";

//view instructions
export const GET_INSTRUCTION_SUCCESS = "GET_INSTRUCTION_SUCCESS";
export const GET_INSTRUCTION_FAILURE = "GET_INSTRUCTION_FAILURE";
export const RESET_DISPLAYED_INSTRUCTIONS = "RESET_DISPLAYED_INSTRUCTIONS";

// profile
export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

// THIS IS THE NEW STUFF DO NOT DELETE BELOW
export const ADD_RECIPE_TO_BODY = "ADD_RECIPE_TO_BODY";
export const ADD_RECIPE_CATEGORIES_TO_BODY = "ADD_RECIPE_CATEGORIES_TO_BODY";
export const ADD_TAGS_TO_BODY = "ADD_TAGS_TO_BODY";
export const ADD_RECIPE_TAGS_TO_BODY = "ADD_RECIPE_TAGS_TO_BODY";
export const ADD_IMAGES_TO_BODY = "ADD_IMAGES_TO_BODY";
export const ADD_INGREDIENTS_TO_BODY = "ADD_INGREDIENTS_TO_BODY";
export const ADD_RECIPE_INGREDIENTS_TO_BODY = "ADD_RECIPE_INGREDIENTS_TO_BODY";
export const ADD_INSTRUCTIONS_TO_BODY = "ADD_INSTRUCTIONS_TO_BODY";

// ACTION TYPES FOR newlyAddedRecipe
export const POST_RECIPE_OK = "POST_RECIPE_OK";
export const POST_RECIPE_FAIL = "POST_RECIPE_FAIL";

//EDIT RECIPE

export const POPULATE_EDIT_RECIPE = "POPULATE_EDIT_RECIPE"
export const EDIT_RECIPE = "EDIT_RECIPE"
export const EDIT_RECIPE_CATEGORIES="EDIT_RECIPE_CATEGORIES"
export const EDIT_IMAGES="EDIT_IMAGES"
export const EDIT_INSTRUCTIONS="EDIT_INSTRUCTIONS"
// export const EDIT_RECIPE_TAGS="EDIT_RECIPE_TAGS"
// export const EDIT_RECIPE_INGREDIENTS="EDIT_RECIPE_INGREDIENTS";
//since recipe_tags & recipe_ingredients are stored for future use
//we'll rather delete them and add what we'll prefer, rather than
//edit them from the database  



//SUBMIT EDITED RECIPE 
export const EDIT_RECIPE_FAIL="EDIT_RECIPE_FAIL";
export const EDIT_RECIPE_OK= "EDIT_RECIPE_OK";
