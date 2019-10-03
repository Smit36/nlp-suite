import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Typography, Card, CardContent, Button } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './ProjectCard.css';

import ProjectDetails from '../ProjectDetails/ProjectDetails';
import { deleteProject } from '../../controllers/projects';
import { updateProject } from '../../redux/actions/projects';
import { userLogOut } from '../../redux/actions/auth';

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

  handleDelete = () => {
    deleteProject({ name: this.props.name }).then((resData) => {
      const { error, errorType } = resData;
      if (!error) {
        return this.props.dispatch(updateProject(this.props.name));
      }
      if (errorType === 'access_token') {
        return this.props.dispatch(userLogOut());
      }
    });
  };

  render() {
    const { name, created_at } = this.props;

    return (
      <div className='Project-Card'>
        <Card>
          <CardContent>
            <div className='Project-Card-Container'>
              <div className='Project-Card-Header'>
                <Typography variant='h5'>
                  <b>Name</b>: {name}
                </Typography>
                <div className='Project-Card-Icons'>
                  <div className='Project-Card-Edit-Icon'>
                    <Button size='small' title='Edit' variant='outlined' color='primary'>
                      Edit&nbsp;
                      <EditIcon className='Project-Card-Edit-Icon' />
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant='outlined'
                      color='primary'
                      title='Delete'
                      size='small'
                      onClick={this.handleDelete}
                    >
                      Delete&nbsp;
                      <DeleteIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div className='Project-Card-Date'>
                <Typography variant='subtitle1'>
                  <b>Created on</b>: {moment(parseInt(created_at) * 1000).format('DD-MMM-YY')}
                </Typography>
              </div>
              {!this.state.isDetailsOpened && (
                <div className='Project-Card-Expand-Button'>
                  <Button fullWidth={true} onClick={this.handleOpenClose}>
                    <KeyboardArrowDownIcon fontSize='large' />
                  </Button>
                </div>
              )}
              {this.state.isDetailsOpened && (
                <Fragment>
                  <div className='Project-Card-Details-Container'>
                    <ProjectDetails {...this.props} />
                  </div>
                  <div className='Project-Card-Compress-Button'>
                    <Button fullWidth={true} onClick={this.handleOpenClose}>
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

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(ProjectCard);
