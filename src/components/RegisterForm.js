import React from "react";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import logo from "../globals/design-elements/logo.png";
import * as Yup from "yup";
import axios from "axios";
import "../index.css";

import {
  MainDiv,
  Logo,
  FooterDiv,
  H1,
  DescriptionForm,
  LinkFooter
} from "../globals/form-styles";

const registerApi = "https://develop-forkbook.herokuapp.com/api/auth/register";

function FormTemplate({ touched, errors }) {
  return (
    <MainDiv>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <H1> Register</H1>
      <DescriptionForm>
        {" "}
        Create a profile, follow your favorites cooks, save delicious recipes
        and more{" "}
      </DescriptionForm>

      <Form className="formik-form">
        <div>
          {touched.email && errors.email}
          <Field type="email" name="email" class="input" placeholder="Email" />
        </div>
        <div>
          {touched.username && errors.username}
          <Field
            type="text"
            name="username"
            class="input"
            placeholder="Username"
          />
        </div>
        <div>
          {touched.password && errors.password}
          <Field
            type="password"
            name="password"
            class="input"
            placeholder="Password"
          />
        </div>
        
          <button type="submit" className="register-button">
            Register
          </button>

        <FooterDiv>
          <p>
            Already have an account?
            <Link to="/login" style={{ textDecoration: "none" }}>
              {" "}
              <LinkFooter>Log in</LinkFooter>
            </Link>
          </p>
        </FooterDiv>
      </Form>
    </MainDiv>
  );
}
const FormikRegisterForm = withFormik({
  mapPropsToValues({ email, username, password }) {
    return {
      email: email || "",
      username: username || "",
      password: password || ""
    };
  },
  // Validation //
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("An email is required")
      .required("Please, add an email"),
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
  handleSubmit(values, {props}) {
    const { email, username, password } = values;
    axios
      .post(registerApi, { email, username, password })
      .then(res => {
        console.log(res.data);
        props.history.push('./recipe')
      })
      .catch(error => {
        console.log(error.message);
      });
  }
})(FormTemplate);
export default FormikRegisterForm;
