import React from 'react'
import {useState} from 'react';
import '@fontsource/roboto'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddForm(props) {

     // STATE BELOW
     const [name, setName]=useState("")
     //STATE NUMBER 2
    const [moves, setMoves]=useState("")
    //STATE NUMBER 3
    const [opening, setOpening]=useState(0)
    //STATE NUMBER 4
    const [notes, setNotes]=useState('')

    const classes = useStyles()


  
let submitHandler = (e) => {
    e.preventDefault()

    let formData = { 
        name: name,    
        moves: moves,
        notes: notes,
        opening_id: opening}      
        props.handleGameSubmit(formData)
        // console.log(formData)
  }


const handlePlayers = (e) => {
      setName(e.target.value)}

const handleMoves = (e) => {
      setMoves(e.target.value)}

const handleOpening = (e) => {
        setOpening(e.target.value)}

const handleNotes = (e) => {
        setNotes(e.target.value)}


    return (
<div>    
            <form onSubmit={submitHandler}>
             <h1>{props.formName}</h1>
             <TextField 
             label="Name"
             type="text" 
             autoComplete="off"
             variant="outlined"
             name="name"
             value={name}
             onChange={handlePlayers}
             className={classes.root}
             htmlFor="username"></TextField>
             <TextField htmlFor="moves"
             label="Moves"
             type="text" 
             autoComplete="off"
             variant="outlined"
              name="moves"
              value={moves}
              onChange={handleMoves}
              className={classes.root}></TextField>
            <TextField htmlFor="opening"
             label="Opening ID"
             type="text" 
             autoComplete="off"
             variant="outlined"
              name="opening"
              value={opening}
              onChange={handleOpening}
              className={classes.root}></TextField>
            <TextField htmlFor="notes"
             label="Notes"
             type="text" 
             autoComplete="off"
             variant="outlined"
              name="notes"
              value={notes}
              onChange={handleNotes}
              className={classes.root}></TextField>
               <Button
               label="Submit"
                type="submit"
                variant="contained"
                color="primary"
                 value="Submit">Submit</Button>
             </form>
        </div>
    )
}
