import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { createRecipe } from '../actions/index'
import "../index.css";
import Footer from './Footer'
import foodplaceholder from '../images/foodplaceholder.png'
function FormTemplate( { touched, errors, values }) {
  return (
    <>
    {/* step6A */}
    <Form>
      <div className='section1'>
        <button className='return'>
          <img className='back-arrow' src='' alt='back arrow'/>
        </button>
        <button type='submit' className='submit-recipe'>
          <img className='submit-recipe' src='' alt='submit recipe'/>
        </button>
        <div className='recipe'>
          {touched.recipe && errors.recipe}
          <Field
          type='text'
          name='recipe'
          placeholder='enter recipe name'
          />
          </div>
      </div>

      <div className='section2'>
        {touched.category && errors.category}
        <label>Category:</label>
        <select
        name='category'
        value={values.category}
        >
          <option value='' label='pick a category'/>
          <option value='breakfast' label='breakfast'/>
          <option value='lunch' label='lunch'/>
          <option value='dinner' label='dinner'/>
        </select>
      </div>

      <div className='section3'>
        {touched.tag && errors.tag}
        <label>
          Options:
          <input
          type='radio'
          name='options'
          value='Private'
          checked={values.options === 'Private'}
          />
          Private
        </label>
        <p>The private option hides your recipe from other users</p>
        <p>Add Tags</p>
        <Field
          type='text'
          name='tag'
          placeholder='Add as many tags as you want to easily find your recipe'
          />
        <div className='step'>
          Step 1/3
          <div className='slider-step1'>oooo</div>
        </div>
      </div>
    </Form>
    
    {/* step6B */}
    <Form>
      <div className='section1B'>
      <button className='return back-arrow'>
          <img src=''alt=''/>  
      </button>
      <h2>
        {/* {recipe_name} */}
        Recipe Name
      </h2>
      </div>

      <div className='section1C'>
        {touched.recipePhoto && errors.recipePhoto}
        <Field
          type='text'
          name='recipe'
          placeholder="add a photo of your 'recipe name' "
          />
        <button>
          <img src={foodplaceholder} alt='recipe photo'/>
        </button>
        <div>
          Skip>>
        </div>
      </div>
    </Form>
    <Footer/>
    </>
  )
}

const FormikCreateRecipeForm = withFormik({ 
  mapPropsToValues({ recipe, category, tag
  }) {
    return { 
      recipe : recipe || '',
      category : category || '',
      tag : tag || ''
    };
  },

  validationSchema : Yup.object().shape({
    recipe : Yup.string().required(
      'please enter a recipe name'
    ),
    category : Yup.string().required(
      'please select a category'
    ),
    tag : Yup.string().required('please add a tag ')
  }),

  handleSubmit(values, {props}) { 
    props.createRecipe(values, props.history)
  }
})(FormTemplate);

export default connect(
  state => state, { createRecipe }
)(FormikCreateRecipeForm);