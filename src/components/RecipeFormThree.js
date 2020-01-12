import React from "react";
import { withFormik, Field, Form } from 'formik'
import * as Yup from 'yup'
import back from "../globals/design-elements/back.png";
import check from "../globals/design-elements/check.png";
import Footer from "./Footer";

export default function RecipeFormThree (props) { 
  const { touched, errors, values, step ,prevPage, nextPage, onHandleSubmit } = props

  return ( 
    <Form>
      <div className="section1B">
      <div className="recipe-nav">
        <div
          className="back-arrow-container"
          onClick={prevPage}
        >
          <img className="back-arrow" src={back} alt="back arrow" />
        </div>
        <div
          onSubmit={onHandleSubmit}
          onClick={nextPage}
          className="submit-recipe-container"
        >
          <img className="submit-recipe" src={check} alt="submit recipe" />
        </div>
      </div>

      </div>
      <div className="section1C wanderlust-form">

      <div>
      { touched.ingredient && errors.ingredient}
      <Field
        type='text'
        name='ingredient'
        placeholder='add ingredient...'
        />
    </div>
    <button type='submit'>
      +
    </button>

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


        <div className="progress-bar-container">
          <div
            style={{
              backgroundColor: "#0AB28A",
              height: "10px",
              width: "60%",
              borderRadius: "5px"
            }}
          ></div>
        </div>
      </div>
    </Form>

  )
}