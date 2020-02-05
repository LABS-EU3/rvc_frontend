import React from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";

import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Fab from '@material-ui/core/Fab';
import {
  Section1,
  NavigationSection1,
  Addtitle,
  PreviewDiv
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
      <p>
      {recipe.description}
      </p>
      <h2>Ingredients</h2>
        {recipe_ingredients.map(ingr => <p>{ingr.name}</p>)}
      <h2>Instruction</h2>
        {instructions.map(instr => <p>{instr}</p>)}

      </PreviewDiv>
    </div>
  );
}


export default connect(state => state.newRecipe, dispatchers)(Step5);
