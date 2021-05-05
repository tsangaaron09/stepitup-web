import React from "react";

const bannerStyle = {
  background: "linear-gradient(89.6deg, #0081A2 3.15%, #62497D 78.41%)",
  height: "10vh",
  borderRadius: "0px 0px 10px 10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const textStyle = {
  color: "white",
  margin: "5%",
};

const Title = () => {
  return (
    <h1 style={bannerStyle}>
      <span style={textStyle}>STEP-IT-UP</span>
    </h1>
  );
};

export default Title;
