import './App.css';
import {Switch, Link, Route, withRouter, Redirect, BrowserRouter} from 'react-router-dom'
import NavBar from './Components/NavBar';
import User from './Components/User';
import Login from './Components/Login';
import Home from './Components/Home';
import {useState, useEffect } from 'react';
import Register from './Components/Register';
import Game from './Components/Game';
import Learn from './Components/Learn';

function App(props) {
  const [currentUser,setCurrentUser]=useState({
    id: 0,
    username:'',
    name:"",
    rating: 0,
    age:0,
    profile_pic:"",
    country:"",
    token: "",
    openings: [],
    games: []
    })

    useEffect(() => {
      if(localStorage.token){
  
        fetch("http://localhost:3000/me", {
          headers: {
            "authorization": localStorage.token
          }
        })
          .then(res => res.json())
          .then((res) => handleResponse(res))
  
      }
    }, [])
 

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
    // console.log(resp.user)
    if(resp.token){
      setCurrentUser({
        id: resp.user.id,
        username: resp.user.username,
        name: resp.user.name,
        rating: resp.user.rating,
        age: resp.user.age,
        profile_pic: resp.user.profile_pic,
        country: resp.user.country,
        token: resp.token,
        openings: resp.openings,
        games: resp.games
      })
  
      localStorage.token = resp.token
      props.history.push("/user")
      
    } else {
      alert("Username or password is incorrect")
    }
  }

  let handleRegisterResponse = (resp) => {
    console.log(resp)
    if(resp.errors){
      alert(resp.errors)
    }
    else 
      alert("New user registered.")
      props.history.push("/login")
  }
  


  const logOut = () => {
    setCurrentUser({
      id: 0,
      username:'',
      name:"",
      rating: 0,
      age:0,
      profile_pic:"",
      country:"",
      token: "",
      openings: [],
      games: []
    })
    localStorage.clear()

  }
  const renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Login style={{ 
        color: 'rgba(210, 220, 231, 1)'}}
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

//  THIS IS OUR HANDLE SUBMIT FOR SUBMITTING AN OPENING
  const handleOpeningSubmit = (formData) => {
   
    fetch("http://localhost:3000/openings", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "authorization": currentUser.token
        },
        body: JSON.stringify(
          formData
        )
        })
        .then(res => res.json())
        .then((res) => addOpeningToState(res))
}

//THIS IS OUR HANDLE SUBMIT FOR ADDING A GAME
const handleGameSubmit = (formData) => {
 

  fetch("http://localhost:3000/games", {
      method: "POST",
      headers: {
          "Content-type": "application/json",
          "authorization": currentUser.token
      },
      body: JSON.stringify({
        name: formData.name,
        moves: formData.moves,
        notes: formData.notes,
        opening_id: formData.opening_id
      })
      })
      .then(res => res.json())
      .then((res) => addGameToState(res))
      // addGameToState
}

// CHANGE THE STATE OF OPENINGS IN ZE FRONT
const addOpeningToState = (newlyCreatedOpening) => {
  console.log(currentUser.openings)
 let copyOfOpenings= [...currentUser.openings, newlyCreatedOpening]
 console.log(newlyCreatedOpening)
 console.log(copyOfOpenings)


 setCurrentUser({
  id: currentUser.id,
  username: currentUser.username,
  name: currentUser.name,
  rating: currentUser.rating,
  age: currentUser.age,
  profile_pic: currentUser.profile_pic,
  country: currentUser.country,
  token: currentUser.token,
  openings: copyOfOpenings,
  games: currentUser.games
 })
}

//DELETE OPENING FROM STATE IN THE FRONT
const deleteOpeningFromState = (deletedId) => {
   let copyOfOpenings = currentUser.openings.filter((openingObj) => {
     return openingObj.id !== deletedId
   })
   setCurrentUser({
    id: currentUser.id,
    username: currentUser.username,
    name: currentUser.name,
    rating: currentUser.rating,
    age: currentUser.age,
    profile_pic: currentUser.profile_pic,
    country: currentUser.country,
    token: currentUser.token,
    openings: copyOfOpenings,
    games: currentUser.games
   })
   console.log(currentUser.openings)
}

//ADD GAME TO STATE IN THE FRONT
const addGameToState = (newlyCreatedGame) => {
  console.log(currentUser)
 let copyOfGames= [...currentUser.games, newlyCreatedGame]
 console.log(newlyCreatedGame)
 console.log(copyOfGames)


 setCurrentUser({
  id: currentUser.id,
  username: currentUser.username,
  name: currentUser.name,
  rating: currentUser.rating,
  age: currentUser.age,
  profile_pic: currentUser.profile_pic,
  country: currentUser.country,
  token: currentUser.token,
  openings: currentUser.openings,
  games: copyOfGames
 })

 console.log(currentUser)

}

const renderLearn = (routerProps) => {
  return <Learn />
}


  const renderProfile = (routerProps) => {
    return <User user={currentUser}
    openings={currentUser.openings}
    openingSubmit={handleOpeningSubmit}
    deleteOpening={deleteOpeningFromState}
    history={props.history}
    />
  }


  // const renderGames = (routerProps) => {
  //     return (<Game user={currentUser}/>
  //     )
  // }

  const renderOpeningGames = (routerProps) => {
    console.log(currentUser)
    let openingGames = currentUser.games.filter((gameObj) => {
      return gameObj.opening_id == Number(routerProps.match.params.id)
    })
    return (<Game user={currentUser}
    openingGames={openingGames} deleteGameFromState={deleteGameFromState}
    handleGameSubmit={handleGameSubmit}/>
      )
    
  }


  //DELETE GAME FROM STATE IN THE FRONT
const deleteGameFromState = (deletedId) => {
   

  let copyOfGames = currentUser.games.filter((gameObj) => {
    return gameObj.id !== deletedId
  })
  setCurrentUser({
    id: currentUser.id,
    username: currentUser.username,
    name: currentUser.name,
    rating: currentUser.rating,
    age: currentUser.age,
    profile_pic: currentUser.profile_pic,
    country: currentUser.country,
    token: currentUser.token,
    openings: currentUser.openings,
    games: copyOfGames
  })
  
}
  console.log(currentUser)

  return (
    
           <div style={{ 
            backgroundImage: `url('https://cdn.dribbble.com/users/4154951/screenshots/14141953/media/8b80508e84327bb566b89c325d2da881.png')`,
            // backgroundRepeat: 'no-repeat',
            width:'1950px'
        }}>
              <NavBar logOut={logOut}/>
              <Switch>
               {/* FIRST ROUTE */}
          <Route path="/login" render={ renderForm } />
          <Route path="/register" render={ renderForm } />
          <Route path="/user" render={ renderProfile } />
          {/* <Route path="/games" render={ renderGames } /> */}
          <Route path="/openings/:id/games" render= { renderOpeningGames } />
          <Route path="/learn" render={ renderLearn } />
          <Route path={'/'} >
          <Home />
          </Route> 
            </Switch>
            <br></br>
            <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
    </div>





      
   
  );
}

export default withRouter(App);
