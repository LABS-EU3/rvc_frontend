import React from "react";
import { SeeRecipePopup } from "../../globals/form-styles";

export default function IngredientList({ instructions, close }) {
  return (
    <SeeRecipePopup>
      <button onClick={close} className="cancel-button">
        x
      </button>
      <h1>Instructions</h1>
      {instructions.map((item, id) => (
        <h2 key={`${id}`}>{item.text}</h2>
      ))}
    </SeeRecipePopup>
  );
}
