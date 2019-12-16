import React from 'react';
import { withFormik, Form, Field } from 'formik';
// import FormTemplate from './Form';
import * as Yup from 'yup'; 

function FormTemplate (){
    return (
        <Form>
            <Field type="text" name="username" placeholder="Username" />
            <Field type='password' name='password' placeholder='Password' />
            {/* <Field type='email' name='email' placeholder='email' /> */}
             <button> Add text </button>
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
    console.log(values);
    const { username, password } = values
}


}) (FormTemplate)



export default FormikLoginForm;