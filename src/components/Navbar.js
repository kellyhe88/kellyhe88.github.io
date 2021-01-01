import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

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
  barStyle: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.textColors.dark,
    borderBottom: `3px ${theme.palette.primary.dark} solid`,

  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.barStyle}>
        <Toolbar scrollBehavior="smooth">
          {/* <Button color="inherit" href='#intro'> Menu </Button> */}
          {/* <OrderButton /> */}
          {/* <Button color="inherit" href='https://www.qmenu.us/#/shanghai-express-marlton' target="_blank"> Order Online </Button> */}
          <Button color="inherit" href='#contact'> Contact & Info </Button>
          <Button color="inherit" href='#aboutus'> About Us </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

