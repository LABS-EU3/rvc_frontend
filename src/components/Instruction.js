import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'

const Instruction = ({ ingredient }) => { 
// const { ingredient } = ingredient
  return (
    <div>
    <p>{ingredient.ingredient}</p>
    <p>{ingredient.quantity}</p>
    <p>{ingredient.units}</p>
    <p 
    // onClick={onEdit()}
    >E</p>
    <p 
    // onClick={onDelete()}
    >X</p>

  </div>
)
}

export default Instruction;

// export default connect(state => state, actionCreators)(Ingredient)