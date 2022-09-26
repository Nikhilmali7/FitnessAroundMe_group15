import { Container } from "react-bootstrap"
import {Row,Col,Image} from 'react-bootstrap'
// import Atul from '../images/Atul.jpg';
// import Vikrant from '../images/Vikrant.jpg';
// import Dany from '../images/dany1.jpg';
// import Rohit from '../images/Rohit.jpg';


const Contact= () => {
    return (
     <>
     <h1  style={{color:"tomato",textAlign:"center",marginTop:'50px'}}>Drav's Gym Contacts</h1>
     
     <Container style={{marginTop:'80px'}}>
     <Row >
       {/* <Col><Image src= {Rohit} width= "100%" height="400px" /></Col> */}
       <Col>
       <h1 style={{color:"springgreen",textAlign:"center"}}>Drav Gym - Solapur</h1><br/>
       <h3>Rohit Bhosale</h3><br/>
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>

OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
<br/>
Address:- 202-203, Trade Avenue, Suren Road, Off.
Western Express Highway,Solapur, Solapur- 400093
<br/>
Phone:8308072381
<br/>
Email: bhosalerohit0001@gmail.com</p>
       </Col>
     </Row>
   </Container>


   <Container style={{marginTop:'50px'}}>
     <Row >
       <Col>
       <h1 style={{color:"purple",textAlign:"center"}}>Drav Gym - Udgir</h1><br/>
       <h3>Atul Munde</h3><br/>
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>
       OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
       <br/>
       Address:- 502-503, Nanded naka , nanded road , opposite to more clinic ,Udgir- 413517
                <br/>
            Phone:8668831035
            
            <br/>
            Email: atulmunde1988@gmail.com

       
       </p>

       </Col>
       {/* <Col><Image src= {Atul} width= "100%" /></Col> */}
     </Row>
   </Container>


   <Container style={{marginTop:'50px'}}>
     <Row >
       {/* <Col><Image src= {Vikrant} width= "100%" height="400px" /></Col> */}
       <Col>
       <h1 style={{color:"orange",textAlign:"center"}}>Drav Gym  - Pimpri Chinchwad </h1><br/>
       <h3>Vikrant Bhujbal</h3><br/>
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>
       OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
       <br/>
       Address:- 815 , KSB road , opposite to TATA MOTORS PVT ,Pimpri Chinchwad- 411010
                <br/>
            Phone:9011097845
            
            <br/>
            Email: vikrantbhujbal9@gmail.com

       
       </p>

       </Col>
     </Row>
   </Container>
   <Container style={{marginTop:'50px'}}>
     <Row >
     <Col>
     <h1 style={{color:"chocolate",textAlign:"center"}}>Drav Gym  - Pune </h1><br/>
       <h3>Dnyaneshwar Bansode (dany)</h3><br/>
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>
       OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
       <br/>
       Address:- 978 , Fc road , opposite to Ferguson College ,Shivajinagar,Pune- 421213
                <br/>
            Phone:8482823878
            
            <br/>
            Email: akshay77790@gmail.com


       
       </p>

     </Col>
       {/* <Col><Image src= {Dany} width= "100%" height="400px" /></Col> */}
     </Row>
   </Container>
   <br/>  <br/>  <br/>  <br/> 
   </>
    )
} 

export default Contact