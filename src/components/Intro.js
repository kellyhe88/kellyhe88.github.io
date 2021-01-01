import React from "react"; // rafce is shortcut
import { Box } from "@material-ui/core";
// import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

import backgroundGif from "../img/Banner3.gif";
import OrderButton from './OrderButton.js';


// CSS STYLES
const useStyles = makeStyles((theme) => ({
  // box that holds everything to center things
  // root: {
  //   display: "flex",
  //   verticalAlign: "bottom",
  // },
  contentArea: {
    backgroundSize: "auto 140%",
    height: "600px",
    background: `url(${backgroundGif}) no-repeat center`,
    zIndex: 1, // specifies stack order
    // border: "2px white solid",
    borderBottom: `3px ${theme.palette.primary.dark} solid`,
    [theme.breakpoints.down("xl")]: {
      height: "600px",
    },
    [theme.breakpoints.down("md")]: {
      height: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "350px",
    },
  },
  button: {
    // height: "100px",
    // display: "flex",
    // flexDirection: "rtl",
    // border: "2px black solid",
    padding: "500px 0 0 0",
    [theme.breakpoints.down("xl")]: {
      padding: "500px 0 0 0"
    },
    [theme.breakpoints.down("md")]: {
      padding: "400px 0 0 0"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "265px 0 0 0"
    },
  }
}));

const Intro = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.contentArea}>
        <div className={classes.button}><OrderButton /></div>

      </Box>
    </div>

  );
};

export default Intro;