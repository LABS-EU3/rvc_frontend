import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { withFormik, Form, Field, Formik } from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';
import '../index.css';
import logo from '../globals/design-elements/logo.png';

import { MainDiv, ButtonForm, Logo, FooterDiv, H1, DescriptionForm, ButtonDiv, LinkFooter} from '../globals/form-styles';

function FormTemplate ({ touched, errors }){
    return (
      <MainDiv>
            <Logo>
              <img src={logo} alt="Logo" />
            </Logo>
            <H1> Registration</H1>
            <DescriptionForm> Create a profil, follow your favorites cooks, save delicious recipes and more </DescriptionForm>

        <Form>
          <div>
            {touched.username && errors.username }
            <Field type="text" name="username" class='input' placeholder="Username" />
          </div>
          <div>
            {touched.password && errors.password }
            <Field type='password' name='password' class='input' placeholder='Password' />
          </div>
          <ButtonDiv>
           <ButtonForm>Sign in</ButtonForm>
          </ButtonDiv>
        </Form>
          <FooterDiv>
          <p>Don't have an account? </p>
          <Link to='/register'>
          <LinkFooter> Register</LinkFooter>
          </Link> 
          </FooterDiv>
        </MainDiv>
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