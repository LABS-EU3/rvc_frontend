import React from "react";
import { SeeRecipePopup } from "./InstructionList.styles";
import ClearIcon from "@material-ui/icons/Clear";

export default function IngredientList({ instructions, close }) {
  return (
    <SeeRecipePopup>
      <ClearIcon className="clear-icon" onClick={close} />
      <h1>Instructions</h1>
      {instructions.map((item, id) => (
<h2 key={`${id}`}><span>{`Step ${item.step}:`}</span>{` ${item.text}`}</h2>  
      ))}
    </SeeRecipePopup>
  );
}
