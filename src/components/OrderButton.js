import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  orderbutton: {
    margin: "1rem auto 1rem auto",
    width: "10rem",
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.textColors.light
  },
}));

export default function OrderButton() {
  const classes = useStyles();

  return (
    <Box textAlign="center">
      <Button variant="contained" size="Large" className={classes.orderbutton} href="https://www.qmenu.us/#/shanghai-express-marlton" target="_blank">
        Order Online
      </Button>
    </Box>
  );
}