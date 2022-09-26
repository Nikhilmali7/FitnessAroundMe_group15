import React from 'react'
import TrainerServices from '../services/TrainerServices';


class TrainDietComponents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dietplan:[]
        }
        // Addition below
        this.addDietPlan = this.addDietPlan.bind(this);
        this.updateDietPlan = this.updateDietPlan.bind(this);
        this.deleteDietPlan = this.deleteDietPlan.bind(this);
    }

    

    deleteDietPlan(planid) {
        TrainerServices.deleteDietPlan(planid).then(res => {
            this.setState({dietplan: this.state.dietplan.filter(dietplans => dietplans.planid !== planid)});
        });
    }

    updateDietPlan(planid) {
        this.props.history.push(`/updateDietplan/${planid}`);
    }

    componentDidMount(){

        TrainerServices.getDietPlan().then((response) => {
            this.setState({dietplan:response.data})
        })


    }

    // Addition below
    addDietPlan() {
        this.props.history.push('/adddietplan');
    }

    render(){
        return(
            <div>
                <br/>
                <br/>
                <h3 style={{textAlign:'center', color:'purple'}}>Diet-Plans</h3>
                <div>
                    <button className="btn btn-success" onClick={this.addDietPlan}>Add Diet-Plan</button>
                    <br/>
                    <br/>
                </div>
                <table className = "table  table-striped" style={{border:'2px solid black'}}>

                    <thead>
                        <tr>
                            
                            <th>Plan Name</th>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Pre-Workout</th>
                            <th>Dinner</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.dietplan.map(
                                dietplan =>
                                <tr key = {dietplan.planid}>
                                    <td>{dietplan.planname}</td>
                                    <td>{dietplan.breakfast}</td>
                                    <td>{dietplan.lunch}</td>
                                    <td>{dietplan.preworkout}</td>
                                    <td>{dietplan.dinner}</td>
                                    <td>
                                        <button onClick = { () => this.updateDietPlan(dietplan.planid)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft:"50px"}} onClick = { () => this.deleteDietPlan(dietplan.planid)} className="btn btn-danger">Delete</button>
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

export default TrainDietComponents