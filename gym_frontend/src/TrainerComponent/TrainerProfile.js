import React from 'react'
import TrainerServices from '../services/TrainerServices';


class TrainProfileComponents extends React.Component {

   

    render(){
        return(
            <div>
                <br/>
                <br/>
                <h2 style={{textAlign:'center', color:'red'}}>My Profile</h2>
                <br/>
                <br/>
                

                    <table className = "table  table-striped" border="2">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{localStorage.getItem('train_name')}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{localStorage.getItem('train_email')}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{localStorage.getItem('train_address')}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{localStorage.getItem('train_contact')}</td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>{localStorage.getItem('train_password')}</td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>{localStorage.getItem('train_role')}</td>
                        </tr>
                    </tbody>
                </table>
                
                   
            </div>
        )
    }
}

export default TrainProfileComponents