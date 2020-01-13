import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import { getRecipesById } from "../actions/index";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { CardDiv } from "../globals/card-styles";
import arrow from "../images/left-arrow.png";
import dishImg from "../images/dish1.jpg";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";
import Footer from "./Footer";
import "../App.css";

function SeeRecipe({ match, recipe, isFetching, getRecipesById }) {
  console.log("llll", recipe);
  // const getRecipe = id => {
  //   return recipeView.filter(recipe => recipe.id === parseInt(id, 10));
  // };
  const recipeID = match.params.id.trim();
  // const recipe = recipeID ? getRecipe(recipeID)[0] : {};

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
        <ImgRecipe>
          <img
            src={recipe.images ? recipe.images[0] : null || dishImg}
            alt={recipe.recipe_title}
          />
        </ImgRecipe>
        <DescriptionDiv>
          <ProfilePicture>
            {/* <img src={profile} alt="profile" /> */}
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

export const RecipeTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
`;

export const TopButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  text-align: center;
  font-size: 16px;

  h1 {
    margin-top: 7px;
    font-size: 16px;
    font-weight: normal;
  }
`;

export const ForkButton = styled.div`
  width: 90px;
  height: 35px;
  background: rgba(255, 48, 100, 0.8);
  border-radius: 5px;
`;
export const ShareButton = styled.div`
  width: 90px;
  height: 35px;
  background: rgba(182, 182, 182, 0.6);
  border-radius: 5px;
`;
export const ImgRecipe = styled.div`
  width: 100%;
  height: 372px;
  overflow: hidden;
  margin-top: -10%;
  margin-bottom: 2%;
  img {
    object-fit: scale-down;
  }
`;
export const DescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
`;

export const DetailsRecipe = styled.div`
  background: rgba(196, 196, 196, 0.12);
  border-radius: 15px;
  text-align: start;
  width: 81%;
`;
export const ProfilePicture = styled.div`
  border-radius: 50px;
  width: 53px;
  height: 55px;
  object-fit: scale-down;
  overflow: hidden;
  border: 2px solid rgba(196, 196, 196, 0.12);
  background-color: #d88524;
  h1 {
    margin-top: 12px;
    font-size: 18px;
  }
`;

export const BottomButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  height: 24vh;
`;
export const LgButton = styled.div`
  height: 41px;
  margin: 2%;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  background: rgba(10, 179, 138, 0.74);
  border-radius: 9px;
  color: white;
`;
