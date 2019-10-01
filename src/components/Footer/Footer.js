import React, { Component } from 'react';
import './Footer.css';
import { Typography } from '@material-ui/core';

class Footer extends Component {
  render() {
    return (
      <footer className='Footer'>
        <Typography>Copyright &copy; NLP Suite. All Rights Reserved</Typography>
      </footer>
    );
  }
}

export default Footer;
