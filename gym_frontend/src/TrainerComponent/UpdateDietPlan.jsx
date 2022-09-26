//import e from 'cors';
import React, { Component } from 'react'
import TrainerServices from '../services/TrainerServices';


class UpdateDietComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            planid : this.props.match.params.planid,
            planname : '',
            breakfast :'',
            lunch : '',
            preworkout : '',
            dinner : ''
        }
        this.changePlanNameHandler = this.changePlanNameHandler.bind(this);
        this.changeBreakfastHandler = this.changeBreakfastHandler.bind(this);
        this.changeLunchHandler = this.changeLunchHandler.bind(this);
        this.changePreworkoutHandler = this.changePreworkoutHandler.bind(this);
        this.changeDinnertHandler = this.changeDinnertHandler.bind(this);
       

        this.updateDietplan = this.updateDietplan.bind(this);
    }

    componentDidMount() {
        TrainerServices.getDietPlanById(this.state.planid).then ( (response) => {
            let dietplan = response.data;
            this.setState({ planname : dietplan.planname,
                            breakfast : dietplan.breakfast,
                            lunch : dietplan.lunch,
                            preworkout : dietplan.preworkout,
                            dinner : dietplan.dinner
                            
                        });
        });
    }

    updateDietplan = (e) => {
        
        e.preventDefault();
            let dietplan = {
                    planid: this.state.planid, 
                    planname: this.state.planname, 
                    breakfast: this.state.breakfast, 
                    lunch: this.state.lunch, 
                    preworkout: this.state.preworkout, 
                    dinner: this.state.dinner
                   
                };

        if(this.state.planname.length===0) {
            alert('Please enter Dietplan name')
        } else if(this.state.breakfast.length===0) {
            alert('Please enter breakfast')
        } else if(this.state.lunch.length===0) {
            alert('Please enter lunch')
        } else if(this.state.preworkout.length===0) {
            alert('Please enter preworkout') 
        } else if(this.state.dinner.length===0) {
            alert('Please enter dinner') 
        } 
         else {

        console.log('dietplan =>' +JSON.stringify(dietplan));

        TrainerServices.updateDietplan(dietplan, this.state.planid).then( response => {
            this.props.history.push('/dietplan')
        })

       
     }
        
    }

    cancel() {
        this.props.history.push('/dietplan');
    }

   

    changePlanNameHandler = (event) => {
        this.setState({planname: event.target.value});
    }

    changeBreakfastHandler = (event) => {
        this.setState({breakfast: event.target.value});
    }

    changeLunchHandler = (event) => {
        this.setState({lunch: event.target.value});
    }

    changePreworkoutHandler = (event) => {
        this.setState({preworkout: event.target.value});
    }

    changeDinnertHandler = (event) => {
        this.setState({dinner: event.target.value});
    }

   

    render() {
        return (
            <div>
                <div className="contianer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <br/>
                            <br/>
                            <h3 className="text-center">Update Diet Form</h3>
                            <div className="card-body">

                                <form>

                                  
                                    <div className="form-group">
                                        <label> Diet Name : </label>
                                        <input placeholder="Diet Name" type="text" name="name" className="form-control"
                                            value={this.state.planname} onChange={this.changePlanNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Breakfast : </label>
                                        <input placeholder="Breakfast" type="text" name="contact" className="form-control"
                                            value={this.state.breakfast} onChange={this.changeBreakfastHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Lunch : </label>
                                        <input placeholder="Lunch" type="text" name="email" className="form-control"
                                            value={this.state.lunch} onChange={this.changeLunchHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> PreWorkout : </label>
                                        <input placeholder="PreWorkout" type="text" name="address" className="form-control"
                                            value={this.state.preworkout} onChange={this.changePreworkoutHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Dinner : </label>
                                        <input placeholder="Dinner" type="text" name="address" className="form-control"
                                            value={this.state.dinner} onChange={this.changeDinnertHandler} />
                                    </div>
            
                                    <br/>
                                    <br/>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                    <br/>
                                    <br/>
                                    <button type="submit" className="btn btn-success" onClick={this.updateDietplan}>Save</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default UpdateDietComponent
