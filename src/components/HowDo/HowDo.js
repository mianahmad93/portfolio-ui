import React from "react";
import "./HowDo.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import image from "../HowDo/work-together.png";
import GroupsIcon from "@mui/icons-material/Groups";
import Fade from "react-reveal/Fade";
import Client from "../Client/Client";
import pic2 from '../HowDo/pic2.png';

const HowDo = () => {
  return (
    <>
      <div className="how_do">
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={6}>
            <Fade left cascade>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontSize: "45px",
                  color: " #030202",
                  fontFamily: "Sans-serif",
                  fontWeight: "700",
                  lineHeight: "70px",
                }}
                variant="h3"
              >
                How We Do It?
              </Typography>
              <Typography
                sx={{
                  color: "#7A7A7A",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
                variant="subtitle1"
              >
                We are always sincere in taking projects, giving quality work,
                and quick support because the client’s satisfaction is the most
                important part of our working strategy. WebstarX web design
                agency believe that good sell is only possible through good
                quality services.
              </Typography>
              <img
                style={{ width:"90%",marginTop:"10%" }}
                src={pic2}
              />
            </Fade>
          </Grid>
          <Grid xs={12} sm={12} md={6}>
            <Fade right cascade>
              <div className="circle">
                <div className="circle_one">
                  <GroupsIcon
                   className="my_icons"
                    sx={{
                      
                      borderRadius: "50%",
                      padding: "5px 5px",
                      fontSize: "50px",
                      color: "white",
                    }}
                  />
                  <span id="head">Discussion</span>
                  <div className="txt">
                    <Typography variant="subtitle1">
                      First, we understand you need exactly by discussion then
                      we collect all the information given by you and make a
                      plan with our team.
                    </Typography>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right cascade>
              <div style={{ marginTop: "5%" }} className="circle">
                <div className="circle_one">
                  <GroupsIcon
                   className="my_icons"
                    sx={{
                      
                      borderRadius: "50%",
                      padding: "5px 5px",
                      fontSize: "50px",
                      color: "white",
                    }}
                  />
                  <span id="head">Research</span>
                  <div className="txt">
                    <Typography variant="subtitle1">
                      After gathering all your information and need, we research
                      on it so that we can give you the best project.
                    </Typography>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right cascade>
              <div style={{ marginTop: "5%" }} className="circle">
                <div className="circle_one">
                  <GroupsIcon
                  className="my_icons"
                    sx={{
                      
                      borderRadius: "50%",
                      padding: "5px 5px",
                      fontSize: "50px",
                      color: "white",
                    }}
                  />
                  <span id="head">Execute</span>
                  <div className="txt">
                    <Typography variant="subtitle1">
                      When we have everything ready, we execute our plan and
                      give you the perfect project after multi-time testing.
                    </Typography>
                  </div>
                </div>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </div>
      <Client />
    </>
  );
};

export default HowDo;
