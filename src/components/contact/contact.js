import React from "react";
import "./contact.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
// import Sample2 from "../sample2/Sample2";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import Footer from "../footer/footer";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d9nyigh",
        "template_lzcukfd",
        form.current,
        "Qag6UoqcwGyhzFD8L"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Your Email Successfully send");
    e.target.reset();
  };

  return (
    <>
      <div id="contact" className="contact_page">
        <div style={{ marginLeft: "10%", marginRight: "10%" }}>
          <Typography
            sx={{ textAlign: "center", fontWeight: "bold" }}
            variant="h2"
          >
            Let’s Talk About Your Project!
          </Typography>
          <Typography sx={{ textAlign: "center", color: "gray" }} variant="h6">
            Feel free to ask me or Let’s do talk about our future collaboration
          </Typography>
          <Grid container spacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={12} md={6} sm={12}>
              <div style={{ marginTop: "20%", marginLeft: "5%" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", fontWeight: "bold" }}
                >
                  Get In Touch!
                </Typography>
                <form
                  style={{ marginTop: "3%" }}
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <TextField
                    fullWidth
                    id="fullWidth"
                    name="name"
                    type="text"
                    sx={{ width: "100%", marginTop: "3%" }}
                    label="Name"
                    variant="outlined"
                    required
                  />
                  <br />

                  <TextField
                    fullWidth
                    id="fullWidth"
                    name="email"
                    type="email"
                    required
                    sx={{ width: "100%", marginTop: "5%" }}
                    label="Email"
                    variant="outlined"
                    hiddenLabel
                  />
                  <br />

                  <div style={{ marginTop: "3%" }}>
                    <TextareaAutosize
                      aria-label="minimum height"
                      name="message"
                      required
                      style={{
                        width: '100%',
                        backgroundColor: "rgb(229, 237, 243)",
                      }}
                      sx={{ marginTop: "5%" }}
                      minRows={6}
                      placeholder="Message"
                    />
                    <br />
                  </div>
                  <br />
                  <button className="button">
                    <span type="submit" value="Submit" class="text">
                      SUBMIT
                    </span>
                  </button>
                  {/* <input className="submit_btn" /> */}
                </form>
              </div>
            </Grid>
            <Grid xs={12} md={6} sm={12}>
              <div style={{ marginTop: "20%", marginLeft: "20%" }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", fontSize: "45px" }}
                >
                  Contact Info!
                </Typography>
                <div style={{ marginTop: "10%" }}>
                  <div style={{ display: "flex" }}>
                    <div className="icon1">
                      <EmailIcon
                        className="my_icons"
                        sx={{
                          color: "white",
                          borderRadius: "50%",
                          padding: "5px 5px",
                          fontSize: "40px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginTop: "1%",
                        marginLeft: "3%",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "black",
                      }}
                    >
                      <span>info@webstarx.com</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", marginTop: "5%" }}>
                    <div className="icon1">
                      <CallIcon
                        className="my_icons"
                        sx={{
                          color: "white",
                          borderRadius: "50%",
                          padding: "5px 5px",
                          fontSize: "40px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginTop: "1%",
                        marginLeft: "3%",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "black",
                      }}
                    >
                      <span>+923060073052</span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
      {/* <Sample2 /> */}
    </>
  );
};

export default Contact;
