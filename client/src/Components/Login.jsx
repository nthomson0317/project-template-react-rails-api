import React from 'react'
import {useState} from 'react';
import '@fontsource/roboto'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Login(props) {
   
    // STATE BELOW
    const [userName, setUserName]=useState("")
     //STATE NUMBER 2
    const [password, setPassword]=useState("")

    const classes = useStyles()


  
let submitHandler = (e) => {
    e.preventDefault()

    let formData = { 
        username: userName,    
        password: password}      
        props.handleSubmit(formData)
        // console.log(formData)
  }


const handleChangeUserName = (e) => {
      setUserName(e.target.value)}

const handleChangePassword = (e) => {
      setPassword(e.target.value)}



 
    return (
        <div>    
            <form onSubmit={submitHandler}>
             <h1>{props.formName}</h1>
             <TextField 
             label="Username"
             type="text" 
             autoComplete="off"
             variant="outlined"
             name="username"
             value={userName}
             onChange={handleChangeUserName}
             className={classes.root}
             htmlFor="username"></TextField>
             <TextField htmlFor="password"
             label="Password"
             type="text" 
             autoComplete="off"
             variant="outlined"
              name="password"
              value={password}
              onChange={handleChangePassword}
              className={classes.root}
             />
               <input type="submit" value="Submit"/>
             </form>
        </div>
    )
}
