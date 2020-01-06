//step6A
import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "../index.css";
import Footer from '../components/Footer'

function FormTemplate( { touched, errors }) {
  return (
    <>
    <Form>
      <div className='section1'>
        <img className='back-arrow' src=''/>
        <button type='submit' className='submit-recipe'>
          <img className='submit-recipe' src=''/>
          {touched.username && errors.}
        </button>
      </div>
      <div>

      </div>
      <div>

      </div>
      <Footer/>
    </Form>
    </>
  )
}