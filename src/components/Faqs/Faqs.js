import React, { useState } from "react";
import "./Faqs.css";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Contact from "../contact/contact";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faqs = () => {
  const data1 = [
    {
      question: "What do you needto get started?",
      answer:
        "You will need your domain name and hosting details. If you don’t have these yet, we can assist you in the process.",
    },
    {
      question: "Do you provide premium plugins and themes?",
      answer:
        "Yes, We have a good amount of premium themes and plugins. We provide Premium plugins and themes free with our service.",
    },
    {
      question: "Do you provide support after the delivery?",
      answer:
        "Yes, We will provide you 90 days of support for Free in case you need it.",
    },
    {
      question: "Do you provide support after the delivery?",
      answer:
        "Yes, We will provide you 90 days of support for Free in case you need it.",
    },
    {
      question: "Do you provide support after the delivery?",
      answer:
        "Yes, We will provide you 90 days of support for Free in case you need it.",
    },
  ];

  const [isOpen, setIsOpen] = useState(null);

  const toggleOpen = (id) => () =>
    setIsOpen((isOpen) => (isOpen === id ? null : id));
  return (
    <>
    <div id="faqs" className="faqs_page">
      <div style={{ marginTop: "2%", marginBottom: "4%" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", color: "black", fontWeight: "bold" }}
        >
          FAQS
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", color: "black", marginBottom: "5px",marginTop:"20px" }}
        >
          If your question is not mentioned, Feel free to ask me or Let’s do
          talk about our future collaboration
        </Typography>
      </div>
      <div className="faq_data">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <div className="faq_main">
              {data1.map((value1, index) => {
                return (
                  <Accordion
                    key={index}
                    className="faqs_accordian"
                    isOpen={isOpen === index}
                    toggle={toggleOpen(index)}
                  >
                    <AccordionSummary
                      style={{
                        borderLeft: "3px solid rgb(235, 228, 33)",
                      }}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography
                        style={{ fontWeight: 900, fontSize: "18px" }}
                        className="faq_quest"
                        variant="h6"
                      >
                        {value1.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="faq_detail">
                      <Typography
                        style={{
                          color: "rgb(128, 126, 126)",
                          fontSize: "14px",
                          marginTop: "10px",
                        }}
                        variant="subtitle1"
                      >
                        {value1.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="faq_main">
              {data1.map((value1, index) => {
                return (
                  <Accordion
                    key={index}
                    className="faqs_accordian"
                    isOpen={isOpen === index}
                    toggle={toggleOpen(index)}
                  >
                    <AccordionSummary
                      style={{
                        borderLeft: "3px solid rgb(235, 228, 33)",
                      }}
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography
                        style={{ fontWeight: 900, fontSize: "18px" }}
                        className="faq_quest"
                        variant="h6"
                      >
                        {value1.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="faq_detail">
                      <Typography
                        style={{
                          color: "rgb(128, 126, 126)",
                          fontSize: "14px",
                          marginTop: "10px",
                        }}
                        variant="subtitle1"
                      >
                        {value1.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
    <Contact/>
    </>
  );
};

export default Faqs;
