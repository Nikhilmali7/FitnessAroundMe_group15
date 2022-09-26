
import React, { Component } from 'react'
import AdminServices from '../services/AdminServices';


class CreateCenterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : '',
            name : '',
            contact :'',
            address :'',
            description :'',
            locality :'',
             owner_id :'',
             type: ''
            // created_at :'',
            // updated_at :''
           
            
        }
        
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeLocalityHandler = this.changeLocalityHandler.bind(this);
         this.changeOwnerIdHandler = this.changeOwnerIdHandler.bind(this);
         this.changeTypeHandler = this.changeTypeHandler.bind(this);
        // this.changeCreated_atHandler = this.changeCreated_atHandler.bind(this);
        // this.changeUpdated_atHandler = this.changeUpdated_atHandler.bind(this);
        

        this.saveCenter = this.saveCenter.bind(this);       //saveSubPlan
    }

    saveCenter = (e) => {                                   //saveSubPlan
        
        e.preventDefault();
            let center = {                                  //subplan
                    id: this.state.id,                      //subplanId
                    name: this.state.name, 
                    contact: this.state.contact,            //duration
                    address: this.state.address,
                    description: this.state.description,    //subplanId
                    locality: this.state.locality,          //subplanId
                    type: this.state.type,          //subplanId
                    // created_at: this.state.created_at,      //subplanId
                    // updated_at: this.state.updated_at,              //subplanId

                    
                };
console.log(center)
        if(this.state.name.length===0) {
            alert('Please enter the name of center')
        } else if(this.state.contact.length===0) {
            alert('Please enter the contact')
        } else if(this.state.address.length===0) {
            alert('Please enter the address of the center')
        } else if(this.state.description.length===0) {
            alert('Please enter the description for the center')
        } else if(this.state.locality.length===0) {
            alert('Please enter the locality of the center')
        } else if(this.state.type.length=== 0) {
            alert('Please enter the type of the center')
        } 
        // else if(this.state.created_at.length===0) {
        //     alert('Please enter the date')
        // } else if(this.state.updated_at.length===0) {
        //     alert('Please enter the date')
        // }
        else {

        console.log('center =>' +JSON.stringify(center)); 

        AdminServices.createCenter(center).then(res => {
                this.props.history.push('/centerlist')
                // this.props.history.push('/addcenter')

        });
     
     }
        
    }

    cancel() {
        this.props.history.push('/centerlist');
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

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeLocalityHandler = (event) => {
        this.setState({locality: event.target.value});
    }

    changeOwnerIdHandler = (event) => {
        this.setState({owner_id: event.target.value});
    }

    changeTypeHandler = (event) => {
        debugger
        this.setState({type: event.target.value});
    }

    // changeCreated_atHandler = (event) => {
    //     this.setState({created_at: event.target.value});
    // }

    // changeUpdated_atHandler = (event) => {
    //     this.setState({updated_at: event.target.value});
    // }


    render() {
        return (
            <div>
                <div className="contianer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h1 className="text-center">Add Center Registration Form</h1>
                            <div className="card-body">

                                <form>

                                    
                                    <div className="form-group">
                                        <label> Center Name: </label>
                                        <input placeholder="Center Name" type="text" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Center's Contact: </label>
                                        <input placeholder="Contact" type="text" name="contact" className="form-control"
                                            value={this.state.contact} onChange={this.changeContactHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Center's Address: </label>
                                        <input placeholder="Address" type="text" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Center Description: </label>
                                        <input placeholder="Description" type="text" name="description" className="form-control"
                                            value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Center's Locality: </label>
                                        <input placeholder="Locality" type="text" name="locality" className="form-control"
                                            value={this.state.locality} onChange={this.changeLocalityHandler} />
                                    </div>
                                   
                                    <div className='form-group'>
                                        <label>
                                        Fitness_Centers : </label>
                                        <select className="form-control" value={this.state.type} onChange={this.changeTypeHandler}>
                                            <option  value='' disabled="disabled" defaultValue={this.state.type} >select a type</option>
                                            <option value="Gyms">Gyms</option>
                                            <option value="Yoga">Yoga</option>
                                            <option value="Zumba">Zumba</option>
                                            <option value="Swmming">Swmming</option>
                                            <option value="Dance">Dance</option>
                                        </select>
                                    </div>
                                    {/* <div className="form-group">
                                        <label> Date: </label>
                                        <input placeholder="Date" type="text" name="date" className="form-control"
                                            value={this.state.created_at} onChange={this.changeCreated_atHandler} />
                                    </div> */}
                              
                                    <br/>
                                    <br/>
                                    <button type="submit" className="btn btn-success" onClick={this.saveCenter}>Save</button>
                                    <br/>
                                    <br/>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                   
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CreateCenterComponent
