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
  AddItem,
  Step
} from "../globals/form-styles";


export default function RecipeFormThree(props) {
  const { history, step, prevPage, nextPage, title, onHandleChange, onHandleSubmit, onHandleIngredientInput, onAddIngredient, ingredients, ingredient } = props;
  const progressBarWidth = (step-1) * 100/4;
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
      {/* PREVIOUS CODE BLOCK */}
      {/* </div>

      <h2>{ title }. Step is {step}</h2>
      <div className="ingredient-input">
        <input */}
      {/* PREVIOUS CODE BLOCK END */}
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

      {/* PREVIOUS CODE BLOCK */}
      
      {/* </div>
      <div className="progress-bar-container">
          <div
            style={{
              backgroundColor: "#0AB28A",
              height: "10px",
              width: progressBarWidth+"%",
              borderRadius: "5px"
            }}
          ></div>
        </div> */}
      {/* PREVIOUS CODE BLOCK END*/}


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
            <option value="1" label="kg" />
            <option value="2" label="g" />
            <option value="3" label="ml" />
            <option value="4" label="cups" />
            <option value="5" label="tbsp" />
            <option value="6" label="tsp" />
            <option value="7" label="pinch" />
            <option value="8" label="knob" />
            <option value="9" label="cloves" />
            <option value="10" label="handfull" />         
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
        <Step >
          Step {step}/4
        <ProgressBarDiv>
          <div className="progress"></div>
        </ProgressBarDiv>
        </Step >
      </Section2>
      <Footer/>
    </div>
  )
}
