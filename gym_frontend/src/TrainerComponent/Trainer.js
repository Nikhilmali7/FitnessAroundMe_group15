import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route}from "react-router-dom";
import {useHistory} from 'react-router-dom'
import TrainNavbar from '../NavbarComponent/TrainerNavbar';
import TrainProfileComponents from './TrainerProfile';
import TrainDietComponents from './TrainerDietPage';
import TrainWorkoutComponents from './TrainerWorkoutPage';
import UpdateDietComponent from '../TrainerComponent/UpdateDietPlan'
import CreateDietplanComponent from './AddDietplan';
import UpdateWorkoutComponent from './UpdateWorkoutPlan'
import CreateWorkoutplanComponent from './AddWorkoutplan';



 const Trainer =() =>{

    const history = useHistory();

    const logout = () => {
        
        localStorage.clear();
        history.push('/login')
        
    }

        return (
            <div>
                
                <Router>

                <TrainNavbar/>   

                <div className="container">
                <h1 style={{textAlign:'center'}}> Hello Trainer, {localStorage.getItem('train_name')}</h1>
                </div> 

                
                <Switch>

              
                <Route  path="/trainprofile" component={TrainProfileComponents}/> 
                <Route  path="/dietplan" component={TrainDietComponents}/>
                <Route  path="/workoutplan" component={TrainWorkoutComponents}/>
                <Route  path="/updateWorkoutplan/:workoutid" component={UpdateWorkoutComponent}/>
                <Route  path="/addworkout" component={CreateWorkoutplanComponent}/>
                <Route  path="/updateDietplan/:planid" component={UpdateDietComponent}/>
                <Route  path="/adddietplan" component={CreateDietplanComponent}/>
            
                <Route  path="/updateWorkoutplan/:id" component={UpdateWorkoutComponent}/>
                <Route  path="/addworkout" component={CreateWorkoutplanComponent}/>  
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
export default Trainer













