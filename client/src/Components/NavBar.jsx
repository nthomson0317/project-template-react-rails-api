import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto'
import { Link } from 'react-router-dom'



export default function NavBar({classes}) {
    const styles = {
        // this group of buttons will be aligned to the right side
        toolbarButtons: {
          marginLeft: 'auto',
        },
      };

    return (

        <div >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Open Chessame
              <div className={styles.toolbarButtons}>
              
              <Link to={'/login'}>
            <div className="login">
            <Button color="default"
            variant="outlined">Login</Button>
            </div>
          </Link>
           
            <Link to={'/register'}>
            <Button variant="contained"
            color="secondary"
            align="right">
                Signup
            </Button>
            </Link>
            </div>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

    )
}
