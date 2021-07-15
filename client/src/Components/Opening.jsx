import React from 'react'
import '@fontsource/roboto'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import {useState } from 'react';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 675,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)"
  }
}));



export default function Opening(props) {

  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })

  const [opening, setOpening] = useState({
    opening: ''
  })


    const classes = useStyles();
    // const history = useHistory();

    const handleClick = (e) => {
      // console.log(props.opening.id)
      // console.log(e.target)
      // console.log(props.currentUser.games)
      setOpening({
        opening: props.opening.id
      })
      console.log(opening)
  
       props.history.push(`/openings/${props.opening.id}/games`);
    }

    const deleteHandler = () => {
      fetch(`http://localhost:3000/openings/${props.opening.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          "authorization": props.currentUser.token
      },
      })
        .then((r) => r.json())
        .then((r) => props.deleteOpening(r.id));
    }

    
    return (
    <div>
        <br></br>
        <Card style={{ 
                color: 'rgba(250, 250, 255, 1)',
                backgroundColor: 'rgba(0, 11, 26, .7)'}}
        classes={{root: state.raised ? classes.cardHovered : ""}}
        onMouseOver={()=>setState({ raised: true, shadow:3})} 
        onMouseOut={()=>setState({ raised:false, shadow:1 })} 
        raised={state.raised} zdepth={state.shadow}
        variant="outlined"
        onClick={handleClick}
        > 
      <CardContent>
        <Typography variant="h3" component="h2">
          {props.opening.name}
        </Typography>
        <Typography variant="body2" component="p">
          {props.opening.moves}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>

    <Button size="small"
        onClick={deleteHandler}
        >Delete</Button>
    <br></br>
    </div>
    )
}

