import './App.css';
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import NavBar from './Components/NavBar';
import User from './Components/User';
import Login from './Components/Login';
import Home from './Components/Home';
import {useState} from 'react';


function App() {
  const [currentUser,setCurrentUser]=useState({
    id: 0,
    username:'',
    name:"",
    rating: 0,
    age:0,
    profile_pic:"",
    country:""
    })
 



  const handleSubmit = (formData) => {
     
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


  let handleResponse= (res) => {
    setCurrentUser=res   
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
              <Route path={'/login'}
                 render={routerProps => {
                 return <div>
                            <Login 
                             {...routerProps}handleSubmit={handleSubmit}>
                            </Login>
                            
                       </div>}}>
              </Route>



















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
