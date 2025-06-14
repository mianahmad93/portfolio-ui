import React from "react";
import "./footer.css";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div className="footer_page">
      <Typography sx={{textAlign:"center",color:"white",fontWeight:"400",fontFamily:"Poppins,Sens-serif",padding:"0.8%"}} variant="h6" gutterBottom>
      © 2021-2022 webstarx.com All Rights Reserved
      </Typography>
    </div>
  );
};

export default Footer;
