import { Container } from "react-bootstrap"
import {Row,Col,Image} from 'react-bootstrap'
import gallery5 from '../images/gallery5.jpg';
import banner from '../images/banner.jpg';
import gallery3 from '../images/gallery3.jpg';
import gallery2 from '../images/gallery2.jpg';
import gallery1 from '../images/gallery1.jpg';
import gallery4 from '../images/gallery4.jpg';
import gallery6 from '../images/gallery6.jpg';
import gallery7 from '../images/gallery7.jpg';
import gallery8 from '../images/gallery8.jpg';
import gallery9 from '../images/gallery9.jpg';
import gallery10 from '../images/gallery10.jpg';
import gallery11 from '../images/gallery11.jpg';
import gallery12 from '../images/gallery12.jpg';
import gallery13 from '../images/gallery13.jpg';
import gallery14 from '../images/gallery14.jpg';
import gallery19 from '../images/gallery19.jpg';
import gallery16 from '../images/gallery16.jpg';
import gallery17 from '../images/gallery17.jpg';
import gallery18 from '../images/gallery18.jpg';

const Gallery= () => {
    return (
       <>
       <div>
       <Image src= {banner} width= "100%" height="400px" /> 
       </div>
       

        <Container style={{marginTop:'120px'}}>
        <Row >
          <Col><Image src= {gallery5} width= "100%" /></Col>
          <Col><Image src= {gallery3} width= "100%" /></Col>
          <Col><Image src= {gallery2} width= "100%" /></Col>
        </Row>
      </Container>

    

      <Container style={{marginTop:'120px'}}>
        <Row >
          <Col><Image src= {gallery8} width= "100%" /></Col>
          <Col><Image src= {gallery6} width= "100%" /></Col>
          <Col><Image src= {gallery7} width= "100%" /></Col>
        </Row>
      </Container>

      
      <Container style={{marginTop:'120px'}}>
        <Row >
          <Col><Image src= {gallery9} width= "100%" /></Col>
          <Col><Image src= {gallery10} width= "100%" /></Col>
          <Col><Image src= {gallery11} width= "100%" /></Col>
        </Row>
      </Container>

      <Container style={{marginTop:'120px'}}>
        <Row >
          <Col><Image src= {gallery1} width= "100%" /></Col>
          <Col><Image src= {gallery12} width= "100%" /></Col>
          <Col><Image src= {gallery13} width= "100%" /></Col>
        </Row>
      </Container>

      <Container style={{marginTop:'120px'}}>
        <Row >
          <Col><Image src= {gallery14} width= "100%" /></Col>
          <Col><Image src= {gallery16} width= "100%" /></Col>
          <Col><Image src= {gallery4} width= "100%"  height="200px" /></Col>
        </Row>
      </Container>

      <Container style={{marginTop:'120px'}}>
        <Row >
          <Col><Image src= {gallery18} width= "100%" /></Col>
          <Col><Image src= {gallery19} width= "100%" /></Col>
          <Col><Image src= {gallery17} width= "100%" /></Col>
        </Row>
      </Container>

      




    </>
    )
} 

export default Gallery