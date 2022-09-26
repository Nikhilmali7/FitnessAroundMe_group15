import React from 'react'
import TrainerServices from '../services/TrainerServices';


class MemberDietComponents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            dietplan:[]
        }
       
    }

    

   

    
    componentDidMount(){

        TrainerServices.getDietPlan().then((response) => {
            this.setState({dietplan:response.data})
        })


    }

   

    render(){
        return(
            <div>
                <br/>
                <br/>
                <h3 style={{textAlign:'center', color:'purple'}}>Diet-Plans</h3>
                <div>
                    
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
                                    
                                   
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MemberDietComponents