import React, { Component } from 'react';
import {
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormGroup,
  FormLabel,
} from '@material-ui/core';
import './CreateProjectModal.css';

class CreateProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkErrorProjectName: false,
      errorMessageProjectName: '',
      selectApi: [],
      errorSelect: true,
      errorSelectMessage: '',
    };
  }

  handleChangeName = (e) => {
    const value = e.target.value;

    if (value.length < 1) {
      this.setState({
        checkErrorProjectName: true,
        errorMessageProjectName: 'There must be some Project Name',
      });
    } else {
      this.setState({
        checkErrorProjectName: false,
        errorMessageProjectName: '',
        projectName: value,
      });
    }
  };

  handleSelectAPI = (e) => {
    const value = e.target.value;
    this.setState({
      selectApi: [...this.state.selectApi, value],
    });
    console.log(this.state.selectApi);
    if (this.state.selectApi.length > 1) {
      console.log('sorry');
    }
  };

  render() {
    return (
      <Card className='Card-Container'>
        <CardContent>
          <div>
            <Typography variant='h5' align='left'>
              New Project
            </Typography>
            <TextField
              fullWidth={true}
              id='outlined-dense'
              label='Project Name'
              margin='dense'
              variant='outlined'
              required
              error={this.state.checkErrorProjectName}
              helperText={this.state.errorMessageProjectName}
              onBlur={this.handleChangeName}
            />
          </div>
          <div className='Api-Container'>
            <div className='Api-Selection'>
              <FormControl>
                <FormLabel>
                  <Typography variant='h6'>Select API</Typography>
                </FormLabel>
                <FormGroup
                  onChange={this.handleSelectAPI}
                  error={this.state.errorSelect}
                  helperText={this.state.errorSelectMessage}
                >
                  <div className='Api-Items'>
                    <FormControlLabel
                      control={<Checkbox value={'semantic prasing'} color='primary' />}
                      label='Semantic Prasing'
                    />
                    <FormControlLabel
                      control={<Checkbox value='topic modelling' color='primary' />}
                      label='Topic Modelling'
                    />
                  </div>
                  <div className='Api-Items'>
                    <FormControlLabel
                      control={<Checkbox value='machine translation' color='primary' />}
                      label='Machine Translation'
                    />
                    <FormControlLabel
                      control={<Checkbox value='named entity recognition' color='primary' />}
                      label='Named Entity Recognition'
                    />
                  </div>
                </FormGroup>
              </FormControl>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div
            className='Create-Button'
            onClick={() => {
              this.props.handleProject(this.state);
            }}
          >
            <Button size='small' color='primary' variant='contained'>
              Create
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
}

export default CreateProjectModal;
