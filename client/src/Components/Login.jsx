import React from 'react'
import {useState} from 'react';
import '@fontsource/roboto'




export default function Login(props) {
   
    // STATE BELOW
    const [userName, setUserName]=useState("")
     //STATE NUMBER 2
    const [password, setPassword]=useState("")








  
let submitHandler = (e) => {
    e.preventDefault()

    let formData = { 
        username: userName,    
        password: password}      
        props.handleSubmit(formData)

  }


const handleChangeUserName = (e) => {
      setUserName(e.target.value)}

const handleChangePassword = (e) => {
      setPassword(e.target.value)}






 
    return (
        <div>    
            <form onSubmit={submitHandler}>
             <h1>{props.formName}</h1>
             <label htmlFor="username">Username:</label>
                <input type="text" autoComplete="off"
                 name="username"
                 value={userName}
                 onChange={handleChangeUserName}
                />
             <label htmlFor="password">Password:</label>
             <input type="password" autoComplete="off"
                name="password"
                value={password}
                onChange={handleChangePassword}
             />
               <input type="submit" value="Submit"/>
             </form>
        </div>
    )
}
