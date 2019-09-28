import React, { Component } from 'react';
import './Dashboard.css';

import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showProject: false,
    };
  }

  render() {
    return (
      <div className='Dashboard'>
        <Navbar />
        <div className='Content'>
          <Projects />
        </div>
      </div>
    );
  }
}

export default Dashboard;
