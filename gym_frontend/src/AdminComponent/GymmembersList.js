import React from 'react'
import AdminServices from '../services/AdminServices';


class GymMemberComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            gymmember:[]
        } 
     
        
        this.deleteGymMember =this.deleteGymMember.bind(this);
    }

    deleteGymMember(memberId) {
        AdminServices.deleteGymMembers(memberId).then(res => {
            this.setState({gymmember: this.state.gymmember.filter(gymmembers => gymmembers.memberId !== memberId)});
        })

    }

    componentDidMount(){

        AdminServices.getGymMembers().then((response) => {
            this.setState({gymmember:response.data})
        })
    }

    componentDidMount(){

        AdminServices.getGymMembers().then((response) => {
            this.setState({gymmember:response.data})
        })
    }


    render(){
        return(
            <div>
                <h1 style={{textAlign:'center', color:'green'}}>Gym Member List</h1>
                <div>
                    
                    <br/>
                    <br/>
                </div>

                

                {this.state.gymmember.filter(gymer => gymer.user.role == "member").map(filteredGymer =>(
                    
                    <table className = "table  table-striped" style={{border:'2px solid black'}}>
                        <thead>
                            <th>Name</th>
                            <th>Join Date</th>
                            <th>Weight</th>
                            <th>Height</th>
                            <th>Plan Name</th>
                            <th>Duration (months)</th>
                            <th>Amount</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{filteredGymer.user.name}</td>
                                <td>{filteredGymer.joinDate}</td>
                                <td>{filteredGymer.weight}</td>
                                <td>{filteredGymer.height}</td>
                                <td>{filteredGymer.plan.planName}</td>
                                <td>{filteredGymer.plan.duration}</td>
                                <td>{filteredGymer.plan.amount}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                ))}

               
            </div>
        )
    }
}

export default GymMemberComponent 
