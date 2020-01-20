import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "../../../actions/actionCreators"

import DropDown from "../../dropDown/DropDown";


const getAllIngredientsUrl = "http://localhost:3333/api/ingredient";
const getAlUnitsUrl = "http://localhost:3333/api/unit";

function Step3(props) {
  const { goForward, addRecipeIngredientsToBody } = props;

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
  };

  const addIngredient = e => {
    e.preventDefault();
    setIngredientsArray([...ingredientsArray, cleanState]);
    setIngredientsDisplayArray([...ingredientsDisplayArray, inputState]);
  };

  return (
    <form onSubmit={onSubmit}>
      <button type="submit"> Next </button><br></br>
      <input type="number" name="quantity" onChange={inputHandler} />
      <DropDown
        listUrl={getAlUnitsUrl}
        name="unit_id"
        inputHandler={inputHandler}
      />
      <DropDown
        listUrl={getAllIngredientsUrl}
        name="ingredient_id"
        inputHandler={inputHandler}
      />
      <br></br>
      <button onClick={addIngredient} type="button">
        Add
      </button>

      <ul>
        {ingredientsArray.length
          ? ingredientsDisplayArray.map((ing, i) => (
              <li key={i}>
                {ing.quantity} {ing.unit_name} of {ing.ingredient_name}
              </li>
            ))
          : null}
      </ul>
    </form>
  );
}

export default connect(state => state, dispatchers)(Step3);

