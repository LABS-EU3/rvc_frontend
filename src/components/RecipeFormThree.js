import React from "react";
import styles from "styled-components";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from "./Footer";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import {
  ProgressBarDiv,
  Section1,
  NavigationSection1,
  Addtitle,
  Title,
  Section2b,
  Step,
  ExportImg
} from "../globals/form-styles";


export default function RecipeFormThree(props) {
  const { history, step, title, prevPage, nextPage, onHandleChange, onHandleSubmit, onHandleIngredientInput, onAddIngredient, ingredients, ingredient } = props;

  return (
    <div>
      <form
      onSubmit={onHandleSubmit}
      >
   <Section1>
      <NavigationSection1>
        <div
          onClick={prevPage}
          >
          <ArrowBackIcon cgit style={{ fontSize: 40, color: 'white' }} />
        </div>
        <button
        type='submit'
          >
          <CheckIcon cgit style={{ fontSize: 40, color: 'white' }} />
        </button>
      </NavigationSection1>
      <Addtitle>
        <h1>{title}</h1>
        </Addtitle>
      </Section1>
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
      <Footer/>
    </div>
  )
}
