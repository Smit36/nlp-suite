import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import {
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Card,
  CardContent,
  FormGroup,
} from '@material-ui/core';
import './CreateProjectModal.css';

import { addProject } from '../../controllers/projects';
import { addNewProject } from '../../redux/actions/projects';
import { userLogOut } from '../../redux/actions/auth';
import { errorMessage } from '../../redux/actions/message';

class CreateProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      errorProjectName: '',
      selectApi: [],
      count: 0,
      accountType: 'free',
      addingNewProject: false,
    };
  }

  handleChangeName = (e) => {
    const value = e.target.value;
    let error = '';
    if (!value) {
      error = 'This field is required.';
    } else if (value.length < 3) {
      error = 'Project name should be at least 3 characters long.';
    }
    this.setState({ projectName: value, errorProjectName: error });
  };

  handleSelectAPI = (e) => {
    const value = e.target.value;
    const { selectApi, count } = this.state;
    if (selectApi.includes(value)) {
      const index = selectApi.indexOf(value);
      const newArr = selectApi
        .slice(0, index)
        .concat(...selectApi.slice(index + 1, selectApi.length));
      this.setState({ selectApi: newArr, count: count - 1 });
    } else {
      this.setState({ selectApi: selectApi.concat(value), count: count + 1 });
    }
  };

  handleFieldChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  isDisabled = () => {
    const { projectName, count } = this.state;
    if (projectName.length < 3) {
      return true;
    } else if (count < 1) {
      return true;
    }
    return false;
  };

  handleNewProject = () => {
    const isWrong = this.isDisabled();
    if (isWrong || this.state.addingNewProject) {
      return;
    }

    const { projectName, selectApi } = this.state;
    const data = { name: projectName, allowed_apis: selectApi };
    this.setState({ addingNewProject: true });
    addProject(data).then((res) => {
      const { error, errorType, added } = res;
      if (!error) {
        this.props.dispatch(addNewProject(added));
        this.props.handleModal();
      } else {
        if (errorType === 'name') {
          this.setState({ errorProjectName: res.errorMessage, addingNewProject: false });
        } else if (errorType === 'applications') {
          this.props.dispatch(errorMessage(res.errorMessage));
          this.props.handleModal();
        } else if (errorType === 'access_token' || errorType === 'server') {
          this.props.dispatch(userLogOut());
          if (errorType === 'access_token') {
            this.props.dispatch(errorMessage('You need to login. Token expired.'));
          } else {
            this.props.dispatch(errorMessage(res.errorMessage));
          }
        }
      }
    });
  };

  render() {
    if (!this.props.auth) {
      return <Redirect to='/user/signin' />;
    }

    const { errorProjectName, count, accountType, selectApi, addingNewProject } = this.state;
    const isDisabled = this.isDisabled();
    return (
      <Card className='Modal-Container'>
        <CardContent className='Modal-Content'>
          <div className='Modal-Header'>
            <Typography variant='h6' align='left'>
              Name:
            </Typography>
          </div>
          <div className='Modal-Input-Project-Name'>
            <TextField
              fullWidth={true}
              label='Project Name'
              margin='dense'
              variant='outlined'
              name='projectName'
              error={errorProjectName ? true : false}
              helperText={errorProjectName}
              onBlur={this.handleChangeName}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className='Api-Container'>
            <Typography variant='h6' align='left'>
              APIs:
            </Typography>
            <FormGroup onChange={this.handleSelectAPI} className='Api-Selection'>
              <div className='Api-Items'>
                <FormControlLabel
                  control={<Checkbox value='entities' color='primary' />}
                  label='Entities'
                  disabled={
                    count === 2 && accountType === 'free' && !selectApi.includes('entities')
                      ? true
                      : false
                  }
                  className='Api-Item'
                />
                <FormControlLabel
                  control={<Checkbox value='translator' color='primary' />}
                  label='Translator'
                  disabled={
                    count === 2 && accountType === 'free' && !selectApi.includes('translator')
                      ? true
                      : false
                  }
                  className='Api-Item'
                />
              </div>
              <div className='Api-Items'>
                <FormControlLabel
                  control={<Checkbox value='sentiment' color='primary' />}
                  label='Sentiment'
                  disabled={
                    count === 2 && accountType === 'free' && !selectApi.includes('sentiment')
                      ? true
                      : false
                  }
                  className='Api-Item'
                />
                <FormControlLabel
                  control={<Checkbox value='summarizer' color='primary' />}
                  label='Summarizer'
                  disabled={
                    count === 2 && accountType === 'free' && !selectApi.includes('summarizer')
                      ? true
                      : false
                  }
                  className='Api-Item'
                />
              </div>
            </FormGroup>
          </div>
          <div className='Create-Button' onClick={this.handleNewProject}>
            <Button disabled={isDisabled} size='small' color='primary' variant='contained'>
              {addingNewProject ? (
                <Fragment>
                  <CircularProgress size={24} thickness={5} style={{ color: 'white' }} />
                  &nbsp; Creating...
                </Fragment>
              ) : (
                'Create'
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    projects: state.projects,
  };
};

export default connect(mapStateToProps)(CreateProjectModal);
