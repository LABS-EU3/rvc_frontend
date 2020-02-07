
import React, { Component } from 'react';
import {
	withRouter
} from 'react-router-dom'
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";
import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Fab from '@material-ui/core/Fab';
import {
  Section1,
  NavigationSection1,
  Addtitle,
  PreviewDiv,
  AddItem,
  Title 
} from "./FormStyled.styles";

function Step5(props) {
  const {
    postRecipe,
    recipe,
    recipe_categories,
    recipe_tags,
    images,
    recipe_ingredients,
    instructions,
    goBackward
  } = props;
  
  // const submitRecipe = () => {
  //   const body = {
  //     recipe,
  //     recipe_categories,
  //     recipe_tags,
  //     images,
  //     recipe_ingredients,
  //     instructions
  //   };
  //   postRecipe(props.history, body);
  // };
  
  const submitRecipe = () => {
    
    const body = {
      recipe,
      recipe_categories,
      recipe_tags,
      images,
      recipe_ingredients,
      instructions
    };
    postRecipe(body);

  };



  const goBack = e => {
    goBackward();
  };

  return (
    <div>
      <Section1>
        <NavigationSection1>
         <Fab 
          style={{"background": "none", "boxShadow": "none", "outline": 'none'
          }}
          >
            <ArrowBackIcon className="back-arrow" onClick={goBack} cgit="true" />
         </Fab>
          <Fab 
          style={{"background": "none", "boxShadow": "none", "outline": 'none'
          }}
          >
            <CheckIcon className="check-icon" cgit="true" onClick={submitRecipe} />
          </Fab>
        </NavigationSection1>
        <Addtitle>
          <h1>Preview of {recipe.title}</h1>
        </Addtitle>
      </Section1>
      <PreviewDiv>
      <img src={images[0]} className="preview-image" alt="preview of newly created recipe"/>
      <p className="description-paragraph">{recipe.description} </p>
       <br></br>
      <p className="p-paragraph"> Time : {recipe.time_required} min</p> 
      <p className="p-paragraph"> Budget : {recipe.budget} $</p> 
      <p className="p-paragraph"> Difficulty : {recipe.difficulty}/4 </p>  
      <Title>
        Ingredients
      </Title>
      {recipe_ingredients.map((ingr, i) => <p key={i}>{ingr.name}</p>)}
 
        <Title>
        Instruction
      </Title>
        {instructions.map(instr => 
        <AddItem> 
          <p>{instr}</p> 
        </AddItem> 
        )}
 
      </PreviewDiv>
    </div>
  );
}


export default connect(state => state.newRecipe, dispatchers)(Step5);
