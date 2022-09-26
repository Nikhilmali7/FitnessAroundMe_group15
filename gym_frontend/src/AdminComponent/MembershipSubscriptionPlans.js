import React from 'react'
import AdminServices from '../services/AdminServices';


class CenterplanComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            center:[],
        }
     
        this.createCenter = this.createCenter.bind(this);
        this.deleteCenter =this.deleteCenter.bind(this);
    }

    deleteCenter(id) {
        AdminServices.deleteCenter(id).then(res => {
        this.setState({center: this.state.center.filter(centers => centers.id !== id)});
        });

    }

    componentDidMount(){

        AdminServices.getCenters().then((response) => {
            this.setState({center:response.data})
        })
       
    }

    updateCenter(id){
        this.props.history.push({pathname: '/editcenter/', 
            state: {id: id}
        });
    }

    viewCenter(id){
        this.props.history.push({pathname: '/viewCenter', 
            state: { id: id }
        });
    }

    
    createCenter() {
        this.props.history.push('/addcenter');
    }

    render(){
        return(
            <div>
                <h1 style={{textAlign:'center', color:'green'}}>Center List</h1>
                <div>
                    <button className="btn btn-success" onClick={this.createCenter}>Add Centers</button>
                    <br/>
                    <br/>
                </div>
                <table className = "table  table-striped" style={{border:'2px solid black'}}>

                    <thead>
                        <tr>

                            <th>CENTER-NAME</th>
                            <th>CONTACT</th>
                            <th>ADDRESS</th>
                            <th>DESCRIPTION</th>
                            <th>LOCALITY</th>
                            <th>TYPE</th>
                            <th>ACTIONS</th>
                            {/* <th>CREATED-AT</th>
                            <th>UPDATED-AT</th> */}
                            
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.center.map(
                                center =>
                                <tr key = {center.id}>
                                    <td>{center.name}</td>
                                    <td>{center.contact}</td>
                                    <td>{center.address}</td>
                                    <td>{center.description}</td>
                                    <td>{center.locality}</td>
                                    <td>{center.type}</td>
                                    {/* <td>{center.created_at}</td>
                                    <td>{center.updated_at}</td> */}
                                    <td>
                                    <button  onClick = { () => this.viewCenter(center.id)} className="btn btn-outline-primary mx-2">View</button>  
                                    <button  onClick = { () => this.updateCenter(center.id)} className="btn btn-outline-primary mx-2">Edit</button>  
                                    <button  onClick = { () => this.deleteCenter(center.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CenterplanComponent 
