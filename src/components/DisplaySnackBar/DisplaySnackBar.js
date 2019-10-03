import React from 'react';
import { connect } from 'react-redux';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import './DisplaySnackBar.css';

import { clearMessages } from '../../redux/actions/message';

class DisplaySnackBar extends React.Component {
  handleTimeOut = () => {
    setTimeout(() => {
      this.props.dispatch(clearMessages());
    }, 6000);
  };

  render() {
    const { successMessage, errorMessage } = this.props.message;
    return (
      <div className='Snack-Bar-Container'>
        {successMessage && (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={successMessage ? true : false}
          >
            <SnackbarContent
              className='Success-Message-Snack-Bar'
              message={
                <div>
                  <span>
                    {this.handleTimeOut()}
                    <ErrorIcon />
                    &nbsp;&nbsp;
                  </span>
                  <span>{successMessage}</span>
                </div>
              }
            />
          </Snackbar>
        )}
        {errorMessage && (
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={errorMessage ? true : false}
          >
            <SnackbarContent
              className='Error-Message-Snack-Bar'
              message={
                <div>
                  <span>
                    {this.handleTimeOut()}
                    <ErrorIcon />
                    &nbsp;&nbsp;
                  </span>
                  <span>{errorMessage}</span>
                </div>
              }
            />
          </Snackbar>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

export default connect(mapStateToProps)(DisplaySnackBar);
