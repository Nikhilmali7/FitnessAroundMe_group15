import React from 'react'
import AdminServices from '../services/AdminServices';


class MemberOrderComponents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            gymmember:[],
            number: localStorage.getItem('member_userid'),
            
        } 
     
        console.log(localStorage.getItem('member_userid'));
        console.log(this.state.number);
    }

   

    componentDidMount(){

        AdminServices.getGymMembers().then((response) => {
            this.setState({gymmember:response.data})
        })
    }

    render(){


        return(
            <div>
                <br/>
                <h1 style={{textAlign:'center', color:'green'}}>My Subscribed Plan</h1>
                <div>
                    
                    <br/>
                    <br/>
                </div>

                

                {this.state.gymmember.filter(gymer => gymer.user.user_id == this.state.number).map(filteredGymer =>(
                    

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

export default MemberOrderComponents
