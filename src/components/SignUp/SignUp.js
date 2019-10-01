import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./SignUp.css";

import { signup } from "../../controllers/signup";
import Navbar from "../Navbar/Navbar";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);

const passwordRegex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,}$/);

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessageFirstName: "",
      errorMessageLastName: "",
      errorMessageEmail: "",
      errorMessagePassword: "",
      errorMessageConfirmPassword: ""
    };
  }

  handleChangeFirstName = e => {
    const value = e.target.value;
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else if (value.length < 3) {
      error = "Firstname should be at least 3 characters long.";
    } else {
      error = false;
    }
    this.setState({
      errorMessageFirstName: error
    });
  };

  handleChangeLastName = e => {
    const value = e.target.value;
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else if (value.length < 3) {
      error = "Lastname should be at least 3 characters long.";
    } else {
      error = "";
    }
    this.setState({
      errorMessageLastName: error
    });
  };

  handleChangeEmail = e => {
    const value = e.target.value;
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else if (!emailRegex.test(value)) {
      error = "Invalid Email.";
    } else {
      error = "";
    }
    this.setState({
      errorMessageEmail: error
    });
  };

  handleChangePassword = e => {
    const value = e.target.value;
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else if (!passwordRegex.test(value)) {
      error =
        "Password should contain: 6 characters, 1 uppercase letter and 1 special or numeric character.";
    } else {
      error = "";
    }
    this.setState({
      errorMessagePassword: error
    });
  };

  handleChangeConfirmPassword = e => {
    const value = e.target.value;
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else if (value !== this.state.password) {
      error = "Both passwords does not match";
    } else {
      error = "";
    }
    this.setState({
      errorMessageConfirmPassword: error
    });
  };

  handleFieldChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  checkDisabled = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;
    if (firstName.length < 3 || lastName.length < 3) {
      return true;
    } else if (!emailRegex.test(email)) {
      return true;
    } else if (
      !password ||
      !confirmPassword ||
      password !== confirmPassword ||
      !passwordRegex.test(password)
    ) {
      return true;
    }
    return false;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isWrong = this.checkDisabled();
    if (!isWrong) {
      const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
      } = this.state;
      let data = {
        fname: firstName,
        lname: lastName,
        email,
        password,
        cpassword: confirmPassword
      };
      signup(data).then(data => {
        if (!data.error) {
          this.setState({ redirect: true });
        } else {
          alert(data.errorMessage);
        }
      });
    } else {
      alert("Wrong form submission");
    }
  };

  render() {
    let isDisabled = this.checkDisabled();
    const {
      errorMessageFirstName,
      errorMessageLastName,
      errorMessageEmail,
      errorMessagePassword,
      errorMessageConfirmPassword
    } = this.state;

    return this.state.redirect ? (
      <Redirect to="/user/signin" />
    ) : (
      <div className="Signup">
        <Navbar />
        <div className="Signup-Container">
          <div className="Avatar">
            <LockOutlinedIcon />
          </div>
          <div className="Signup-Header">
            <Typography variant="h5">Sign up</Typography>
          </div>
          <div className="Form-Container">
            <form
              className="Signup-Form"
              onSubmit={this.handleSubmit}
              noValidate
            >
              <div className="Name">
                <div className="Firstname">
                  <TextField
                    label="Firstname"
                    name="firstName"
                    margin="dense"
                    variant="outlined"
                    error={errorMessageFirstName ? true : false}
                    helperText={errorMessageFirstName}
                    onBlur={this.handleChangeFirstName}
                    onChange={this.handleFieldChange}
                  />
                </div>

                <div className="Lastname">
                  <TextField
                    label="Lastname"
                    name="lastName"
                    margin="dense"
                    variant="outlined"
                    error={errorMessageLastName ? true : false}
                    helperText={errorMessageLastName}
                    onBlur={this.handleChangeLastName}
                    onChange={this.handleFieldChange}
                  />
                </div>
              </div>

              <div className="Email">
                <TextField
                  label="Email Id"
                  type="email"
                  name="email"
                  margin="dense"
                  variant="outlined"
                  fullWidth={true}
                  error={errorMessageEmail ? true : false}
                  helperText={errorMessageEmail}
                  onBlur={this.handleChangeEmail}
                  onChange={this.handleFieldChange}
                />
              </div>

              <div className="Password">
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  margin="dense"
                  variant="outlined"
                  fullWidth={true}
                  error={errorMessagePassword ? true : false}
                  helperText={errorMessagePassword}
                  onBlur={this.handleChangePassword}
                  onChange={this.handleFieldChange}
                />
              </div>

              <div className="Confirm-Password">
                <TextField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  margin="dense"
                  variant="outlined"
                  fullWidth={true}
                  error={errorMessageConfirmPassword ? true : false}
                  helperText={errorMessageConfirmPassword}
                  onBlur={this.handleChangeConfirmPassword}
                  onChange={this.handleFieldChange}
                />
              </div>

              <div className="Signup-Button">
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className="sign-button-inside"
                  type="submit"
                  disabled={isDisabled}
                >
                  Continue
                </Button>
              </div>

              <Typography color="primary" variant="body1">
                <Link to="./signin" className="Signup-Forget">
                  Already have an account? Sign in
                </Link>
              </Typography>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
