import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const login = () =>{
    console.log('logged in');
    // code to open a dialogue and provide information
}

function DashboardNavBar() {
    const classes = useStyles();
    return(
        <AppBar>
          <Toolbar >
            <IconButton edge="start" color="inherit" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Healthcare Registration Dashboard
            </Typography>
            <Button color="inherit" onClick={login}>Register</Button>
          </Toolbar>
        </AppBar>
    )
}


export default DashboardNavBar;