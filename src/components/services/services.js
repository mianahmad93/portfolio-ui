import React from "react";
import "./services.css";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import HowDo from "../HowDo/HowDo";
import Slide from "react-reveal/Slide";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Services = () => {
  return (
    <>
      <div id="services" className="services">
        <Typography
          sx={{ textAlign: "center", fontWeight: "bolder" }}
          variant="h2"
          gutterBottom
        >
          Our Services
        </Typography>
        <div style={{ marginLeft: "10%", marginRight: "10%", marginTop: "3%" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Slide bottom cascade>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Item
                    className="box"
                    id="box1"
                    sx={{
                      borderRadius: "10px",
                      padding: "22px 5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "24px",
                      }}
                      variant="h4"
                    >
                      E-commerce Web
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Item
                    className="box"
                    id="box2"
                    sx={{
                      borderRadius: "10px",
                      padding: "22px 5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "24px",
                      }}
                      variant="h4"
                    >
                      Digital Marketing
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Item
                    className="box"
                    id="box3"
                    sx={{
                      borderRadius: "10px",
                      padding: "22px 5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "24px",
                      }}
                      variant="h4"
                    >
                      Book Author Web
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Item
                    className="box"
                    id="box4"
                    sx={{
                      borderRadius: "10px",
                      padding: "22px 5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "24px",
                      }}
                      variant="h4"
                    >
                      NFT Web
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Item
                    className="box"
                    id="box5"
                    sx={{
                      borderRadius: "10px",
                      padding: "22px 5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "24px",
                      }}
                      variant="h4"
                    >
                      Business Web
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Item
                    className="box"
                    id="box6"
                    sx={{
                      borderRadius: "10px",
                      padding: "22px 5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "24px",
                      }}
                      variant="h4"
                    >
                      Dropshipping
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Item
                    className="box"
                    id="box7"
                    sx={{
                      borderRadius: "10px",
                      padding: "22px 5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "24px",
                      }}
                      variant="h4"
                    >
                      Landing Page
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Item
                    className="box"
                    id="box8"
                    sx={{
                      borderRadius: "10px",
                      padding: "22px 5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "24px",
                      }}
                      variant="h4"
                    >
                      Portfolio Web
                    </Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Item
                    className="box"
                    id="box9"
                    sx={{
                      borderRadius: "10px",
                      padding: "22px 5px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "24px",
                      }}
                      variant="h4"
                    >
                      Personal Blog
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Slide>
          </Box>
        </div>
      </div>
      <HowDo />
    </>
  );
};

export default Services;
