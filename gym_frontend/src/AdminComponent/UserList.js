import React from 'react'
import UserServices from '../services/UserServices';

class UserComponents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
       
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount(){
        UserServices.getUsers().then((response) =>{
            this.setState({users:response.data})
        })
    }

   
    addUser() {
        this.props.history.push('/addUsers');
    }

    render(){
        return(
            <div>
                <h1 style={{textAlign:'center', color:'green'}}>User List</h1>
                <div>
                    <button className="btn btn-success" onClick={this.addUser}>Add User</button>
                    <br/>
                    <br/>
                </div>
                <table className = "table  table-striped" style={{border:'2px solid black'}}>

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Role</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users.map(
                                users =>
                                <tr key = {users.user_id}>
                                    <td>{users.user_id}</td>
                                    <td>{users.name}</td>
                                    <td>{users.contact}</td>
                                    <td>{users.address}</td>
                                    <td>{users.email}</td>
                                    <td>{users.password}</td>
                                    <td>{users.role}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponents