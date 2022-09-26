import React from 'react'
import { useEffect } from "react";
import AdminServices from '../services/AdminServices';




class ViewCenterComponent extends React.Component {

    constructor(props){
        super(props)
        const { location } = this.props
        this.state = {
            center: [],
            location: location
        }
        
     
        
    }

    componentDidMount(){

        AdminServices.centerById(this.state.location.state.id).then((response)=>{
            this.setState({center: [response.data]})
        })
       
    }

   

    render(){
        return(
            <div>
                <h1 style={{textAlign:'center', color:'green'}}>Details of Center</h1>
                
                <table className = "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{border:'2px solid black'}}>
                    <thead>
                        {
                            this.state.center.map(
                                center =>
                                <tr key = {center.id}>
                                    <tr><th>CENTER-Id :</th>
                                    <td>{center.id}</td></tr>

                                    <tr><th>CENTER-NAME :</th>
                                    <td>{center.name}</td></tr>

                                    <tr><th>CONTACT :</th>
                                    <td>{center.contact}</td></tr>

                                    <tr><th>ADDRESS :</th>
                                    <td>{center.address}</td></tr>

                                    <tr><th>DESCRIPTION :</th>
                                    <td>{center.description}</td></tr>

                                    <tr><th>LOCALITY :</th>
                                    <td>{center.locality}</td></tr>

                                    <tr><th>TYPE :</th>
                                    <td>{center.type}</td></tr>
                                    
                                    
                                </tr>
                            )
                        }
                    </thead>
                </table>
             
            </div>
        )
    }
}

export default ViewCenterComponent 
