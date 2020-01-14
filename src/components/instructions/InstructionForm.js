import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/index'
import { withFormik, Field, Form } from 'formik'
import * as Yup from 'yup'
import Footer from './Footer'
function FormTemplate ({ touched, errors, values })  { 
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
      { touched.instruction && errors.instruction}
      <Field
        type='text'
        name='instruction'
        placeholder='add instruction...'
        />
    </div>

    <button type='submit'>
      +
    </button>
    <div className='step'>
      Step 3/3
      <div className='slider-step3'>oooo</div>
    </div>
    
  </Form>
  <Footer/>
  </>
  )
}

const FormikInstructionForm = withFormik({
  mapPropsToValues({ instruction })
   {
    return { 
      instruction : instruction || ''
    }; 
  },
  validationSchema : Yup.object().shape({
    instruction : Yup.string().required('please tell us how do it')
  }),
  handleSubmit(values, {props, resetForm}) { 
    const newInstruction = { 
      instruction : values.instruction
    }
    props.addIngredient(newInstruction);
    resetForm()
  }
})(FormTemplate);

export default connect(
  state => state, actionCreators
) (FormikInstructionForm)