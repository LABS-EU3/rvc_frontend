import React from 'react';
import { Form, Field } from 'formik';

function FormTemplate (){
    return (
        <Form>
            <Field type='email' name='email' placeholder='email' />
            <Field type='text' name='username' placeholder='Username' />
            <Field type='password' name='password' placeholder='Password' />
             <button> Add text </button>
        </Form>
    );
}


export default FormTemplate;