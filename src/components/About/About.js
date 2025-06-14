import React from "react";
import "./About.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import image from "../About/image-one.jpg";
import Services from "../services/services";
import Fade from "react-reveal/Fade";
import pic1 from '../About/pic1.png';

const About = () => {
  return (
    <>
      <div
        id="about"
        style={{
          marginTop: "6%",
          marginLeft: "8%",
          marginRight: "8%",
          marginBottom: "4%",
        }}
      >
        <Grid container spacing={2}>
          <Grid style={{marginTop:"3%"}} item xs={12} md={6} sm={12}>
            <Typography sx={{ fontWeight: "bold" }} variant="h3" gutterBottom>
              About Us
            </Typography>
            <Typography
              sx={{ color: "gray", fontWeight: "400" }}
              variant="subtitle1"
              gutterBottom
            >
              For over 3+ years we have been developing digital solutions for{" "}
              <br />
              companies looking to gain better visibility on the internet.
            </Typography>
            
            <div className="icons">
              <div className="main_div">

                <div className="icon_div">
                  <CheckCircleIcon
                   className="my_icons"
                    sx={{
                      // backgroundColor: "#F45162",
                      borderRadius: "50%",
                      padding: "5px 5px",
                      fontSize: "40px",
                      color: "white",
                      margin: "auto",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      marginLeft: "25px",
                      marginTop: "2px",
                      fontSize: "28px",
                    }}
                    variant="h5"
                    gutterBottom
                  >
                    Quality
                  </Typography>
                </div>
                
                
                <Typography
                  sx={{
                    color: "gray",
                    marginLeft: "70px",
                    marginTop: "2%",
                    fontWeight: "400",
                  }}
                  variant="subtitle1"
                  gutterBottom
                >
                  Everything we do has the commitment of a well trained and
                  motivated team.
                </Typography>
              </div>
              <br/>
              <br/>
              <div className="main_div">
                <div className="icon_div">
                  <StarIcon
                  className="my_icons"
                    sx={{
                      // backgroundColor: "#F45162",
                      borderRadius: "50%",
                      padding: "5px 5px",
                      fontSize: "40px",
                      color: "white",
                      margin: "auto",
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      marginLeft: "25px",
                      marginTop: "2px",
                      fontSize: "28px",
                    }}
                    variant="h5"
                    gutterBottom
                  >
                    Experience
                  </Typography>
                </div>
                <Typography
                  sx={{
                    color: "gray",
                    marginLeft: "70px",
                    marginTop: "2%",
                    fontWeight: "400",
                  }}
                  variant="subtitle1"
                  gutterBottom
                >
                  Focused on results we seek to raise the level of our
                  customers.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <Fade right>
              <img src={pic1} />
            </Fade>
          </Grid>
        </Grid>
      </div>
      <Services />
    </>
  );
};

export default About;
