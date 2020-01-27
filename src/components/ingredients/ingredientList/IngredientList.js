import React from "react";
import { SeeRecipePopup } from "./IngredientList.styles";
import ClearIcon from "@material-ui/icons/Clear";

export default function IngredientList({ ingredients, close }) {
  return (
    <SeeRecipePopup>
      <ClearIcon className="clear-icon" onClick={close} />
      <h1>Ingredients</h1>
      {/* <h2> 6 Tomatoes </h2> */}
      {ingredients.map((item, id) => (
        <h2 key={`${id}`}>{`${item.quantity} ${
          item.unit.length < 10 ? item.unit + " of" : ""
        } ${item.name}`}</h2>
      ))}
    </SeeRecipePopup>
  );
}
