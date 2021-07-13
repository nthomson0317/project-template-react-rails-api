import React from 'react'
import '@fontsource/roboto'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    minWidth: 675,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});







export default function Game(props) {
 console.log(props)
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;

    // const deleteHandler = () => {
    //   fetch(`http://localhost:3000/openings/${props.opening.id}`, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-type": "application/json",
    //       "authorization": props.currentUser.token
    //   },
    //   })
    //     .then((r) => r.json())
    //     .then((r) => props.deleteOpening(r.id));
      
    
    
    return (

        <div>
          "Games component"
          </div>

   




    )
}


