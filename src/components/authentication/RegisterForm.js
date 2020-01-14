import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { register } from "../../actions/index";
import logo from "../../globals/design-elements/logo.png";
import arrow from "../../images/left-arrow.png";
import "../../index.css";
import {
  MainDiv,
  ArrowDiv,
  Logo,
  FooterDiv,
  H1,
  DescriptionForm,
  LinkFooter
} from "../../globals/form-styles";

function FormTemplate({ touched, errors }) {
  return (
    <MainDiv>
      <ArrowDiv>
        <Link to='/'>
        {/* <Link to="/"> */}
          <img src={arrow} alt="arrow" />
        </Link>
      </ArrowDiv>
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
              {""}
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
      " Username is required to have acess to the kitchen"
    ),
    password: Yup.string()
      .min(
        6,
        "A safe kitchen should be protected by a 6 characters password. Try again."
      )
      .required("A password is required to have access to the kitchen")
  }),
  handleSubmit(values, { props }) {
    props.register(values, props.history);
  }
})(FormTemplate);

export default connect(state => state, { register })(FormikRegisterForm);
