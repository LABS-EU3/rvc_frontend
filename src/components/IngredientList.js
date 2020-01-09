import React from "react";
import { SeeRecipePopup } from "../globals/form-styles";


export default function IngredientList () {
  return (
    <SeeRecipePopup>
      <button className="cancel-button">+</button>
      <h1>Ingredients</h1>
      <h2> 6 Tomatoes </h2>
      <h2> 1 chicken </h2>
      <h2> 4 oignon </h2>
      <h2> 1/4 rice </h2>
      <h2> salt </h2>
      <h2> pepper </h2>

   </SeeRecipePopup>
  );
}

