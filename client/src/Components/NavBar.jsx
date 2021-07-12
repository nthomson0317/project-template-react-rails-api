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
      <AppBar position="static">
        <Toolbar>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}





// import React from 'react';
// import { Link } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


// export default function NavBar() {
//     const drawerWidth = 240
//     const classes = useStyles()
//     const useStyles = makeStyles((theme) => {
//         return {
//             appbar: {
//                 widtch: `calc(100% - ${drawerWidth}px)`
//             }
//         }
//     })
    





//     return (
//         <div>
// <AppBar
// className={classes.appbar}>
//     <Toolbar>
//        
//     </Toolbar>
// </AppBar>

//         </div>

    //     <div >
    //         <AppBar position="static">
    //             <Toolbar variant="dense">
    //             <IconButton edge="start"  color="inherit" aria-label="menu">
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" color="inherit">
    //       <nav class="navbar navbar-expand-md navbar-light">
    //             <a>Open Chessame</a>
    //           <div className="home">
              
    //             
           
    //         
    //         </div>
    //         </nav>
    //       </Typography>
  
    //         </Toolbar>
    //         </AppBar>
    //   </div>

//     )
// }
