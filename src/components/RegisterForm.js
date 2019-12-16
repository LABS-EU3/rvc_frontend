import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { withFormik, Form, Field, Formik } from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';
function FormTemplate ({ touched, errors }){
    return (
        <Form>
          <div>
            {touched.email && errors.email }
            <Field type='email' name='email' placeholder='email' />
          </div>
          <div>
            {touched.username && errors.username }
            <Field type="text" name="username" placeholder="Username" />
          </div>
          <div>
            {touched.password && errors.password }
            <Field type='password' name='password' placeholder='Password' />
          </div>
          <button>Register</button>
          <p>Already have an account? <Link to='/login'>Log in</Link></p>
        </Form>
    );
}
const FormikRegisterForm = withFormik({
mapPropsToValues ({ email, username, password }) {
    return {
        email: email || '',
        username: username || '',
        password: password || ''
    };
},
// Validation //
validationSchema: Yup.object().shape({
    email: Yup.string()
    .email("An email is required")
    .required("Please, add an email"),
    username: Yup.string()
    .required("Username is required to have acess to the kitchen"),
    password: Yup.string()
    .min(6, "A safe kitchen should be protected by a 6 characters password. Try again.")
    .required("A password is required to have access to the kitchen")  
}),
handleSubmit(values){
  const { email, username, password } = values;
  axios
  .post('https://babaloki.herokuapp.com/api/users/register', { email, username, password })
  .then(res => { 
    console.log(res.data)
  })
  .catch(error => { 
    console.log(error.message)
  })
}
}) (FormTemplate)
export default FormikRegisterForm;