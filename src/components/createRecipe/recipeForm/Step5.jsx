import React from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";

import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Fab from '@material-ui/core/Fab';
import {
  Section1,
  NavigationSection1,
  Addtitle
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
          style={{"background": "none", "box-shadow": "none", "outline": 'none'
          }}
          >
            <ArrowBackIcon className="back-arrow" onClick={goBack} cgit />
         </Fab>
          <Fab 
          style={{"background": "none", "box-shadow": "none", "outline": 'none'
          }}
          >
            <CheckIcon className="check-icon" cgit onClick={submitRecipe} />
          </Fab>
        </NavigationSection1>
        <Addtitle>
          <h1>Preview of {recipe.title}</h1>
        </Addtitle>
      </Section1>
      <img src={images[0]} alt="preview of newly created recipe"/>
      {/* <button onClick={submitRecipe} >Submit</button> */}
    </div>
  );
}


export default connect(state => state.newRecipe, dispatchers)(Step5);
