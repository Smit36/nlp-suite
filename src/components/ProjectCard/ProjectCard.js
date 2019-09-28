import React, { Component, Fragment } from 'react';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './ProjectCard.css';

import ProjectDetails from '../ProjectDetails/ProjectDetails';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailsOpened: false,
    };
  }

  handleOpenClose = () => {
    this.setState({
      isDetailsOpened: !this.state.isDetailsOpened,
    });
  };

  render() {
    const { projectName, createdOn } = this.props.projectDetails;

    return (
      <div className='Project-Card'>
        <Card>
          <CardContent>
            <div className='Project-Card-Container'>
              <div className='Project-Card-Header'>
                <Typography variant='h5'>
                  <b>Name</b>: {projectName}
                </Typography>
              </div>
              <div className='Project-Card-Date'>
                <Typography variant='subtitle1'>
                  <b>Created on</b>: {createdOn}
                </Typography>
              </div>
              {!this.state.isDetailsOpened && (
                <div className='Project-Card-Expand-Button'>
                  <Button  onClick={this.handleOpenClose}>
                    <KeyboardArrowDownIcon fontSize='large' />
                  </Button>
                </div>
              )}
              {this.state.isDetailsOpened && (
                <Fragment>
                  <div className='Project-Card-Details-Container'>
                    <div className='Project-Card-Details-Content'>
                      <ProjectDetails {...this.props.projectDetails} />
                    </div>
                  </div>
                  <div className='Project-Card-Compress-Button'>
                    <Button  onClick={this.handleOpenClose}>
                      <KeyboardArrowUpIcon fontSize='large' />
                    </Button>
                  </div>
                </Fragment>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
