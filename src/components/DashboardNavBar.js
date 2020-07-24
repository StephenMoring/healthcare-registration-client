import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Registration from './auth/Registration';

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

function DashboardNavBar() {
    const classes = useStyles();
    const [registrationOpen, setRegistrationOpen] = useState(false);
    
    const openRegistration = () => {
        setRegistrationOpen(true);
    }

    const handleChange = () => {
        setRegistrationOpen(false);
    }

    return(
        <div>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton edge="start" color="inherit" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Healthcare Registration Dashboard
            </Typography>
            <Button color="inherit" onClick={openRegistration}>Register</Button>
          </Toolbar>
        </AppBar>
        <Registration open={registrationOpen} onChange={handleChange}></Registration>
        </div>
    )
}


export default DashboardNavBar;