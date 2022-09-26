
//import './Signin.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory} from 'react-router-dom'
const CreateGymMemeberComponent =()=>{
    const [gender ,setGender]=useState('')
    const [height ,setHeight]=useState('')
    const [weight ,setWeight]=useState('')
    const [subplanId ,setSubplanId]=useState('')
    const [user_id ,setUser_id]=useState('')

    const history = useHistory();



    const membershipform =()=>{
        if(gender.length===0){
            alert('Please enter gender  !!!!')
        }else if(height.length===0){
            alert('Please enter height  !!!!') 
        }else if(weight.length===0){
            alert('Please enter weight  !!!!') 
        }else if(subplanId.length===0){
            alert('Please enter subplanId  !!!!') 
        }else if(user_id.length===0){
            alert('Please enter user_id  !!!!') 
        }else  {
        const data = new FormData()

        
        data.append('gender', gender)
        data.append('height',height )
        data.append('weight',weight )
        data.append('subplanId',subplanId )
        data.append('user_id',user_id)
        axios.post('http://localhost:8080/gym/gymmemberdtos', data).then((response) => {
            const result = response.data
            console.log(result.data);
            if (result.status === 'success') {
            
                history.push('/memberprofile')
              
            } else {
              alert('error while taking membership ')
            }
          })
        }
    } 
   return (
       <div className="col-sm-6 offset-sm-3">
         <br/>
         <br/>
     <h1 style={{color:'blue',textAlign:'center'}}>Membership Form</h1>
        <br/>
         <br/>
        <div className="mb-3">
            <label>Gender </label>
            <input value={gender} name="gender" onChange={(event)=>{setGender(event.target.value)}} className="form-control" type="text" placeholder="Enter Gender"></input>
        </div>

        <div className="mb-3">
            <label>Height</label>
            <input value={height} name="height" onChange={(event)=>{setHeight(event.target.value)}} className="form-control" type="text" placeholder="Enter Height"></input>
        </div>

        <div className="mb-3">
            <label>Weight</label>
            <input value={weight} name="weight" onChange={(event)=>{setWeight(event.target.value)}} className="form-control" type="text" placeholder="Enter Weight"></input>
        </div>
        <div className="mb-3">
            <label>SubplanId</label>
            <input value={subplanId} name="subplanId" onChange={(event)=>{setSubplanId(event.target.value)}} className="form-control" type="text" placeholder="Enter subplanId"></input>
            <p style={{color:'red'}}>*Check Subplan-Id from Plan list</p>
        </div>
        <div className="mb-3">
            <label>User_Id</label>
            <input value={user_id} name="user_id" onChange={(event)=>{setUser_id(event.target.value)}} className="form-control" type="text" placeholder="Enter user_id"></input>
            <p style={{color:'red'}}>**your user id : {localStorage.getItem('member_userid')}</p>
        </div>

        <br/>
        <br/>
        

        <div className="mb-3">
            <button onClick={membershipform} className="btn btn-success">Save</button>
        </div>
       </div>
   )
}

export default CreateGymMemeberComponent;


