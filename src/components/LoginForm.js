import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { login } from '../actions/index';
import "../index.css";
import logo from "../globals/design-elements/logo.png";

import {
  MainDiv,
  Logo,
  FooterDiv,
  H1,
  DescriptionForm,
  LinkFooter
} from "../globals/form-styles";

const loginApi = 'https://develop-forkbook.herokuapp.com/api/auth/login'

function FormTemplate({ touched, errors }) {
  return (
    <MainDiv>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <H1> Login</H1>
      <DescriptionForm>
        {" "}
        Create a profile, follow your favorites cooks, save delicious recipes
        and more{" "}
      </DescriptionForm>

      <Form className="formik-form">
        <div>
          {touched.username && errors.username}
          <Field
            type="text"
            name="username"
            class="input"
            placeholder="Username"
          />
        </div>
        <div className="spaced-div">
          {touched.password && errors.password}
          <Field
            type="password"
            name="password"
            class="input"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="register-button">
          Login
        </button>
      </Form>
      <FooterDiv>
        <p>
          Don't have an account?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            <LinkFooter> Register</LinkFooter>
          </Link>{" "}
        </p>
      </FooterDiv>
    </MainDiv>
  );
}
const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  // Validation //
  validationSchema: Yup.object().shape({
    username: Yup.string().required(
      "Username is required to have acess to the kitchen"
    ),
    password: Yup.string()
      .min(
        6,
        "A safe kitchen should be protected by a 6 characters password. Try again."
      )
      .required("A password is required to have access to the kitchen")
  }),

  handleSubmit(values, {props} ) {
    props.login(values, props.history)
  }
})(FormTemplate);

export default connect(
  state => state, { login }
) (FormikLoginForm)
