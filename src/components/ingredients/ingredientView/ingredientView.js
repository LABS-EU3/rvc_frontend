import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/index'
import Ingredient from './Ingredient'


const IngredientView = ({ getIngredients, ingredientView, ingredients }) => { 

 useEffect(() => { getIngredients();
 }, [getIngredients]);
 
 return (
   <div>
    <div>
      {ingredientView.map(ingredient=>
      <Ingredient
      key={ingredient.id}
      ingredient={ingredient}
      />
      )}
    </div>
  </div>
)
};

export default connect(state => state.ingredients, actionCreators)(IngredientView)