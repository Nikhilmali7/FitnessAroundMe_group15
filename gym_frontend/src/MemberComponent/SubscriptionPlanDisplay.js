import React from 'react'
import axios from 'axios'
import AdminServices from '../services/AdminServices';


class SubscriptionplanComponents extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            localities:[],
            center: [],
            originalCenters: [],
            locality: '',
            type: ''
        }
     
    }

    componentDidMount(){

        AdminServices.getCenters().then((response) => {
            this.setState({center:response.data});
        })

        AdminServices.getLocalities().then((response) => {
            this.setState({localities:response.data});
        })
       
    }

    filterCenters = () => {
        var centers = [];
        var filteredRecords = [];
        var selectedRecords = []
        if (this.state.originalCenters.length === 0) {
            this.setState({originalCenters: this.state.center })
        } 

        if (this.state.originalCenters.length > 0) {
            centers = this.state.originalCenters;
        } else {
            centers = this.state.center;
        }
        
        if (this.state.locality != '') {
            centers.forEach(center => {
                if(center.locality.toLowerCase() === this.state.locality.toLowerCase()) {
                    filteredRecords.push(center)
                    selectedRecords.push(center.id)
                }
            });
        }
        
        if (filteredRecords.length > 0 ) {
            centers = filteredRecords;
        }
        
        if (this.state.type != '') {
            debugger
            filteredRecords = []
            for (var center in centers) {
                if(centers[center].type && centers[center].type.toLowerCase() === this.state.type.toLocaleLowerCase()) {
                    selectedRecords.push(centers[center].id)
                    filteredRecords.push(centers[center])
                } 
            }
        }


        this.setState({center: filteredRecords})
        

    }

    changeLocalityHandler = (event) => {
        this.setState({locality: event.target.value});
       
    }

    changeTypeHandler = (event) => {
        this.setState({type: event.target.value});
    }

    applyFilter = (e) => {
        this.filterCenters();
    }

    clearFilter = (e) => {
        this.setState({type: ''})
        this.setState({locality: ''})

        AdminServices.getCenters().then((response) => {
            this.setState({center:response.data});
        })
    }

    

    render(){
        return(
            <div>
                <div className='form-group'>
                    <label>
                    Location : 
                    <select value={this.state.locality} onChange={this.changeLocalityHandler}>
                    {/* <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">select your locality</button> */}
                        <option value='' defaultValue disabled='disabled'>Select Your Locality</option>
                        {
                            this.state.localities.map((i,j)=>{
                                return <option key={i} value={i}>{i}</option>
                            })
                        }
                    </select>
                    </label>&nbsp;&nbsp;
             
                    <label>
                    Speciality : 
                        <select value={this.state.type} onChange={this.changeTypeHandler}>
                            <option value=''  defaultValue disabled='disabled'>select a type</option>
                            <option key="Gyms" value="Gyms">Gyms</option>
                            <option key="Yoga" value="Yoga">Yoga</option>
                            <option key="Zumba" value="Zumba">Zumba</option>
                            <option key="Swmming" value="Swmming">Swmming</option>
                            <option key="Dance" value="Dance">Dance</option>
                        </select>
                    </label>
                    <br></br>
                    <br></br>
                    <button onClick={this.applyFilter}> filter</button> &nbsp;&nbsp;
                    <button onClick={this.clearFilter}> clear</button>

                </div>

                <h1 style={{textAlign:'center', color:'green'}}>Center's List</h1>
                <table className = "table  table-striped" style={{border:'2px solid black'}}>                    
                    <thead>
                        <tr>
                            {/* <th>CENTER-Id</th> */}
                            <th>CENTER-NAME</th>
                            <th>CONTACT</th>
                            <th>ADDRESS</th>
                            <th>DESCRIPTION</th>
                            <th>LOCALITY</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.center.map(
                                center =>
                                <tr key = {center.id}>
                                    {/* <td>{center.id}</td> */}
                                    <td>{center.name}</td>
                                    <td>{center.contact}</td>
                                    <td>{center.address}</td>
                                    <td>{center.description}</td>
                                    <td>{center.locality}</td>
                                    <td>{center.type}</td>                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SubscriptionplanComponents
