import React from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";

import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DropDown from "../../dropDown/DropDown";
import { Link } from "react-router-dom";
import { TextField, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Section1,
  NavigationSection1,
  Addtitle,
  Section2,
  Title,
  SwitchDiv
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
          <ArrowBackIcon className="back-arrow" onClick={goBack} cgit />
          <CheckIcon className="check-icon" cgit onClick={submitRecipe} />
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

function mapStateToProps(state) {}

export default connect(state => state.newRecipe, dispatchers)(Step5);
