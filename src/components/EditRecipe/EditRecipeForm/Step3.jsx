import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"

import DropDown from "../../dropDown/DropDown";

import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';

import { Link } from "react-router-dom";
import { TextField, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import {
  NavigationSection1,
  Addtitle,
  Section2b,
  IngredientsDiv,
  IngredientsMainDiv,
  Title2,
  Section3,
  Section1,
  AddItem
} from "../EditRecipe.styles";

const getAllIngredientsUrl =  `${process.env.REACT_APP_API_BASE_URL}api/ingredient`;
const getAlUnitsUrl =  `${process.env.REACT_APP_API_BASE_URL}api/unit`;

function Step3(props) {
  const { goForward, addRecipeIngredientsToBody,
  editIngredient,
  displayNotificationModal,
  match
 } = props;
 const recipeID = match.params.id.trim();

  const [inputState, setInputState] = useState({
    unit_id: "",
    unit_name: "",
    quantity: "",
    ingredient_id: "",
    ingredient_name: ""
  });

  const [cleanState, setCleanState] = useState({
    unit_id: "",
    quantity: "",
    ingredient_id: "",
  });

  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [ingredientsDisplayArray, setIngredientsDisplayArray] = useState([]);


  const inputHandler = e => {
    e.preventDefault();
    setCleanState({ ...cleanState, [e.target.name]: e.target.value })

    if(e.target.name === "quantity"){
      setInputState({ ...inputState, [e.target.name]: e.target.value });
    }
    if (e.target.name === "unit_id") {
      const unitName = e.target.options[e.target.value].text;
      setInputState({ ...inputState, unit_name: unitName });
    }

    if (e.target.name === "ingredient_id") {
      const ingredientName = e.target.options[e.target.value].text;
      setInputState({ ...inputState, ingredient_name: ingredientName });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    addRecipeIngredientsToBody(ingredientsArray)
    goForward(e);
    displayNotificationModal('The edited recipe has been added to your cookbook!', '/seerecipe/:id');

  };

  const addIngredient = e => {
    e.preventDefault();
    setIngredientsArray([...ingredientsArray, cleanState]);
    setIngredientsDisplayArray([...ingredientsDisplayArray, inputState]);
  };

  return (
    <form onSubmit={onSubmit}>
      <Section3>
      <NavigationSection1>
         <Link to='/editrecipe'>
           <Fab 
            style={{background: "none", "box-shadow": "none", "outline": 'none'}}
            >
              <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
            </Fab>
          </Link>
        <button type='submit' style={{"border":"none", "background": "inherit", "outline":"none"}}>
          <Fab 
          style={{background: "none", "box-shadow": "none", "outline": 'none'}}
          >
            <CheckIcon cgit style={{ fontSize: 40, color: 'white', background:'transparent' }} />
          </Fab>
      </button>
     </NavigationSection1>
     <Addtitle>
        <h1>Modify ingredient</h1>
        </Addtitle>
   </Section3>
   <Section2b>
     <IngredientsDiv>
      <input type="number" name="quantity" onChange={inputHandler} />
     </IngredientsDiv>
     <IngredientsDiv>
      <DropDown
        listUrl={getAlUnitsUrl}
        name="unit_id"
        inputHandler={inputHandler}
        />
     </IngredientsDiv>

     <IngredientsDiv>
      <DropDown
        listUrl={getAllIngredientsUrl}
        name="ingredient_id"
        inputHandler={inputHandler}
        />
     </IngredientsDiv>
      <br></br>
      <div
        onClick={addIngredient}
        style={{"margin" : "0 auto"}}
        >
        <AddCircleOutlineTwoToneIcon cgit style={{ fontSize: 40, color: '#0AB38A' }} />
        </div>
      <div>
        {ingredientsArray.length
          ? ingredientsDisplayArray.map((ing, i) => (
            <AddItem>
              <p key={i}>
                {ing.quantity} {ing.unit_name} of {ing.ingredient_name}
              </p>
            </AddItem>
            ))
            : null}
      </div>
    </Section2b>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step3);
