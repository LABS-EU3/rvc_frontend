import React from "react";
import { SeeRecipePopup } from "../globals/form-styles";


export default function IngredientList () {
  return (
    <SeeRecipePopup>
      <button className="cancel-button">+</button>
      <h1>Instructions</h1>
      <h2> Cup the tomatoes </h2>
      <h2> Add the 3 oignon </h2>
      <h2> Put it all in the pan </h2>
      <h2> add rice </h2>
      <h2> cook the chicken for 45min </h2>
   </SeeRecipePopup>
  );
}