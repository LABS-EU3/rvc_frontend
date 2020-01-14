import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/index'
import { withFormik, Field, Form } from 'formik'
import * as Yup from 'yup'

function FormTemplate ({ handleChange, touched, errors, values })  { 
  return (
    <>
      <div className='section1B'>
        <button className='return back-arrow'>
            <img src=''alt='back-arrow'/>  
        </button>
        <h2>
          {/* {recipe_name} */}
          Recipe Name
        </h2>
        <button type='submit' className='submit-recipe'>
          <img className='submit-recipe' src='' alt='submit recipe'/>
        </button>
      </div>
    <Form className='wanderlust-form'>
    <div>
      { touched.ingredient && errors.ingredient}
      <Field
        type='text'
        name='ingredient'
        placeholder='add ingredient...'
        />
    </div>
    <div>
      {touched.quantity && errors.quantity}
      <label>Qauntity</label>
        <select
        name='quantity'
        value={values.quantity}
        onChange={handleChange}
        >
          <option value='' label='Qauntity'/>
          <option value='10' label='10'/>
          <option value='20' label='20'/>
          <option value='40' label='40'/>
        </select>
    </div>

    <div>
      {touched.units && errors.units}
      {/* <label></label> */}
        <select
        name='units'
        value={values.units}
        onChange={handleChange}
        >
          <option value='' label='Units'/>
          <option value='10units' label='10units'/>
          <option value='20units' label='20units'/>
          <option value='40units' label='40units'/>
        </select>
    </div>
    <div className='step'>
      Step 2/3
      <div className='slider-step2'>oooo</div>
    </div>
    
    <button type='submit'>
      +
    </button>
  </Form>
  </>
  )
}

const FormikIngredientForm = withFormik({
  mapPropsToValues({ ingredient, quantity, units })
   {
    return { 
      ingredient : ingredient || '',
      quantity : quantity || '',
      units : units || ''
    }; 
  },
  validationSchema : Yup.object().shape({
    ingredient : Yup.string().required('chef! add at least one ingredient')
  }),
  handleSubmit(values, {props, resetForm}) { 
    const newIngredient = { 
      ingredient : values.ingredient,
      quantity : values.quantity,
      units : values.units
    }
    props.addIngredient(newIngredient);
    resetForm()
  }
})(FormTemplate);

export default connect(
  state => state, actionCreators
) (FormikIngredientForm)