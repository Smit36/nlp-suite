import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import "./SignUp.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessageEmail: "",
      errorMessagePassword: "",
      errorMessageFirstName: "",
      errorMessageLastName: "",
      errorMessageConfirmPassword: "",
      matchPassword:"",
      checkErrorEmail: false,
      checkErrorPassword: false,
      checkErrorFirstName: false,
      checkErrorLastName: false,
      checkErrorConfirmPassword: false
    };
  }

  handleSubmit = e => {};
  handleChangeFirstName = e => {
    const value = e.target.value;
    console.log(value);
    if (value.length<3) {
      this.setState({
        checkErrorFirstName: true,
        errorMessageFirstName: "Firstname must be there"
      });
    } else {
      this.setState({
        checkErrorFirstName: false,
        errorMessageFirstName: ''
      });
    }
  };
  handleChangeLastName = e => {
    const value = e.target.value;
    console.log(value);
    if (value.length < 3) {
      this.setState({
        checkErrorLastName: true,
        errorMessageLastName: "Lastname must be there"
      });
    } else {
      this.setState({
        checkErrorLastName: false,
        errorMessageLastName: ""
      });
    }
  };
  
  handleChangeEmail = e => {
    const value = e.target.value;
    console.log(value);
    if (!emailRegex.test(value)) {
      this.setState({
        checkErrorEmail: true,
        errorMessageEmail: "Valid Email is required"
      });
    } else {
      this.setState({
        checkErrorEmail: false,
        errorMessageEmail: ""
      });
    }
  };
  handleChangePassword = e => {
    const value = e.target.value;
    console.log(value);
    
    if (value.length < 3) {
      this.setState({
        checkErrorPassword: true,
        errorMessagePassword: "Password length must be more than 3",       
      });
    } else {
      this.setState({
        checkErrorPassword: false,
        errorMessagePassword: "",
        matchPassword:value
      });
    }
  };
  handleChangeConfirmPassword = e => {
    const value = e.target.value;
    console.log(value);
    if (value!==this.state.matchPassword) {
      this.setState({
        checkErrorConfirmPassword: true,
        errorMessageConfirmPassword: "Both the passwords must match"
      });
    } else {
      this.setState({
        checkErrorConfirmPassword: false,
        errorMessageConfirmPassword: ""
      });
    }
  };
  render() {
    return this.state.redirect ? (
      <Redirect to="/signin" />
    ) : (
      <div className="Signup">
        <div className="Signup-Page">
          <div className="Avatar">
            <LockOutlinedIcon />
          </div>
          <div className="Sign-Header">
            <Typography variant="h5">Sign up</Typography>
          </div>
          <div>
            <form
              className="Signup-Form"
              onSubmit={this.handleSubmit}
              noValidate
            >
              <div>
                <div className="Name">
                  <div className="Firstname">
                    <TextField
                      id="error"
                      label="Firstname"
                      name="firstname"
                      margin="dense"
                      variant="outlined"
                      required
                      error={this.state.checkErrorFirstName}
                      helperText={this.state.errorMessageFirstName}
                      onBlur={this.handleChangeFirstName}
                    />
                  </div>

                  <div className="Lastname">
                    <TextField
                      id="outlined-dense"
                      label="Lastname"
                      name="lastname"
                      margin="dense"
                      variant="outlined"
                      required
                      error={this.state.checkErrorLastName}
                      helperText={this.state.errorMessageLastName}
                      onBlur={this.handleChangeLastName}
                    />
                  </div>
                </div>
                <div className="Email">
                  <TextField
                    id="outlined-dense"
                    label="Email Id"
                    type="email"
                    name="email"
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    required
                    noValidate
                    error={this.state.checkErrorEmail}
                    helperText={this.state.errorMessageEmail}
                    onBlur={this.handleChangeEmail}
                  />
                </div>
                <div className="Password">
                  <TextField
                    id="outlined-dense"
                    label="Password"
                    type="password"
                    name="password"
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    required
                    error={this.state.checkErrorPassword}
                    helperText={this.state.errorMessagePassword}
                    onBlur={this.handleChangePassword}
                  />
                </div>
                <div className="Confirm-Password">
                  <TextField
                    id="outlined-dense"
                    label="Confirm Password"
                    name="confirm_password"
                    margin="dense"
                    variant="outlined"
                    fullWidth={true}
                    required
                    noValidate
                    error={this.state.checkErrorConfirmPassword}
                    helperText={this.state.errorMessageConfirmPassword}
                    onBlur={this.handleChangeConfirmPassword}
                  />
                </div>
                <div className="Signup-Button">
                  <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    className="sign-button-inside"
                  >
                    Continue
                  </Button>
                </div>
                <Typography
                  color="primary"                  
                  variant="body1"
                >
                  <Link to="./signin" className="Signup-Forget">Already have an account? Sign in</Link>
                </Typography>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
