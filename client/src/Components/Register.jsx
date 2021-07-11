import React from 'react'
import {useState} from 'react';
import '@fontsource/roboto'




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
               {/* other inputs */}


               <label htmlFor="name">Name:</label>
             <input type="name" autoComplete="off"
                name="name"
                value={name}
                onChange={handleChangeName}
             />
               <label htmlFor="rating">Rating:</label>
             <input type="rating" autoComplete="off"
                name="rating"
                value={rating}
                onChange={handleChangeRating}
             />
               <label htmlFor="age">Age:</label>
             <input type="age" autoComplete="off"
                name="age"
                value={age}
                onChange={handleChangeAge}
             />
               <label htmlFor="profile_pic">Profile Picture URL:</label>
             <input type="profile_pic" autoComplete="off"
                name="profile_pic"
                value={profile_pic}
                onChange={handleChangeProfilePic}
             />
                <label htmlFor="country">Country</label>
             <input type="country" autoComplete="off"
                name="country"
                value={country}
                onChange={handleChangeCountry}
             />
               <input type="submit" value="Submit"/>

             </form>
        </div>
    )

}