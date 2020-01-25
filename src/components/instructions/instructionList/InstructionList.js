import React from "react";
import { SeeRecipePopup } from "./InstructionList.styles";

export default function IngredientList({ instructions, close }) {
  return (
    <SeeRecipePopup>
      <button onClick={close} className="cancel-button">
        x
      </button>
      <h1>Instructions</h1>
      {instructions.map((item, id) => (
<h2 key={`${id}`}><span>{`Step ${item.step}:`}</span>{` ${item.text}`}</h2>  
      ))}
    </SeeRecipePopup>
  );
}
