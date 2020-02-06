import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators";
import DropDown from "../../dropDown/DropDown";
import CheckIcon from "@material-ui/icons/Check";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Fab from "@material-ui/core/Fab";
import AddCircleOutlineTwoToneIcon from "@material-ui/icons/AddCircleOutlineTwoTone";
import {
  NavigationSection1,
  Addtitle,
  Section2b,
  IngredientsDiv,
  IngredientsDiv1,
  IngredientsWrapper,
  Section3,
  AddItem
} from "./FormStyled.styles";

function Step3(props) {
  const { goForward, goBackward, addRecipeIngredientsToBody } = props;
  const [ingredientsError, setIngredientsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputState, setInputState] = useState({
    unit_id: "",
    unit_name: "",
    quantity: "",
    ingredient_id: "",
    ingredient_name: ""
  });

  const getAllIngredientsUrl = `${process.env.REACT_APP_API_BASE_URL}api/ingredient`;
  const getAllUnitsUrl = `${process.env.REACT_APP_API_BASE_URL}api/unit`;

  const goBack = e => {
    goBackward();
  };

  const [cleanState, setCleanState] = useState({
    unit_id: "",
    quantity: "",
    ingredient_id: ""
  });

  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [ingredientsDisplayArray, setIngredientsDisplayArray] = useState([]);

  const inputHandler = e => {
    e.preventDefault();
    setCleanState({ ...cleanState, [e.target.name]: e.target.value });

    if (e.target.name === "quantity") {
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
    addRecipeIngredientsToBody(ingredientsArray);
    goForward(e);
  };

  const addIngredient = e => {
    e.preventDefault();
    setIngredientsArray([...ingredientsArray, cleanState]);
    if (
      inputState.unit_name &&
      inputState.quantity &&
      inputState.ingredient_name
    ) {
      setIngredientsDisplayArray([...ingredientsDisplayArray, inputState]);
    } else {
      let errorMsg = "";
      setIngredientsError(true);

      if (!inputState.unit_name) errorMsg = "Select a unit type!";
      if (!inputState.quantity) errorMsg = "Enter ingredient quantity!";
      if (!inputState.ingredient_name) errorMsg = "Select a ingredient name!";
      setErrorMessage(errorMsg);
      setTimeout(() => {
        setIngredientsError(false);
      }, 2000);
    }
  };

  const removeIngredients = (e, ing, i) => {
    e.preventDefault();
    setIngredientsDisplayArray(
      ingredientsDisplayArray.filter(ingredient => ingredient !== ing)
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <Section3>
        <NavigationSection1>
          <Fab
            style={{
              background: "none",
              "box-shadow": "none",
              outline: "none"
            }}
          >
            <ArrowBackIcon className="back-arrow" onClick={goBack} cgit />
          </Fab>
          <Fab
            style={{
              background: "none",
              "box-shadow": "none",
              outline: "none"
            }}
          >
          <button type="submit">
            <CheckIcon className="check-icon" />
          </button>
          </Fab>
        </NavigationSection1>
        <Addtitle>
          <h1>Add ingredient</h1>
        </Addtitle>
      </Section3>
      <Section2b>
        <IngredientsWrapper>
          <IngredientsDiv1>
            <input type="number" name="quantity" onChange={inputHandler} />
          </IngredientsDiv1>
          <IngredientsDiv>
            <DropDown
              className="dropdown"
              listUrl={getAllUnitsUrl}
              name="unit_id"
              name2="unit"
              inputHandler={inputHandler}
            />
          </IngredientsDiv>

          <IngredientsDiv>
            <DropDown
              listUrl={getAllIngredientsUrl}
              name="ingredient_id"
              name2="ingredient"
              inputHandler={inputHandler}
            />
          </IngredientsDiv>
        </IngredientsWrapper>
        <br></br>
        {ingredientsError && (
          <p className="warning-paragraph">{errorMessage}</p>
        )}
        <p className="description-paragraph">
          click on the plus button to add your ingredients!
        </p>
        <AddCircleOutlineTwoToneIcon
          // cgit
          style={{ margin: "0 auto", fontSize: 40, color: "#0AB38A" }}
          onClick={addIngredient}
        />
        <div>
          {ingredientsArray.length
            ? ingredientsDisplayArray.map((ing, i) => (
                <AddItem>
                  <p key={i}>
                    {ing.quantity}{" "}
                    {ing.unit_name === "No Unit" ? "" : ing.unit_name + " of"}{" "}
                    {ing.ingredient_name}
                  </p>
                  <button
                    onClick={e => {
                      removeIngredients(e, ing, i);
                    }}
                  >
                    X
                  </button>
                </AddItem>
              ))
            : null}
        </div>
      </Section2b>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step3);
