import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'

const Ingredient = ({ ingredient }) => { 
// const { ingredient } = ingredient
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

// export default connect(state => state, actionCreators)(Ingredient)