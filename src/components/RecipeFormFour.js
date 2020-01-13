import React from "react";
import styles from "styled-components";
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from "./Footer";

export default function RecipeFormFour (props) { 
  const { history, step, prevPage, nextPage, onHandleChange, onHandleSubmit, onHandleInstructionInput, onAddInstruction, instruction, instructions, onHandleFinalSubmit } = props;
  
  return ( 
    <div>
       <form
      onSubmit={onHandleFinalSubmit}

      >
         <div className="recipe-nav">
        <div
          className="back-arrow-container"
          onClick={prevPage}
        >
          <img className="back-arrow" src={back} alt="back arrow" />
        </div>
        <button
          type='submit'
          onClick={onHandleSubmit}
          className="submit-recipe-container"
        >
          <img className="submit-recipe" src={check} alt="submit recipe" />
        </button>
      </div>
      <h2>Recipe Name. Step is {step}</h2>
      <div className="instruction-input">
        <input
          onChange={onHandleInstructionInput}
          type="text"
          name="text"
          value={instruction.text}
          placeholder="add instruction"
        />
         <button
        onClick={onAddInstruction}
        >
          +
        </button>
      </div>
      </form>
      <div>
        {
          instructions.map(item =>(
          <p>{item.step}. {item.text}</p>
          ))
        }
      </div>
    </div>

  )
}