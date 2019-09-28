import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Typography, TextField, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './Login.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
);

class Login extends Component {

  constructor(props){

    super(props);
    this.state={
      errorMessageEmail:'',
      errorMessagePassword:'',
      checkErrorEmail:false,
      checkErrorPassword:false
    };
  }

  handleChangeEmail=(e)=>{

    const value=e.target.value;
    console.log(value);
    if(!emailRegex.test(value)){
        this.setState({
          checkErrorEmail:true,
          errorMessageEmail:'Valid Email is required'
        })
    }
    else{
      this.setState({
        checkErrorEmail:false,
        errorMessageEmail:''
      })
      }
      
    }
  handleChangePassword=(e)=>{
    const value=e.target.value;
    console.log(value);
    if(value.length<3)
    {
      this.setState({
        checkErrorPassword:true,
        errorMessagePassword:'Password length must be more than 3'
      })
    }
    else{
      this.setState({
        checkErrorPassword:false,
        errorMessagePassword:''
      })
    }

  }

  render() {
    return (
      <div className='Signin'>
        <div className='signin-page'>
          <div className='Login'>
            <div className='avatar'>
              <LockOutlinedIcon />
            </div>
            <div className='sign-header'>
              <Typography variant='h5'>Sign in</Typography>
            </div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <TextField
                    className='sign-username'
                    id='outlined-dense'
                    label='Email Id'
                    margin='dense'
                    variant='outlined'
                    error={this.state.checkErrorEmail}
                    helperText={this.state.errorMessageEmail}
                    onBlur={this.handleChangeEmail}
                    required
                  />
                  <TextField
                    className='sign-password'
                    id='outlined-dense'
                    label='Password'
                    margin='dense'
                    variant='outlined'
                    error={this.state.checkErrorPassword}
                    helperText={this.state.errorMessagePassword}
                    onBlur={this.handleChangePassword}
                    required
                  />
                  <div className='sign-remember'>
                    <FormControlLabel
                      control={<Checkbox value='remember' color='primary' />}
                      label='Remember me'
                    />
                  </div>
                  <div className='sign-button'>
                    <Button
                      variant='contained'
                      size='medium'
                      color='primary'
                      className='sign-button-inside'
                    >
                      Submit
                    </Button>
                  </div>
                  <Typography color='primary'  variant='body2'>
                    <Link to='./dashboard' className='sign-forget'>Forget Password?</Link>
                  </Typography>
                </div>
              </form>
            </div>
          </div>
          <div className='line'></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Login;
