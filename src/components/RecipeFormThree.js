import React from "react";
import Footer from "./Footer";
import CheckIcon from '@material-ui/icons/Check';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import { TextField, Select, MenuItem } from '@material-ui/core';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import {
  ProgressBarDiv,
  Section1,
  NavigationSection1,
  Addtitle,
  Title,
  Title2,
  Section2b,
  Section2,
  AddItem
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
      <Section2>
        <Title2> Add ingredients </Title2>
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Add ingredient"
          helperText="click on the plus button to add your ingredient!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={onHandleIngredientInput}
          type="text"
          name="name"
          value={ingredient.name}
        />
        {/* <input
          onChange={onHandleIngredientInput}
          type="text"
          name="name"
          value={ingredient.name}
          /> */}
        <button
        onClick={onAddIngredient}
        >
          <AddCircleOutlineTwoToneIcon cgit style={{ fontSize: 40, color: '#0AB38A' }} />
        </button>
      </Section2>
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
      <Section2>
        {
          ingredients.map(item =>(
          <AddItem>
              <p>{item.quantity} {item.unit} {item.name} </p>
          </AddItem>
              
          ))
        }
      </Section2>
      <Footer/>
    </div>
  )
}
