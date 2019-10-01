import React, { Component, Fragment } from "react";
import { Typography, Card, CardContent, Button } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "./ProjectCard.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import ProjectDetails from "../ProjectDetails/ProjectDetails";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f4511e",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailsOpened: false
    };
  }

  handleOpenClose = () => {
    this.setState({
      isDetailsOpened: !this.state.isDetailsOpened
    });
  };

  render() {
    const { projectName, createdOn } = this.props.projectDetails;

    return (
      <div className="Project-Card">
        <Card>
          <CardContent>
            <div className="Project-Card-Container">
              <div className="Project-Card-Header">
               <div className='Project-Card-Header-Name'>
               <Typography variant="h5">
                  <b>Name</b>: {projectName}
                </Typography>
               </div>
                <div className="Project-Card-Icon">
                  <div className="Project-Card-Edit-Icon">
                    <Button
                      title="Edit"
                      variant="contained"
                      color='primary'
                    >
                      Edit<EditIcon className="Project-Card-Edit-Icon" />
                    </Button>
                  </div>

                  <Button
                    variant="contained"
                    color='primary'
                    title="Delete"
                    onClick={this.props.handleDelete}
                  >
                    Delete<DeleteIcon />
                  </Button>
                </div>
              </div>
              <div className="Project-Card-Date">
                <Typography variant="subtitle1">
                  <b>Created on</b>: {createdOn}
                </Typography>
              </div>
              {!this.state.isDetailsOpened && (
                <div className="Project-Card-Expand-Button">
                  <Button onClick={this.handleOpenClose}>
                    <KeyboardArrowDownIcon fontSize="large" />
                  </Button>
                </div>
              )}
              {this.state.isDetailsOpened && (
                <Fragment>
                  <div className="Project-Card-Details-Container">
                    <div className="Project-Card-Details-Content">
                      <ProjectDetails {...this.props.projectDetails} />
                    </div>
                  </div>
                  <div className="Project-Card-Compress-Button">
                    <Button onClick={this.handleOpenClose}>
                      <KeyboardArrowUpIcon fontSize="large" />
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
