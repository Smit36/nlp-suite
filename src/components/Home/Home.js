import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import laptop from './laptop.jpg';
import { Button } from '@material-ui/core';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='Home-Header-Container'>
          <div className='Home-Header'>
            <div className='Home-Header-Name'>
              <b>NLP</b> Suite
            </div>
            <div className='Header-Login-Button'>
              <Link to='user/signin'>
                <Button variant='outlined' size='medium'>
                  Login
                </Button>
              </Link>
            </div>
            <div className='Header-Signup-Button'>
              <Link to='user/signup'>
                <Button variant='contained' size='medium'>
                  Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='Home-Content-Container'>
          <div className='Home-First'>
            <div className='Home-First-Left'>
              Do your best work,all in one suite.
              <div>
                <Link to='user/signup'>
                  <Button variant='contained' size='large'>
                    Free Trial
                  </Button>
                </Link>
              </div>
            </div>
            <div className='Laptop-Screen'>
              <img src={laptop} alt='white mac laptop' />
            </div>
          </div>
          <div className='Home-Second'>
            <div className='Home-Second-Name'>Rest API</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
