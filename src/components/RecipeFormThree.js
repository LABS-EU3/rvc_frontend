import React from "react";
import styles from "styled-components";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from "./Footer";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function RecipeFormThree(props) {
  const { history, step, prevPage, nextPage, onHandleChange, onHandleSubmit, onHandleIngredientInput, onAddIngredient, ingredients, ingredient } = props;
  const progressBarWidth = (step-1) * 100/4;
  return (
    <div>
      <form
      onSubmit={onHandleSubmit}
      >
         <div className="recipe-nav">
        <div
          className="back-arrow-container"
          onClick={prevPage}
        >
          <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
        </div>
        <button
          type='submit'
          className="submit-recipe-container"
        >
           <CheckIcon cgit style={{ fontSize: 40, color: 'white' }} />
        </button>
      </div>

        <h2>Recipe Name. Step is {step}</h2>
      <div className="ingredient-input">
        <input
          onChange={onHandleIngredientInput}
          type="text"
          name="name"
          value={ingredient.name}
          placeholder="add ingredient"
        />
        <button
        onClick={onAddIngredient}
        >
          +
        </button>
      </div>
      <div className="progress-bar-container">
          <div
            style={{
              backgroundColor: "#0AB28A",
              height: "10px",
              width: progressBarWidth+"%",
              borderRadius: "5px"
            }}
          ></div>
        </div>

      {/* <div className="section2">
          <label htmlFor="ingredientQuantityInput"></label>
          <input
          onChange={onHandleIngredientInput}
          type="number"
          name="quantity"
          value={ingredient.quantity}

          min="1"
          max="1000"
          placeholder="add quantity"
        />
      </div> */}

      {/* <div className="section2">
          <label htmlFor="ingredientUnitsInput"></label>
          <select
            id="ingredientUnitsInput"
            onChange={onHandleIngredientInput}
            name="unit"
          >
            <option value="" label="Units" />
            <option value="kg" label="kg" />
            <option value="gram" label="gram" />
          </select>
      </div> */}
      </form>
      <div>
        {
          ingredients.map(item =>(
          <p>{item.quantity} {item.unit} of {item.name} </p>
          ))
        }
      </div>
    </div>
  )
}
