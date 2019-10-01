import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Popover,
  List,
  ListItem,
  ListItemText,
  Button
} from "@material-ui/core";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null
    };
  }

  handleMenu = e => {
    this.setState({ open: !this.state.open, anchorEl: e.currentTarget });
  };

  render() {
    return (
      <div className="Menu-Container">
        <AppBar position="static" className="Menu-Height">
          <Toolbar>
            <div className="Header-Name">
              <Typography variant="h5">NLP Suite</Typography>
            </div>
            <div className="Navbar-Avatar-Icon">
              <IconButton
                onClick={this.handleMenu}
                color="inherit"
                size="small"
              >
                <Avatar>S</Avatar>
              </IconButton>
              <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                onClose={this.handleMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <List className="Navbar-Avatar-List">
                  <ListItem button>
                    <ListItemText primary="Profile" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Billing" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Settings" />
                  </ListItem>
                </List>
              </Popover>
            </div>      
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
