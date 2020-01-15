import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/actionCreators';
import Ingredient from '../ingredient/Ingredient';


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