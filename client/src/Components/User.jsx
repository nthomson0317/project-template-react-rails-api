import React from 'react'
import '@fontsource/roboto'
import Typography from '@material-ui/core/Typography';
import Opening from './Opening';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {useState} from 'react';
import { blueGrey } from '@material-ui/core/colors'



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    text: {
        '&:hover': {
          backgroundColor: blueGrey[50],
        },
      },
}));




export default function User(props) {
    const classes = useStyles();
    
    // STATE NUMBER 1
    const [name, setName]=useState("")
     //STATE NUMBER 2
    const [moves, setMoves]=useState("")


    let submitOpeningHandler = (e) => {
        e.preventDefault()
    
        let formData = { 
            name: name,    
            moves: moves}      
            props.openingSubmit(formData)
    
      }
    
    
    const handleChangeName = (e) => {
          setName(e.target.value)}
    
    const handleChangeMoves = (e) => {
          setMoves(e.target.value)}




      // [{}, {}, {}] -> [<>, <>, <>]
  let arrayOfComponents = props.user.openings.map(openingObj => {
    return <Opening key={openingObj.id} 
    opening={openingObj}
    currentUser={props.user}
    deleteOpening={props.deleteOpening}
    history={props.history}/>
  })



console.log(props)

    return (
        <div>
            <Typography variant="h1" style={{ 
                color: 'rgba(250, 250, 255, 1)'}}>Welcome, {props.user.name} </Typography>
            <br></br>
            <br></br>
            <Typography variant="h4" style={{ 
                color: 'rgba(250, 250, 255, 1)',
                backgroundColor: 'rgba(0, 11, 26, 0.9)'}}> Username: {props.user.username}</Typography>
            <Typography variant="h4" style={{ 
                color: 'rgba(250, 250, 255, 1)',
                backgroundColor: 'rgba(0, 11, 26, 0.9)'}}> Rating: {props.user.rating} </Typography>
            <Typography variant="h4" style={{ 
                color: 'rgba(250, 250, 255, 1)',
                backgroundColor: 'rgba(0, 11, 26, 0.9)'}}> Country: {props.user.country}</Typography>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Typography variant="h1" style={{ 
                color: 'rgba(250, 250, 255, 1)'}}>Openings: </Typography>
            {arrayOfComponents}
            <Typography align="center" variant="h4" style={{ 
            backgroundColor: 'rgba(0, 11, 26, 0.9)',
            color: 'rgba(250, 250, 255, 1)'}}>Log a New Opening: </Typography>
            <form className={classes.root} noValidate autoComplete="off" align="center" style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <TextField id="standard-basic" label="Opening Name" onChange={handleChangeName} value={name}/>
            <TextField id="standard-basic" label="Opening Moves...Ex. 1.d4 Nf6 2.c4 g6" onChange={handleChangeMoves} value={moves}/>
            <Button variant="outlined" color="primary" type="submit" value="submit" onClick={submitOpeningHandler}>Submit</Button>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}
