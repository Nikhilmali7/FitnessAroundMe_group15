import { Search } from '@material-ui/icons';
import React from 'react'


class OwnerRegisterComponents extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id : '',
            name : '',
            description :'',
            locality : '',
            address : '',
            contact : ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeLocalityHandler = this.changeLocalityHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);

        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        
        e.preventDefault();
            let user = {
                    id: this.state.id, 
                    name: this.state.name, 
                    description: this.state.description,
                    locality: this.state.locality, 
                    address: this.state.address, 
                    contact: this.state.contact,
                };

        if(this.state.name.length===0) {
            alert('Please enter name')
        } else if(this.state.contact.length===0) {
            alert('Please enter your contact details')
        } else if(this.state.description.length===0) {
            alert('Please enter Description')
        } else if(this.state.address.length===0) {
            alert('Please enter your Address') 
        } else if(this.state.locality.length===0) {
            alert('Please enter Locality') 
        } 
        else {

        console.log('user =>' +JSON.stringify(user));

        UserServices.createUsers(user).then(res =>{   ///change required
            this.props.history.push('/login');
        });
     }
        
    }

    cancel() {
        this.props.history.push('/createuser'); // changes for center
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

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }

    changeLocalityHandler  = (event) => {
        this.setState({locality: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="contianer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h1 className="text-center">Center Sign-Up Form</h1>
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
                                        <label> Description : </label>
                                        <input placeholder="Description" type="text" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Address : </label>
                                        <input placeholder="Address" type="text" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Locality : </label>
                                        <input placeholder="Locality" type="locality" name="locality" className="form-control"
                                            value={this.state.locality} onChange={this.changeLocalityHandler} />
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

export default OwnerRegisterComponents;
