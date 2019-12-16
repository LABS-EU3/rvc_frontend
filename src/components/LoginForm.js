import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { withFormik, Form, Field, Formik } from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';

function FormTemplate ({ touched, errors }){
    return (
        <Form>
          <div>
            {touched.username && errors.username && <p>errors.username}</p>}
            <Field type="text" name="username" placeholder="Username" />
          </div>
          <div>
            {touched.password && errors.password && <p>errors.password}</p>}
            <Field type='password' name='password' placeholder='Password' />
          </div>
          <button>Sign in</button>
          <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </Form>
    );
}
const FormikLoginForm = withFormik({
mapPropsToValues ({ username, password }) {
    return {
        username: username || '',
        password: password || ''
    };
},

// Validation //
validationSchema: Yup.object().shape({
    username: Yup.string()
    .required("Username is required to have acess to the kitchen"),
    password: Yup.string()
    .min(6, "A safe kitchen should be protected by a 6 characters password. Try again.")
    .required("A password is required to have access to the kitchen")  
}),

handleSubmit(values){
    const { username, password } = values;
    axios 
    .post('dummyApi', { username, password })
    .then(res => { 
      console.log(res.data)
    })
    .catch(error => { 
      console.log(error.message)
    })
}
}) (FormTemplate)
export default FormikLoginForm;