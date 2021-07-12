import './App.css';
import {Switch, Link, Route, withRouter, Redirect} from 'react-router-dom'
import NavBar from './Components/NavBar';
import User from './Components/User';
import Login from './Components/Login';
import Home from './Components/Home';
import {useState} from 'react';
import Register from './Components/Register';



function App(props) {
  const [currentUser,setCurrentUser]=useState({
    id: 0,
    username:'',
    name:"",
    rating: 0,
    age:0,
    profile_pic:"",
    country:"",
    token: ""
    })
 

  const handleLoginSubmit = (formData) => {
      console.log(formData)

      fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify({
            formData
          })
          })
          .then(res => res.json())
          .then((res) => handleResponse(res))
  }

  const handleRegisterSubmit = (formData) => {
    console.log(formData)

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
            formData
        )
        })
        .then(res => res.json())
        .then((res) => handleRegisterResponse(res))
}

  let handleResponse= (resp) => {
    console.log(resp)
    console.log(resp.user)
    if(resp.token){
      setCurrentUser({
        id: resp.user.id,
        username: resp.user.username,
        name: resp.user.name,
        rating: resp.user.rating,
        age: resp.user.age,
        profile_pic: resp.user.profile_pic,
        country: resp.user.country,
        token: resp.token
      })
      // localStorage.token = resp.token
      props.history.push("/user")
      
    } else {
      alert("Username or password is incorrect")
    }
  }

  let handleRegisterResponse = (resp) => {
    console.log(resp)
    if(resp.id){
      alert("New user registered.")
      props.history.push("/login")
    }
    else {alert(resp.errors)
  }
  }

  const renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Login
        formName="Login Form"
        handleSubmit={handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <Register
        formName="Register Form"
        handleSubmit={handleRegisterSubmit}
      />
    }
  }

  const renderProfile = (routerProps) => {
    return <User username={currentUser.username}/>
  }


console.log(currentUser)
  return (
    
           <div>
              <NavBar/>
              <Switch>
               {/* FIRST ROUTE */}
          <Route path="/login" render={ renderForm } />
          <Route path="/register" render={ renderForm } />
          <Route path="/user" render={ renderProfile } />
          <Route path={'/'} >
          <Home />
          </Route> 
            </Switch>
    </div>





      
   
  );
}

export default withRouter(App);
