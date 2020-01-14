import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/index'

const Instruction = ({ instruction }) => { 
  return (
    <div>
    <p>{instruction}</p>
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