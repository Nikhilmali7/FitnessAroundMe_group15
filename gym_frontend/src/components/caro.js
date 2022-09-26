
import b1 from '../images/b1.jpg';
import yoga from '../images/yoga.jpg';

import zumba from '../images/zumba.jpg';
import dance from '../images/dance.jpg';
import swmming from '../images/swmming.jpg';

import 'bootstrap/dist/css/bootstrap.min.css'                 // These 2 lines
import {Button, Form, Alert, Nav, Navbar, Container, NavDropdown, Spinner, Carousel} from 'react-bootstrap'    

const Caro = () => {
    return (
        

      <div class="container-lg-1 container-sm-1">
      <Carousel variant="light" interval="2000">
      <Carousel.Item>
        <img
          className="d-block w-100 h-20"
          src={b1}
          alt="image1"
        />
        <Carousel.Caption>
      <h3 style={{color:'yellow'}}>Hit the Gym and Goals !</h3>
      <p style={{color:'yellow'}}>Subscribe to our plans and enjoy benefits you've never heard of</p>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-20"
          src={yoga}
          alt="image2"
        />
         <Carousel.Caption>
      <h3 style={{color:'white'}}>YOGA</h3>
      <p style={{color:'pink'}}>Train like a beast. Look like a beauty</p>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-20"
          src={zumba}
          alt="image3"
        />
        <Carousel.Caption>
      <h3 style={{color:'pink'}}>ZUMBA</h3>
      <p style={{color:'pink'}}>If Something stands between you and your success, move it. Never be denied</p>
    </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <img
          className="d-block w-100 h-20"
          src={dance}
          alt="image4"
        />
        <Carousel.Caption>
      <h3 style={{color:'yellow'}}>DANCE</h3>
      <p style={{color:'yellow'}}>Success is usually the culmination of controlling failure</p>
    </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <img
          className="d-block w-100 h-20"
          src={swmming}
          alt="image5"
        />
       <Carousel.Caption>
      <h3 style={{color:'purple'}}>SWIMMING</h3>
      <p style={{color:'purple'}}>Train like a beast. Look like a beauty</p>
    </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    
            </div>

        
    )
}

export default Caro