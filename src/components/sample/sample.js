import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./sample.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import About from "../About/About";
import Fade from "react-reveal/Fade";

const Sample = () => {
  return (
    <>
      <div className="sample" style={{ marginTop: "5%" }}>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", marginTop: "4%" }}
          variant="h2"
          gutterBottom
          className="color"
        >
          Why WebstarX
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "2%",
            marginLeft: "20%",
            marginRight: "20%",
          }}
          variant="subtitle1"
          gutterBottom
          className="my_para"
        >
          It’s not just our track record, the efficiency of our web design
          agency, and the quality of our
          <br /> products. Drive and dedication have ensured WebStarX has
          delivered true value to businesses <br /> since 2018, and it’s how
          we’ll be a true partner in driving your success.
        </Typography>
        <div
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "5%",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            alignItems="center" justify="center"
            
          >
            <Grid  style={{ textAlign: "center" }} item xs={12} md={4} sm={6}>
              <Fade cascade left>
                <Card className="card" id="my_card1" sx={{ maxWidth: 320 }}>
                  <CardActionArea>
                    <CardMedia component="img" src="" />
                  </CardActionArea>
                </Card>
              </Fade>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              <Fade cascade left>
                <Card className="card" id="my_card2" sx={{ maxWidth: 320 }}>
                  <CardActionArea>
                    <CardMedia component="img" src="" />
                  </CardActionArea>
                </Card>
              </Fade>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
              <Fade cascade left>
                <Card className="card" id="my_card3" sx={{ maxWidth: 320 }}>
                  <CardActionArea>
                    <CardMedia component="img" src="" />
                  </CardActionArea>
                </Card>
              </Fade>
            </Grid>
          </Grid>
        </div>
      </div>
      <About />
    </>
  );
};
export default Sample;
