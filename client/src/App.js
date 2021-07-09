import './App.css';
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import NavBar from './Components/NavBar';
import User from './Components/User';
import Login from './Components/Login';
import Home from './Components/Home';
import {useState} from 'react';


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

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
            formData
        )
        })
        .then(res => res.json())
        .then(handleResponse)
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
      // props.history.push("/")
      
    } else {
      alert("Username or password is incorrect")
    }
  }

  const renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Login
        formName="Login Form"
        handleSubmit={handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <Login
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
              <NavBar
                
                //  loginState={loginState}
                //  toggleLoginState={toggleLoginState}
              />
              <Switch>
                

               {/* FIRST ROUTE */}
          <Route path="/login" render={ renderForm } />
          <Route path="/register" render={ renderForm } />
          <Route path="/user" render={ renderProfile } />



















        {/* <Route path={'/cart'}
        render={routerProps => {
        return <div>
        <User
          // {...routerProps}carts={carts}
          // currentUser={currentUser}
          // beanies={beanies}
          // deleteFromCart={deleteFromCart}
          // updateCartsState={updateCartsState}
            >
          </User>
          </div>
        }}>
        </Route>
       
        <Route path={'/'}>
          <Home />
        </Route> */}
      </Switch>
    </div>





      
   
  );
}

export default App;
