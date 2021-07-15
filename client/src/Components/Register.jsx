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




export default function Register(props) {
   
    // STATE BELOW
    const [userName, setUserName]=useState("")
     //STATE NUMBER 2
    const [password, setPassword]=useState("")
     //STATE NUMBER 3
    const [name, setName]=useState("")
     //STATE NUMBER 4
    const [rating, setRating]=useState("")
     //STATE NUMBER 5
     const [age, setAge]=useState("")
     //STATE NUMBER 6
     const [profile_pic, setProfilePic]=useState("")
    //STATE NUMBER 7
     const [country, setCountry]=useState("")

     const classes = useStyles()

  
let submitHandler = (e) => {
    e.preventDefault()

    let formData = { 
        username: userName,    
        password: password,  
        name: name,
        rating: rating,
        age: age,
        profile_pic: profile_pic,
        country: country
    }
    props.handleSubmit(formData)
    }


const handleChangeUserName = (e) => {
      setUserName(e.target.value)}

const handleChangePassword = (e) => {
      setPassword(e.target.value)}

const handleChangeName = (e) => {
      setName(e.target.value)}

const handleChangeRating = (e) => {
      setRating(e.target.value)}

const handleChangeAge = (e) => {
      setAge(e.target.value)}

const handleChangeProfilePic = (e) => {
    setProfilePic(e.target.value)}

const handleChangeCountry = (e) => {
     setCountry(e.target.value)}




 
    return (
        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>    
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
              
             <TextField 
             label="Password"
             type="text"
             htmlFor="password"
             autoComplete="off"
             variant="outlined"
             name="password"
             value={password}
             onChange={handleChangePassword}
             className={classes.root}
             htmlFor="password"></TextField>
             <TextField 
             htmlFor="name"
             label="Name"
             type="name" 
             autoComplete="off"
             variant="outlined"
             name="name"
             value={name}
             onChange={handleChangeName}
             className={classes.root}
             htmlFor="Name"></TextField>
             <TextField
            label="Rating"
            type="text" 
            autoComplete="off"
            variant="outlined"
            name="rating"
            value={rating}
            onChange={handleChangeRating}
            className={classes.root}
            htmlFor="rating"></TextField>
             <TextField 
             label="Age"
             htmlFor="age"
             type="text" 
             autoComplete="off"
             variant="outlined"
             name="age"
             value={age}
             onChange={handleChangeAge}
             className={classes.root}></TextField>
            <TextField
            label="Profile Pic"
             htmlFor="profile_pic"
             type="text" 
             autoComplete="off"
             variant="outlined"
             name="profile_pic"
             value={profile_pic}
             onChange={handleChangeProfilePic}
             className={classes.root}></TextField>
            <TextField 
            label="Country"
            htmlFor="country"
            type="text" 
            autoComplete="off"
            variant="outlined"
            name="country"
            value={country}
            onChange={handleChangeCountry}
            className={classes.root}></TextField>
               <Button
               label="Submit"
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                 value="Submit">Submit</Button>

             </form>
        </div>
    )

}