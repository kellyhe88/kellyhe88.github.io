import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" style={{ alignItems: 'center' }}>
        <Toolbar scrollBehavior="smooth" >
          <Typography style={{ color: "white" }}>
            © Copyright 2020 Shanghai Express | Last Updated 12/20/2020
          </Typography>
          {/* <Button color="textSecondary" href='#intro'>Home</Button>
          <Button color="textSecondary" href='https://www.qmenu.us/#/shanghai-express-marlton' target="_blank">Order Online</Button>
          <Button color="textSecondary" href='#contact'>Contact & Info</Button> */}
        </Toolbar>
      </AppBar>
    </div >
  );
}

