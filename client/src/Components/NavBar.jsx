import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Switch, Link, Route, withRouter, Redirect} from 'react-router-dom'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
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

export default function NavBar(props) {
    const classes = useStyles();
   


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ 
            backgroundColor: 'rgba(0, 11, 26, 0.9)'}}>
        <Toolbar>
                <Link to={'/'}
                style={{ textDecoration: 'none' }}>
                <div className="home">
                <Button
                className = {classes.menuButton}
                variant="contained"
                color="default"
                >Home</Button>
                </div>
                </Link>
                <Link to={'/login'}
                style={{ textDecoration: 'none' }}>
                <div className="login">
                <Button
                className = {classes.menuButton}
                variant="contained"
                color="default"
                >Login</Button>
                </div>
                </Link>
                <Link to={'/register'}
                style={{ textDecoration: 'none' }}>
                <div className="register">
                <Button
                className = {classes.menuButton}
                variant="contained"
                color="default"
                >Signup</Button>
                </div>
                </Link>
                <Link to={'/'}
                style={{ textDecoration: 'none' }}>
                <Button 
                onClick={props.logOut}
                className = {classes.menuButton}
                variant="contained"
                color="default"
                >Log Out</Button>
                </Link>
                <Link to={'/learn'}
                style={{ textDecoration: 'none' }}>
                <div className="learn">
                <Button
                className = {classes.menuButton}
                variant="contained"
                color="default"
                >Learn Opening Theory</Button>
                </div>
                </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

