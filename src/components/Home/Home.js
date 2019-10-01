import React, { Component } from "react";
import { Link } from "react-router-dom";
import laptop from "./laptop2.jpg";
import { Button } from "@material-ui/core";
import "../Navbar/Navbar";

import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { Typography, Box } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <div className="Home-Content-Container">
          <div className="Home-First">
            <div className="Home-First-Left">
              Do your best work,all in one suite.
              <div>
                <Link to="user/signup">
                  <Button variant="contained" size="large" color="primary">
                    Free Trial
                  </Button>
                </Link>
              </div>
            </div>
            <div className="Laptop-Screen">
              <img src={laptop} alt="white mac laptop" />
            </div>
          </div>
          <div className="Home-Second">
            <div >
              <div className='Home-Second-left'>
                <Typography>
                  <Box fontWeight={500} fontSize={25} textAlign="left">
                    Create
                  </Box>
                  <Box fontWeight={200} fontSize="large" color="gray">
                    Make your project by simply using NLP API
                  </Box>
                </Typography>
              </div>
              <div>
                <Typography>
                  <Box fontWeight={500} fontSize={25} textAlign="left">
                    Develop
                  </Box>
                  <Box fontWeight={200} fontSize="large" color="gray">
                    Make your project by simply using NLP API
                  </Box>
                </Typography>
              </div>
            </div>
            <div>
              <div  className='Home-Second-left'>
                <Typography>
                  <Box fontWeight={500} fontSize={25} textAlign="left">
                    Create
                  </Box>
                  <Box fontWeight={100} fontSize="large" color="gray">
                    Make your project by simply using NLP API
                  </Box>
                </Typography>
              </div>
              <div>
                <Typography>
                  <Box fontWeight={500} fontSize={25} textAlign="left">
                    Create
                  </Box>
                  <Box fontWeight={100} fontSize="large" color="gray">
                    Make your project by simply using NLP API
                  </Box>
                </Typography>
              </div>
            </div>
          </div>
          <div className="Home-Third">
            <Typography>
              <Box fontSize={40} fontWeight={400} fontFamily='fontFamily' color='gray' >
                Restful API
              </Box>
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
