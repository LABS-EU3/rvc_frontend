import React from 'react';
import { withFormik } from 'formik';
import FormTemplate from './Form';
import * as Yup from 'yup'; 


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
    .username("Username is not valid, chef. Try again.")
    .required("Username is required to have acess to the kitchen"),
    password: Yup.string()
    .min(6, "A safe kitchen should be protected by a 6 characters password. Try again.")
    .required("A password is required to have access to the kitchen")  
}),


handleSubmit(values){
    console.log(values);
}
}) (FormTemplate)



export default FormikLoginForm;