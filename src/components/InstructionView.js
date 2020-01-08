import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import FormikInstructionForm from './InstructionForm'
import Instruction from './Instruction'

const InstructionView = ({ getIngredients, ingredientView, ingredients }) => {
  useEffect(() => { getIngredients();}, [getIngredients])
  
  return(
    <div>
      <FormikInstructionForm/>
      <div>
      {ingredientView.map(ingredient=>
      <Instruction
      key={ingredient.id}
      ingredient={ingredient}
      />
      )}
    </div>
    </div>
  )
};

export default connect(state => state.ingredients, actionCreators)(InstructionView)