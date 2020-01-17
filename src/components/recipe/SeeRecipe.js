import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipesById } from "../../actions/actionCreators";
import Popup from "reactjs-popup";

import IngredientList from "../ingredients/ingredientList/IngredientList";
import InstructionList from "../instructions/instructionList/InstructionList";
import Footer from "../navigation/footerNav/FooterNav";
import Loader from "../loader/Loader";

import arrow from "../../images/left-arrow.png";
import dishImg from "../../images/dish1.jpg";

import { CardDiv } from "../../globals/card-styles";
import "../../App.css";
import {
  RecipeTopDiv,
  TopButtonDiv,
  ForkButton,
  ShareButton,
  ImgRecipe,
  DescriptionDiv,
  DetailsRecipe,
  ProfilePicture,
  BottomButtonDiv,
  LgButton
} from "./Recipe.styles";

function SeeRecipe({ match, recipe, isFetching, getRecipesById }) {
  console.log("SeeRecipe.js > recipe: ", recipe);
  
  const recipeID = match.params.id.trim();

  useEffect(() => {
    getRecipesById(recipeID);
  }, [getRecipesById, recipeID]);

  return (
    <div>
      <RecipeTopDiv>
        <div>
          <Link to="/">
            <img src={arrow} alt="arrow" />
          </Link>
        </div>

        <TopButtonDiv>
          <ShareButton>
            <h1>Share</h1>
          </ShareButton>

          <ForkButton>
            <h1>Fork</h1>
          </ForkButton>
        </TopButtonDiv>

      </RecipeTopDiv>

      <CardDiv>
        {isFetching ? <Loader /> : null}

        <ImgRecipe>
          <img
            src={recipe.images ? recipe.images[0] : null || dishImg}
            alt={recipe.recipe_title}
          />
        </ImgRecipe>

        <DescriptionDiv>
          <ProfilePicture>
            <h1>
              {" "}
              {recipe.author
                ? recipe.author[0].toUpperCase()
                : null || `C`}{" "}
            </h1>
          </ProfilePicture>

          <DetailsRecipe>{recipe.recipe_title || ""}</DetailsRecipe>
        </DescriptionDiv>

        <BottomButtonDiv>
          <Popup modal trigger={<LgButton>Ingredients</LgButton>}>
            {close => (
              <IngredientList ingredients={recipe.ingredients} close={close} />
            )}
          </Popup>

          <Popup modal trigger={<LgButton>Instructions</LgButton>}>
            {close => (
              <InstructionList
                instructions={recipe.instructions}
                close={close}
              />
            )}
          </Popup>
        </BottomButtonDiv>
      </CardDiv>

      <Footer />
    </div>
  );
}

export default connect(state => state.singleRecipe, {
  getRecipesById
})(SeeRecipe);
