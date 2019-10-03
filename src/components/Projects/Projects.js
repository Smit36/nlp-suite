import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Button, Backdrop, Modal, Fade } from '@material-ui/core';
import './Projects.css';

import CreateProjectModal from '../CreateProjectModal/CreateProjectModal';
import ProjectCard from '../ProjectCard/ProjectCard';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProject: false,
      results: true,
      projectDetails: [],
    };
  }

  handleModal = () => {
    this.setState({
      showProject: !this.state.showProject,
    });
  };

  render() {
    return (
      <div className='Projects'>
        <div className='Create-New-Project-Button'>
          <Button
            variant='contained'
            size='medium'
            color='primary'
            className='new-button'
            onClick={this.handleModal}
          >
            New Project
          </Button>
        </div>
        {this.props.projects.length > 0 ? (
          this.props.projects.reverse().map((item, index) => {
            return (
              <div key={index}>
                <ProjectCard { ...item } />
              </div>
            );
          })
        ) : (
          <div className='No-Project-Message'>
            <Typography color='textSecondary'>No projects yet.</Typography>
          </div>
        )}
        <Modal
          aria-labelledby='Create New Project.'
          aria-describedby='Create New Project to generate secret token.'
          open={this.state.showProject}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 200,
          }}
          onClose={this.handleModal}
          className='Modal-Container'
        >
          <Fade in={this.state.showProject}>
            <CreateProjectModal handleModal={this.handleModal} />
          </Fade>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { projects: state.projects };
};

export default connect(mapStateToProps)(Projects);
