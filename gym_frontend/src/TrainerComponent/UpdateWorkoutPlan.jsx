//import e from 'cors';
import React, { Component } from 'react'
import TrainerServices from '../services/TrainerServices';


class UpdateWorkoutComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            workoutid : this.props.match.params.workoutid,
            workoutname : '',
            set1 :'',
            set2 : '',
            set3 : '',
        }
        this.changeWorkoutNameHandler = this.changeWorkoutNameHandler.bind(this);
        this.changeSet1Handler = this.changeSet1Handler.bind(this);
        this.changeSet2Handler = this.changeSet2Handler.bind(this);
        this.changeSet3Handler = this.changeSet3Handler.bind(this);
       

        this.updateWorkoutplan = this.updateWorkoutplan.bind(this);
    }

    componentDidMount() {
        TrainerServices.getWorkoutPlanById(this.state.workoutid).then ( (response) => {
            let workoutplan = response.data;
            this.setState({ workoutname : workoutplan.workoutname,
                            set1 : workoutplan.set1,
                            set2 : workoutplan.set2,
                            set3 : workoutplan.set3 
                        });
        });
    }

    updateWorkoutplan = (e) => {
        
        e.preventDefault();
            let workoutplan = {
                    workoutid: this.state.workoutid, 
                    workoutname: this.state.workoutname, 
                    set1: this.state.set1, 
                    set2: this.state.set2, 
                    set3: this.state.set3, 
                   
                };

        if(this.state.workoutname.length===0) {
            alert('Please enter Workout name')
        } else if(this.state.set1.length===0) {
            alert('Please enter Set 1')
        } else if(this.state.set2.length===0) {
            alert('Please enter Set 2')
        } else if(this.state.set3.length===0) {
            alert('Please enter Set 3') 
        } 
         else {

        console.log('workoutplan =>' +JSON.stringify(workoutplan));

        TrainerServices.updateWorkoutplan(workoutplan, this.state.workoutid).then( response => {
            this.props.history.push('/workoutplan')
        })

       
     }
        
    }

    cancel() {
        this.props.history.push('/workoutplan');
    }

   

    changeWorkoutNameHandler = (event) => {
        this.setState({workoutname: event.target.value});
    }

    changeSet1Handler = (event) => {
        this.setState({set1: event.target.value});
    }

    changeSet2Handler = (event) => {
        this.setState({set2: event.target.value});
    }

    changeSet3Handler = (event) => {
        this.setState({set3: event.target.value});
    }

   

    render() {
        return (
            <div>
                <div className="contianer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <br/>
                            <br/>
                            <h3 className="text-center">Update Workout Form</h3>
                            <div className="card-body">

                                <form>

                                  
                                    <div className="form-group">
                                        <label> Workout Name : </label>
                                        <input placeholder="Workout Name" type="text" name="name" className="form-control"
                                            value={this.state.workoutname} onChange={this.changeWorkoutNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Set 1 : </label>
                                        <input placeholder="Set 1" type="text" name="contact" className="form-control"
                                            value={this.state.set1} onChange={this.changeSet1Handler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Set 2 : </label>
                                        <input placeholder="Set 2" type="text" name="email" className="form-control"
                                            value={this.state.set2} onChange={this.changeSet2Handler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Set 3 : </label>
                                        <input placeholder="Set 3" type="text" name="address" className="form-control"
                                            value={this.state.set3} onChange={this.changeSet3Handler} />
                                    </div>
            
                                    <br/>
                                    <br/>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                    <br/>
                                    <br/>
                                    <button type="submit" className="btn btn-success" onClick={this.updateWorkoutplan}>Save</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default UpdateWorkoutComponent
