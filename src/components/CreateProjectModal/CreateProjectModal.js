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
} from '@material-ui/core';
import './CreateProjectModal.css';

class CreateProjectModal extends Component {
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
            />
          </div>
          <div className='Api-Container'>
            <Typography variant='h6' align='left'>
              Select API
            </Typography>
            <div className='Api-Selection'>
              <div className='Api-Items'>
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Semantic Prasing'
                />
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Topic Modelling'
                />
              </div>
              <div className='Api-Items'>
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Machine Translation'
                />
                <FormControlLabel
                  control={<Checkbox value='remember' color='primary' />}
                  label='Named Entity Recognition'
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <div className='Create-Button' onClick={this.props.handleProject}>
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
