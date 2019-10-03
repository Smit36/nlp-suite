import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import './Dashboard.css';

import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import { errorMessage } from '../../redux/actions/message';
import { pushProject } from '../../redux/actions/projects';
import { userLogOut, userLogin } from '../../redux/actions/auth';
import { getProjects } from '../../controllers/projects';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      showProject: false,
      redirect: false,
      validating: true,
    };
  }

  componentDidMount() {
    const { auth } = this.props;
    if (auth || localStorage.getItem('jwt')) {
      getProjects().then((data) => {
        const { error, errorType, errorMessage: errorMsg, results } = data;
        if (!error) {
          this.props.dispatch(pushProject(results.projects));
          this.props.dispatch(userLogin({...data.userData}));
          this.setState({ validating: false });
        } else if (errorType === 'access_token' || errorType === 'server') {
          this.props.dispatch(userLogOut());
          if (errorType === 'access_token') {
            this.props.dispatch(errorMessage('Please log in to continue'));
          } else {
            this.props.dispatch(errorMessage(errorMsg));
          }
          this.setState({ redirect: true });
        }
      });
    } else {
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/user/signin' />;
    } else if (!this.props.auth && !this.state.validating) {
      return <Redirect to='/user/signin' />;
    }

    const { validating } = this.state;
    return (
      <div className='Dashboard'>
        <Navbar />
        {validating && <LinearProgress />}
        {validating || (
          <div className='Content'>
            <Projects />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => state.auth;

export default connect(mapStateToProps)(Dashboard);
