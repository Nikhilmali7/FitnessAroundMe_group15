//import e from 'cors';
import React, { Component } from 'react'
import UserServices from '../services/UserServices';

class CreateAdminUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : '',
            name : '',
            contact :'',
            address : '',
            email : '',
            password : '',
            role : ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        
        e.preventDefault();
            let user = {
                    id: this.state.id, 
                    name: this.state.name, 
                    contact: this.state.contact, 
                    email: this.state.email, 
                    address: this.state.address, 
                    password : this.state.password,
                    role: this.state.role
                };

        if(this.state.name.length===0) {
            alert('Please enter name')
        } else if(this.state.contact.length===0) {
            alert('Please enter yourc contact details')
        } else if(this.state.email.length===0) {
            alert('Please enter Email-Id')
        } else if(this.state.address.length===0) {
            alert('Please enter your Address') 
        } else if(this.state.password.length===0) {
            alert('Please enter Password') 
        } else if(this.state.role.length===0) {
            alert('Please enter your Role')
        } else {

        console.log('user =>' +JSON.stringify(user));

        UserServices.createTrainerAdmin(user).then(res =>{
            this.props.history.push('/userlist');
        });
     }
        
    }

    cancel() {
        this.props.history.push('/createuser');
    }

    changeIdHandler = (event) => {
        this.setState({id: event.target.value});
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeContactHandler = (event) => {
        this.setState({contact: event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    changeRoleHandler = (event) => {
        this.setState({role: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="contianer">
                    <br/>
                    <div className="row">

                        <div className="card col-md-6 offset-md-3 offset-md-3">
                         
                            <br/>
                            <h1 className="text-center">Form</h1>
                            <div className="card-body">

                                <form>

                                    <div className="form-group">
                                        <label> Name : </label>
                                        <input placeholder="Name" type="text" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Contact : </label>
                                        <input placeholder="Contact" type="text" name="contact" className="form-control"
                                            value={this.state.contact} onChange={this.changeContactHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id : </label>
                                        <input placeholder="Email Id" type="text" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Address : </label>
                                        <input placeholder="Address" type="text" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Password : </label>
                                        <input placeholder="Password" type="password" name="password" className="form-control"
                                            value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Role : </label>
                                        <input placeholder="Role" type="text" name="role" className="form-control"
                                            value={this.state.role}  onChange={this.changeRoleHandler}/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                    <br/>
                                    <br/>
                                    <button type="submit" className="btn btn-success" onClick={this.saveUser}>Save</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CreateAdminUserComponent
