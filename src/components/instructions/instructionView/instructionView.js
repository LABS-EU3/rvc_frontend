import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/actionCreators';
import FormikInstructionForm from '../instructionForm/InstructionForm';
import Instruction from '../instruction/Instruction';

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