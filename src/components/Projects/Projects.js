import React, { Component } from 'react';
import { Typography, Button, Backdrop, Modal, Fade } from '@material-ui/core';
import './Projects.css';
import moment from 'moment';

import CreateProjectModal from '../CreateProjectModal/CreateProjectModal';
import ProjectCard from '../ProjectCard/ProjectCard';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProject: false,
      results: false,
      projectDetails: [],
    };
  }

  createProject = () => {
    this.setState({
      showProject: !this.state.showProject,
    });
  };

  handleProject = (e) => {
    const newProject = {
      projectName: 'adit',
      createdOn: moment().format('DD-MMM-YYYY'),
      allowedApis: ['translator', 'entities'],
    };

    this.setState({
      results: true,
      showProject: false,
      projectDetails: [...this.state.projectDetails, newProject],
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
            onClick={this.createProject}
          >
            New Project
          </Button>
        </div>
        {this.state.results ? (
          this.state.projectDetails.map((item, index) => {
            return (
              <div key={index}>
                <ProjectCard projectDetails={{ ...item }} />
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
          onClose={this.createProject}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 150,
          }}
          className='Modal-Container'
        >
          <Fade in={this.state.showProject}>
            <CreateProjectModal handleProject={this.handleProject} />
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default Projects;
