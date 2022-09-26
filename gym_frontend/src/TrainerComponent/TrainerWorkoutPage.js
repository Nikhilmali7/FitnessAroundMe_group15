import React from 'react'
import TrainerServices from '../services/TrainerServices';


class TrainWorkoutComponents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            workoutplan:[]
        }
        
        this.addWorkoutPlan = this.addWorkoutPlan.bind(this);
        this.updateWorkoutPlan = this.updateWorkoutPlan.bind(this);
        this.deleteWorkoutPlan = this.deleteWorkoutPlan.bind(this);
    }

    deleteWorkoutPlan(workoutid) {
        TrainerServices.deleteWorkoutplan(workoutid).then(res => {
            this.setState({workoutplan: this.state.workoutplan.filter(workoutplans => workoutplans.workoutid !== workoutid)});
        });
    }

    updateWorkoutPlan(workoutid) {
        this.props.history.push(`/updateWorkoutplan/${workoutid}`);
    }

    componentDidMount(){

        TrainerServices.getWorkoutPlan().then((response) => {
            this.setState({workoutplan:response.data})
        })

    }

    // Addition below
    addWorkoutPlan() {
        this.props.history.push('/addworkout');
    }

    

    render(){
        return(
            <div>
                <br/>
                <br/>
                <h3 style={{textAlign:'center', color:'green'}}>Workout-Plans</h3>
                <div>
                    <button className="btn btn-success" onClick={this.addWorkoutPlan}>Add Workout-Plan</button>
                    <br/>
                    <br/>
                </div>
                <table className = "table  table-striped" style={{border:'2px solid black'}}>

                    <thead>
                        <tr>
                            
                            <th>Workout Name</th>
                            <th>Set 1</th>
                            <th>Set 2</th>
                            <th>Set 3</th>
                            <th>Actions</th>
                            
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.workoutplan.map(
                                workoutplan =>
                                <tr key = {workoutplan.workoutid}>
                                    <td>{workoutplan.workoutname}</td>
                                    <td>{workoutplan.set1}</td>
                                    <td>{workoutplan.set2}</td>
                                    <td>{workoutplan.set3}</td>
                                    <td>
                                        <button onClick = { () => this.updateWorkoutPlan(workoutplan.workoutid)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft:"50px"}} onClick = { () => this.deleteWorkoutPlan(workoutplan.workoutid)} className="btn btn-danger">Delete</button>
                                    </td>
                                    
                                   
                                   
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TrainWorkoutComponents