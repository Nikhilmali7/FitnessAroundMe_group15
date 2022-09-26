import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";


import {useHistory} from 'react-router-dom'
import MembNavbar from '../NavbarComponent/MemberNavbar';

import OwnerProfileComponents from './OwnerProfile';
import searchcomponents from './search';
import OwnerRegisterComponents from './OwnerRegister';
import OwnerViewComponents from './OwnerView';





 const Member =() =>{

    const history = useHistory();

  

    const logout = () => {
        
        localStorage.clear();
        history.push('/login')
        
    }
    

        return (
            <div>
                
                <Router>

                <MembNavbar/>   

                <div className="container">
                <h1 style={{textAlign:'center'}}> Hello Owner, {localStorage.getItem('member_name')}</h1>
                </div> 

                
                <Switch>

              
                <Route  path="/ownerprofile" component={OwnerProfileComponents}/> 
                <Route  path="/registration" component={OwnerRegisterComponents}/>
                <Route  path="/view" component={OwnerViewComponents}/>
                <Route  path="/search" component={searchcomponents}/>


            
               
            
                </Switch>
                </Router>

                
                <br/>
                <br/>
                <button className="btn btn-success" onClick={logout}>Sign Out</button>
                <br/>
                <br/>
                
               
            </div>
        )
    
}

export default Member