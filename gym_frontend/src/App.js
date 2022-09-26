import React from 'react';
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";

import Navbar from './NavbarComponent/HomeNavbar';
import Gallery from './HomePages/Gallery';
import Blogs from './HomePages/Blogs';
import Programs from './HomePages/Programs';
import GetStarted from './HomePages/Home';
import Contact from './HomePages/Contact';
import Login from './HomePages/Login';
import CreateUserComponent from './HomePages/SignUp'

import Admin from './AdminComponent/Admin';
import Trainer from './TrainerComponent/Trainer';
import Member from './MemberComponent/Member';
import axios from 'axios'


axios.interceptors.request.use(req => {
    // `req` is the Axios request config, so you can modify
    // the `headers`.
    var token = localStorage.auth_token;
    
    if (token) {
        req.headers.Authorization = token;
    }

    return req;
  });





const App = () => {
  const dark=false
  return (
    <Router>
  

<div className={dark?"dark":"light"}>
     
      <Navbar/>
      
      <Switch>
      <Route  path="/getStarted" component={GetStarted}/> 
      <Route  path="/gallery" component={Gallery}/>
      <Route  path="/programs" component={Programs}/>
      <Route  path="/blogs" component={Blogs}/>
      <Route  path="/contact" component={Contact}/>
      <Route  path="/login" component={Login}/>
      <Route  path="/createuser" component={CreateUserComponent}/>
      <Route  path="/admin" component={Admin}/>
      <Route  path="/trainer" component={Trainer}/>
      <Route  path="/member" component={Member}/>
     

     
    
      </Switch>


   
      </div>
    </Router>
  )
}

export default App
