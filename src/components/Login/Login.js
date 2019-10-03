import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography, TextField, Button, CircularProgress } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './Login.css';

import { signin } from '../../controllers/signin';
import { getProjects } from '../../controllers/projects';
import { userLogin } from '../../redux/actions/auth';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessageEmail: '',
      errorMessagePassword: '',
      redirect: false,
      validating: true,
      whiteLoader: false,
    };
  }

  handleChangeEmail = (e) => {
    const value = e.target.value;
    let error = '';
    if (!value) {
      error = 'This field is required.';
    } else if (!emailRegex.test(value)) {
      error = 'Invalid Email.';
    }
    this.setState({
      errorMessageEmail: error,
    });
  };

  handleChangePassword = (e) => {
    const value = e.target.value;
    let error = '';
    if (!value) {
      error = 'This field is required.';
    }
    this.setState({
      errorMessagePassword: error,
    });
  };

  handleFieldChange = (e) => {
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

  handleSubmit = (e) => {
    e.preventDefault();
    const isWrong = this.isDisabled();

    if (!isWrong) {
      const data = { email: this.state.email, password: this.state.password };
      this.setState({ validating: true, whiteLoader: true });
      signin(data).then((res) => {
        if (!res.error) {
          localStorage.setItem('jwt', res.access_token);
          this.setState({ redirect: true });
        } else {
          if (res.errorType === 'email') {
            this.setState({ errorMessageEmail: res.errorMessage });
          } else if (res.errorType === 'password') {
            this.setState({ errorMessagePassword: res.errorMessage });
          } else {
            alert('Interal Server error.');
          }
          this.setState({ validating: false, whiteLoader: false });
        }
      });
    }
  };

  componentDidMount() {
    const { auth } = this.props;
    if (auth) {
      this.setState({ redirect: true });
    } else {
      // validate jwt token from local storage if exists.
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        getProjects(jwt).then((res) => {
          if (!res.error) {
            this.props.dispatch(userLogin({...res.userData}));
            this.setState({ redirect: true });
          } else {
            this.setState({ validating: false });
          }
        });
      } else {
        this.setState({ validating: false });
      }
    }
  }

  render() {
    const isDisabled = this.isDisabled();

    if (this.state.redirect) {
      return <Redirect to='/dashboard' />;
    }

    const { errorMessageEmail, errorMessagePassword, validating, whiteLoader } = this.state;

    return (
      <div className='Signin-Container'>
        <div className='Avatar'>
          <LockOutlinedIcon />
        </div>
        <div className='Signin-Header'>
          <Typography variant='h5'>Sign in</Typography>
        </div>
        <div className='Signin-Form-Container'>
          <form noValidate onSubmit={this.handleSubmit}>
            <div className='Signin-Email'>
              <TextField
                label='Email *'
                margin='dense'
                name='email'
                variant='outlined'
                error={errorMessageEmail ? true : false}
                helperText={errorMessageEmail}
                onBlur={this.handleChangeEmail}
                onChange={this.handleFieldChange}
              />
            </div>

            <div className='Signin-Password'>
              <TextField
                label='Password *'
                name='password'
                type='password'
                margin='dense'
                variant='outlined'
                error={errorMessagePassword ? true : false}
                helperText={errorMessagePassword}
                onBlur={this.handleChangePassword}
                onChange={this.handleFieldChange}
              />
            </div>

            <div className='Signin-Button'>
              <Button
                variant='contained'
                type='submit'
                size='medium'
                color='primary'
                disabled={isDisabled}
              >
                {validating ? (
                  <Fragment>
                    <CircularProgress
                      size={24}
                      thickness={5}
                      style={whiteLoader ? { color: 'white' } : {}}
                    />
                    &nbsp; Trying to log you in
                  </Fragment>
                ) : (
                  'Submit'
                )}
              </Button>
            </div>

            <div>
              <Typography color='primary' className='Signin-Forget' variant='body2'>
                Forget password?
              </Typography>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.auth;
};

export default connect(mapStateToProps)(Login);
