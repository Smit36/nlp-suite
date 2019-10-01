import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { Typography, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "../Navbar/Navbar";
import "./Login.css";

import { signin } from "../../controllers/signin";
import Navbar from "../Navbar/Navbar";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessageEmail: "",
      errorMessagePassword: "",
      redirect: false
    };
  }

  handleChangeEmail = e => {
    const value = e.target.value;
    let error = "";
    if (!value) {
      error = "This field is required.";
    } else if (!emailRegex.test(value)) {
      error = "Invalid Email.";
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
    }
    this.setState({
      errorMessagePassword: error
    });
  };

  handleFieldChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  isDisabled = () => {
    const { email, password } = this.state;
    if (!emailRegex.test(email)) {
      return true;
    } else if (!password) {
      return true;
    }
    return false;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isWrong = this.isDisabled();

    if (!isWrong) {
      const data = { email: this.state.email, password: this.state.password };
      signin(data).then(res => {
        if (!res.error) {
          localStorage.setItem("jwt", res.access_token);
          this.setState({ redirect: true });
        } else {
          if (res.errorType === "email") {
            this.setState({ errorMessageEmail: res.errorMessage });
          } else if (res.errorType === "password") {
            this.setState({ errorMessagePassword: res.errorMessage });
          } else {
            alert("Interal Server error.");
          }
        }
      });
    }
  };

  render() {
    const isDisabled = this.isDisabled();

    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="Signin">
        <Navbar Login/>
        <div className="Signup-Container">
          <div className="Avatar">
            <LockOutlinedIcon />
          </div>
          <div className="Signin-Header">
            <Typography variant="h5">Sign in</Typography>
          </div>
          <div className="Signin-Form-Container">
            <form noValidate onSubmit={this.handleSubmit}>
              <div className="Signin-Email">
                <TextField
                  label="Email *"
                  margin="dense"
                  name="email"
                  variant="outlined"
                  error={this.state.errorMessageEmail ? true : false}
                  helperText={this.state.errorMessageEmail}
                  onBlur={this.handleChangeEmail}
                  onChange={this.handleFieldChange}
                />
              </div>

              <div className="Signin-Password">
                <TextField
                  label="Password *"
                  name="password"
                  type="password"
                  margin="dense"
                  variant="outlined"
                  error={this.state.errorMessagePassword ? true : false}
                  helperText={this.state.errorMessagePassword}
                  onBlur={this.handleChangePassword}
                  onChange={this.handleFieldChange}
                />
              </div>

              <div className="Signin-Button">
                <Button
                  variant="contained"
                  type="submit"
                  size="medium"
                  color="primary"
                  disabled={isDisabled}
                >
                  Submit
                </Button>
              </div>

              <div>
                <Typography
                  color="primary"
                  className="Signin-Forget"
                  variant="body2"
                >
                  Forget password?
                </Typography>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
