import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'; 

function LoginForm(){
    return (
        <Form>
            <Field type='text' name='username' placeholder='Username' />
            <Field type='password' name='password' placeholder='Password' />
            <button> Log In </button>
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

handleSubmit(values){
    console.log(values);
}
}) (LoginForm)



export default FormikLoginForm;