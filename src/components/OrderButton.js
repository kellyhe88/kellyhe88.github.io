import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import { useScript } from "./useScript.js"

const useStyles = makeStyles((theme) => ({
  orderbutton: {
    margin: "1rem auto 1rem auto",
    width: "13rem",
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.textColors.light
  },
}));

export default function OrderButton() {
  const classes = useStyles();

  return (
    <Box textAlign="center">
      {/* <Button size="Large" color="secondary" className={classes.orderbutton} onClick={useScript("https://www.fbgcdn.com/embedder/js/ewm2.js")} data-glf-cuid="516dd87a-b860-4d05-979f-12f3265a04f7" data-glf-ruid="8e6427b9-5236-488a-a1be-563cf6d6d84a" > See MENU & Order</Button> */}

      <Button variant="contained" size="Large" className={classes.orderbutton} href="https://www.qmenu.us/#/shanghai-express-marlton" target="_blank">
        View Menu & Order Online
      </Button>
    </Box>
  );
}

