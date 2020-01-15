import React from 'react';

const Ingredient = ({ ingredient }) => { 
  return (
    <div>
    <p>{ingredient.quantity} {ingredient.name}</p>
    <p></p>
    <p>{ingredient.units}</p>
    {/* <p 
    // onClick={onEdit()}
    >E</p>
    <p 
    // onClick={onDelete()}
    >X</p> */}
    <p 
    // onClick={onDelete()}
    >new</p>

  </div>
)
}

export default Ingredient;