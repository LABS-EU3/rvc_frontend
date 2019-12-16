import React from 'react';
import { withFormik } from 'formik';
import FormTemplate from './Form';
import * as Yup from 'yup'; 


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
    .username()
    .required("Username is required to have acess to the kitchen"),
    password: Yup.string()
    .min(6, "A safe kitchen should be protected by a 6 characters password. Try again.")
    .required("A password is required to have access to the kitchen")  
}),


handleSubmit(values){
    console.log(values);
}
}) (FormTemplate)



export default FormikRegisterForm;