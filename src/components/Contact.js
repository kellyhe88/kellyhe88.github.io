import React from "react"; // rafce is shortcut
import { Typography, Avatar, Box, Link } from "@material-ui/core";
// import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import info1 from "../img/wok_logo-min.png";
import info2 from "../img/clock.png";
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import PaymentIcon from '@material-ui/icons/Payment';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DateRangeIcon from '@material-ui/icons/DateRange';


// CSS STYLES
const useStyles = makeStyles((theme) => ({
  contentArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundSize: "auto 100%",
    backgroundColor: "white",
    height: "auto",
    // background: `url(${backgroundImg}) no-repeat center`,
    zIndex: 1, // specifies stack order
    // border: "2px white solid",
    borderBottom: `3px ${theme.palette.primary.light} solid`,
    // [theme.breakpoints.down("xl")]: {
    //   height: "500px",
    // },
    // [theme.breakpoints.down("xl")]: {
    //   height: "600px",
    // },
    // [theme.breakpoints.down("md")]: {
    //   height: "750px",
    // },
  },
  avatar: {
    display: "block",
    marginRight: theme.spacing(3),
    width: theme.spacing(6.5), // different way to set size of avatar pic
    height: theme.spacing(6.5),
  },
  title: {
    fontSize: "2rem",
    color: theme.palette.primary.dark,
    margin: "4rem 0 3rem 0",
  },
  subtitle: {
    color: theme.palette.primary.dark,
    marginBottom: "3rem",
    textAlign: "left",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  info1: {
    width: "21%",
    // border: "2px black solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    [theme.breakpoints.down("xl")]: {
      width: "21%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "25%",
    },
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto 0 auto"
    },
  },
  info2: {
    width: "21%",
    // border: "2px black solid",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    [theme.breakpoints.down("xl")]: {
      width: "21%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "25%",
    },
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto 0 auto"
    },
  },
  link: {
    "&:hover": {
      color: theme.palette.secondary.main,
    }
  }
}));

const Intro = () => {
  const classes = useStyles();

  return (
    <Box className={classes.contentArea}>

      <Typography className={classes.title}>
        Contact and Info
      </Typography>
      <Box className={classes.info}>
        <Box className={classes.info1}>
          <Avatar className={classes.avatar} src={info1} alt="Info"></Avatar>
          <Typography className={classes.subtitle}>
            <Box display="flex" flexDirection="row">
              <RoomIcon />
              <Link href="https://goo.gl/maps/e9Y4aE43H8j5NYUR7" target="_blank" className={classes.link} underline='none'>

                <Box margin="0 0 .2rem .5rem"> 300 E Greentree Rd #15 <br /> Marlton, NJ 08053</Box>
              </Link>
            </Box>
            <br />
            <Box display="flex" flexDirection="row">
              <PhoneIcon />
              <Box margin="0 0 .2rem .5rem">
                <Link href="tel:856-983-2495" className={classes.link} underline='none'>(856) 983 2495</Link> <br />
                <Link href="tel:856-983-2496" className={classes.link} underline='none'>(856) 983 2496</Link> <br />
              </Box>
            </Box>
            <br />
            <Box display="flex" flexDirection="row">
              <ThumbUpIcon />
              <Link href="https://www.facebook.com/TedsChineseFood" className={classes.link} underline='none'>

                <Box margin="0 0 .2rem .5rem"> Like us on Facebook <br /> and follow for updates!</Box>
              </Link>
            </Box>
            <br />
            <Box display="flex" flexDirection="row">
              <PaymentIcon />
              <Box margin="0 0 .2rem .5rem"> We accept major credit cards,<br />  cash, Venmo, and PayPal</Box> <br />
            </Box>

          </Typography>
        </Box>
        <Box width="2%">

        </Box>
        <Box className={classes.info2}>
          <Avatar className={classes.avatar} src={info2} alt="Info"></Avatar>

          <Typography className={classes.subtitle}>
            <Box display="flex" flexDirection="row">
              <DriveEtaIcon />
              <Box margin="0 0 .2rem .5rem">Pick Up and Delivery <br />(No Dine-In Currently)</Box> <br />
            </Box>
            <br />
            <Box display="flex" flexDirection="row">
              <DateRangeIcon />
              <Box display="flex" flexDirection="column">
                <Box margin="0 0 .2rem .5rem">Monday: 11am - 9pm</Box>
                <Box margin="0 0 .2rem .5rem">Tuesday: CLOSED</Box>
                <Box margin="0 0 .2rem .5rem">Wednesday: 11am - 9pm</Box>
                <Box margin="0 0 .2rem .5rem">Thursday: 11am - 9pm</Box>
                <Box margin="0 0 .2rem .5rem">Friday: 11am - 9:30pm</Box>
                <Box margin="0 0 .2rem .5rem">Saturday: 11am - 9:30pm</Box>
                <Box margin="0 0 .2rem .5rem">Sunday: 2pm - 9pm</Box>
              </Box>
            </Box>

          </Typography>
        </Box>
      </Box>
    </Box >
  );
};

export default Intro;