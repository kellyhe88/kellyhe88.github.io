import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import OrderButton from './OrderButton.js';
import GridImages from './GridImages';
import { Typography, Box, Divider } from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import Typed from "react-typed";


const useStyles = makeStyles((theme) => ({
  contentArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center", // makes it vertically centered
    textAlign: "center",
    // width: "100%",
    height: "auto",
    // background: `url(${backgroundImg}) repeat center center`,
    zIndex: 1, // specifies stack order
    // border: "2px white solid",
    backgroundColor: theme.palette.primary.main,
    borderBottom: `3px ${theme.palette.primary.dark} solid`,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  wholeContentArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // makes it vertically centered
    textAlign: "center",
    // width: "100%",
    height: "auto",
    // background: `url(${backgroundImg}) repeat center center`,
    zIndex: 1, // specifies stack order
    // border: "2px white solid",
    backgroundColor: theme.palette.primary.main,
    borderBottom: `3px ${theme.palette.primary.dark} solid`,
    // [theme.breakpoints.down("sm")]: {
    //   flexDirection: "column",
    // },
  },
  appetizers: {
    display: "block",
    margin: theme.spacing(3),
    width: theme.spacing(35),
    height: theme.spacing(25),
    // backgroundSize: "auto auto",
    // background: `url(${appetizer1})`,
    // borderRadius: "0.5rem",
    // border: `.1rem ${theme.palette.accent2.dark} solid`,
    // "&:hover": {
    // background: `url(${appetizer2})`,
    // }
  },
  left: {
    width: "60%",
    margin: "0 0 4rem 0",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      margin: "0 -0.75rem 2rem auto"
    },
  },
  right: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-around",
    width: "30%",
    textAlign: "left",
    minHeight: "600px",
    margin: "0 0 1rem 0",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      margin: "0 auto 1rem auto",
      minHeight: "700px",
    },
  },
  reviews: {
    margin: "1rem 0 2rem 0",
  },
  aboutUs: {
    fontSize: "2rem",
    color: theme.palette.textColors.dark,
    margin: "2.5rem 0 1rem 0",
    textAlign: "center",
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: "1.5rem"
  },
  subtitle: {
    color: theme.palette.textColors.dark,
    fontSize: "1.04rem"
  }
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <Box className={classes.wholeContentArea}>
      <Typography className={classes.aboutUs}>About Us</Typography>
      <Box className={classes.contentArea}>
        <Box className={classes.left} >
          <GridImages />
        </Box>
        <Box className={classes.right} >
          <Box margin="0 0 1rem 0">
            <Typography className={classes.subtitle}>
              Hi Everyone! <br /> <br />
              We are a family-owned Chinese restaurant, and we've been open for over 29 years!
              We hope you enjoy the food as much as we do. Thank you to all of our loyal customers!<br /> <br />
              - Shanghai Express
            </Typography>
          </Box>
          <Divider />
          <Box className={classes.reviews}>
            <Typography className={classes.title}>
              Reviews from Google <br />
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </Typography>
            <Typography className={classes.subtitle}>
              <Typed strings={[
                "I've been coming to this establishment for over 28 years. The same wonderful family had owned and operated this place since it's inception. Excellent food at great prices! Highly recommend it, I honestly won't eat at any other Asian establishment. THAT good. -Angel",
                "Excellent as usual. This places has been around a very long time. The husband and wife team makes this place a pleasure to visit and help their business. They make an effort to welcome everyone. People actually miss this place when they move away. -Christian",
                "I eat in this spot a lot since I work in the area. I must say the service is always good and they keep the place neat regularly. Pricing is reasonable and they serve large portions. -Donald",
                "The food and service is always great. We are glad they are still open for takeout and have appropriate safety protocols in place. -Paul",
                "The owners are awesome! They're very accommodating and super friendly. Best Chinese in Marlton! -Jannette",
                "Ted always makes me feel welcome. Very friendly man. Food is absolutely delicious. The best Chinese food I’ve ever had! -Turquoise",
                "Wonderful food. Reasonable prices and the most polite and welcoming staff. This was my first time here and they made us feel like family. They have lots of customers that frequent this place so often they know and greeted everyone by name. I am impressed with the quality of service and quality of food I myself will be one of those customers that are known by name. We now won't go anywhere else. Thank you for the wonderful food and great atmosphere. -Elizabeth",
                "Excellent! The food was very good and the staff was so nice! Greeting customers by name as they came in. Fantastic service. We will be back. -Rebecca",
                "Really good food and amazing service at an awesome price. Love this place -Brennan",
                "One of the great ones. Shanghai Express serves excellent food with a friendly and inviting atmosphere. The owner Ted is almost always there to greet you and takes a genuine interest in the customer and makes you feel like you belong there.  Go out of your way to try this place, tell him the tent guy sent you! -William",
                "This is the hidden secret.  Well not now.  Just got done eating and I am about to leave and I have to finish this review before I leave.  The service makes you believe you are part of the family honest.  The food was delicious,  General Tso Chicken was the best I have had in years.  Wife's Seasme Chicken also perfect.  Trust me you past this place tons of times blink you will miss it.  Don't. It's in a strip mall but don't let that make up your mind.  It could be in a high end chain easily beating them. -Anon",
                "The owners are so pleasant. The food is the best in the area. Stop in, you won't be sorry -Andrew",
                "The owner Teddy is so welcoming. He knows all his customers by name. The food is awesome. The best General's chicken I ever had. From the soup to egg rolls to your dinner, everything is made fresh and delicious. Service is great. It's a family affair with his wife waitressing. The menu is large and they will gladly accommodate any special requests. Most of their business is repeat customers who come for the good food and to be warmly greated by Teddy. They do deliver lunch and dinner. You won't disappointed! -Barbara",
                "Always treated like family...!  Teddy ALWAYS remembers our name! And his food is wonderful and consistently delicious! -Kim",
                "Generous portions. Great taste. Exceptional service. -David",
                "Been going here/getting delivery from here for YEARS!!! Best Chinese food in town, probably in the tri-state area - just sayin! The gang here has never ceased to amaze and the food never disappoints! GO HERE NOW!! :-) -Anthony",
                "Of all the Chinese restaurants that I have eaten in in all the years I have lived in SNJ, I have never had a better meal then here. The food is fresh, properly cooked, and the owners are great, they care, they really are that their customers are happy. -C",
                "Great food with superior service! Highly recommend! -Mickey",
                "Amazing food with equally amazing staff!!! -Vayun",
                "Great place they treat you like family -Zachary",
                "Best Chinese. Been going there for 25 years. -Margaret",
                "Best Chinese food in south jersey. Owner goes above and beyond for his customers -Neil",
              ]}
                typeSpeed={15}
                // backSpeed={50}
                loop />
            </Typography>
          </Box>
        </Box>
      </Box >
    </Box>
  );
}
