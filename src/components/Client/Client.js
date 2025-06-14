import "./Client.css";
import "swiper/css";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
// import required modules
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Sample2 from "../sample2/Sample2";
import Faqs from "../Faqs/Faqs";

const Client = () => {
  return (
    <>
      <div className="client_page">
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "5%" }}
          gutterBottom
        >
          What Our Clients Say
        </Typography>
        <div className="swiper_cards">
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            // navigation
            autoplay={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide virtualIndex={1}>
              <div className="testmonialDIv">
                <div>
                  <img
                    className="my_img"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "100px",
                    }}
                    src="https://i0.wp.com/webstarx.com/wp-content/uploads/2022/10/Modified-transformed.png?fit=457%2C443&ssl=1"
                    alt=""
                  />
                  <h4>Kamlesh Makwana</h4>
                  <div style={{ marginTop: "15px" }}>
                    <BasicRating />
                  </div>
                </div>
                <div className="para">
                  <span>
                    I am so pleased with the website .Excellent communication
                    before,durring and after th gig.Patient wilst waiting for
                    information form me.Very helpful throughout the entie
                    process.Created logo and their items which we were not part
                    of the gig!Highly recommended.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide virtualIndex={1}>
              <div className="testmonialDIv">
                <div>
                  <img
                    className="my_img"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "100px",
                    }}
                    src="https://i0.wp.com/webstarx.com/wp-content/uploads/2022/10/Capture-1.jpg?fit=581%2C623&ssl=1"
                    alt=""
                  />
                  <h4>Kimmie Thomas</h4>
                  <div style={{ marginTop: "15px" }}>
                    <BasicRating />
                  </div>
                </div>
                <div className="para">
                  <span>
                    It was a pleasure working with Bilal. He was easy to
                    communicate with and even made suggestions to make my
                    website better. I have received positive feedback. Will work
                    with him again soon.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide virtualIndex={1}>
              <div className="testmonialDIv">
                <div>
                  <img
                    className="my_img"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "100px",
                    }}
                    src="https://i0.wp.com/webstarx.com/wp-content/uploads/2022/09/a5221f13-0508-404c-bf64-f8cfcbd88ddb.jpeg?fit=250%2C250&ssl=1"
                    alt=""
                  />
                  <h4>Amir Butt</h4>
                  <div style={{ marginTop: "15px" }}>
                    <BasicRating />
                  </div>
                </div>
                <div className="para">
                  <span>
                    WebstarX is very professional helpful courteous respectful
                    has great knowledge very detailed. A pleasure to work with I
                    highly recommend him you will not be disappointed. Thanks so
                    much for your great support I will come back and give you
                    more projects.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide virtualIndex={1}>
              <div className="testmonialDIv">
                <div>
                  <img
                    className="my_img"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "100px",
                    }}
                    src="https://i0.wp.com/webstarx.com/wp-content/uploads/2022/09/new-logo-scaled-1.jpg?fit=2560%2C2149&ssl=1"
                    alt=""
                  />
                  <h4>Ahmad</h4>
                  <div style={{ marginTop: "15px" }}>
                    <BasicRating />
                  </div>
                </div>
                <div className="para">
                  <span>
                    Bilal is an extraordinary person. His professionalism and
                    communication skills are one of best I’ve seen while doing
                    business on Fiver. Bilal knows his craft and absolutely
                    understands how to complete the tasks given and in a timely
                    manner. Use his service, you’ll be GLAD you did.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide virtualIndex={1}>
              <div className="testmonialDIv">
                <div>
                  <img
                    className="my_img"
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "100px",
                    }}
                    src="https://i0.wp.com/webstarx.com/wp-content/uploads/2022/10/Modified-transformed.png?fit=457%2C443&ssl=1"
                    alt=""
                  />
                  <h4>Kamlesh Makwana</h4>
                  <div style={{ marginTop: "15px" }}>
                    <BasicRating />
                  </div>
                </div>
                <div className="para">
                  <span>
                    I am so pleased with the website .Excellent communication
                    before,durring and after th gig.Patient wilst waiting for
                    information form me.Very helpful throughout the entie
                    process.Created logo and their items which we were not part
                    of the gig!Highly recommended.
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Faqs />
    </>
  );
};

export default Client;

export function BasicRating() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 1 },
      }}
    >
      <Rating
        name="read-only"
        className="stars"
        size="small"
        value={5}
        readOnly
      />
    </Box>
  );
}
