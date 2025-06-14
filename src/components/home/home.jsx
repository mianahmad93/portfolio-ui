import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./home.css";
import myvideo from "../home/video.mp4";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div id="home" className="home_main">
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sm={12}>
            <Typography
              className="color"
              variant="h1"
              style={{ fontWeight: "bolder", fontSize: "68px" }}
              gutterBottom
            >
              <br />
              Hello!!! <br /> We Are Creative Digital
            </Typography>
            <Typography
              style={{
                fontWeight: "300",
                fontSize: "14px",
                marginTop: "5%",
                lineHeight: "2",
              }}
              variant="body1"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
            <Link
              style={{ cursor: "pointer" }}
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
            >
              <button className="button-64">
                <span class="text">CONTACT US</span>
              </button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <video className="videoTag" autoPlay loop muted>
              <source src={myvideo} type="video/mp4" />
            </video>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
