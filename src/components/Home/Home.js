import React, { Component } from "react";
import { Link } from "react-router-dom";
import laptop from "./laptop2.jpg";
import work1 from "./work.jpg";
import work from "./work1.jpg";
import { Button } from "@material-ui/core";
import "../Navbar/Navbar";

import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { Typography, Box } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar route='home' />
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
            <div>
              <div className="Home-Second-left">
                <Box fontWeight={500} fontSize={25} textAlign="left">
                  Create
                </Box>
                <Box fontWeight={200} fontSize="large" color="gray">
                  Make your project by simply using NLP API
                </Box>
              </div>
              <div>
                <Box fontWeight={500} fontSize={25} textAlign="left">
                  Develop
                </Box>
                <Box fontWeight={200} fontSize="large" color="gray">
                  Make your project by simply using NLP API
                </Box>
              </div>
            </div>
            <div>
              <div className="Home-Second-left">
                <Box fontWeight={500} fontSize={25} textAlign="left">
                  Create
                </Box>
                <Box fontWeight={100} fontSize="large" color="gray">
                  Make your project by simply using NLP API
                </Box>
              </div>
              <div>
                <Box fontWeight={500} fontSize={25} textAlign="left">
                  Create
                </Box>
                <Box fontWeight={100} fontSize="large" color="gray">
                  Make your project by simply using NLP API
                </Box>
              </div>
            </div>
          </div>
          <div className="Home-Third">
            <div className="Home-Third-Header">
              What is NLP Suite?
              <hr size="6" width="450px" />
            </div>
          </div>
          <div className="Home-Fourth">
            <div className="Home-Fourth-Header">
              Why you should use it?
              <hr size="6" width="550px" />
              <div className="Home-Fourth-Work">
                <div className="Home-Fourth-Work-Container">
                  <img src={work1} alt="white mac laptop" />
                </div>
                <div className="Home-Fourth-Work-Text">
                  Make decisions faster, face to face. Use shared calendars to
                  see when others are available and schedule meetings with
                  automatic email invites. With one click, turn your meeting
                  into a video conference from any camera-enabled computer,
                  phone, or tablet. Share your screen to review your work as a
                  team, and make decisions on the spot.
                </div>
              </div>
            </div>
          </div>
          <div className="Home-Fifth">
            <div className="Home-Fifth-Work">
              <div className="Home-Fifth-Header">How to start</div>
              <hr size="6" width="200px" />
              <div className="Home-Fifth-Work-Container">
                <div className="Work-Steps">
                  Make decisions faster, face to face. Use shared calendars to
                  see when others are available and schedule meetings with
                  automatic email invites. With one click, turn your meeting
                  into a video conference from any camera-enabled computer,
                  phone, or tablet. Share your screen to review your work as a
                  team, and make decisions on the spot.
                </div>
                <div className="Home-Fifth-Work-Image">
                  <img src={work1} alt="white mac laptop" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
