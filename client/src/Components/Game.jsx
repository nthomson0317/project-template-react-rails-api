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
  const classes = useStyles();
  
  console.log(props.user)
  
// GAMES DELETION BUTTON
  const deleteGameHandler = (id) => {
  
    console.log(id)
    fetch(`http://localhost:3000/games/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "authorization": props.user.token
    },
    })
      .then((r) => r.json())
      .then((r) => props.deleteGameFromState(id));
      // props.deleteGameFromState
  }


  
  // let gamesOpening = props.user.openings.find((opening) => {
  //  return opening.id == 
  // })
  let arrayOfComponents = props.openingGames.map(gameObj => {
     
  return (

  <Card key={gameObj.id} 
  game={gameObj}
  currentUser={props.user}
  history={props.history}>
  <CardContent>
  <Typography variant="h3" component="h2">
    {gameObj.name}
  </Typography>
  <br></br>
  <Typography variant="body2" component="p">
    Moves: {gameObj.moves}
  </Typography>

  <br></br>
  Notes: {gameObj.notes} 
  <br></br>
  <Button game={gameObj} onClick={() => {deleteGameHandler(gameObj.id)}}>Delete</Button>
  </CardContent>
  </Card>
  )})


   
    return (

          <div> 
          {arrayOfComponents}
          </div>
   




    )
    }


