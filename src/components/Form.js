import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup'; 

function Form(){
    return (
        <Form>
            <Field type='text' name='username' placeholder='Username' />
            <Field type='password' name='password' placeholder='Password' />
            <Field type='email' name='email' placeholder='email' />
             <button> Add text </button>
        </Form>
    );
}


export default Form;