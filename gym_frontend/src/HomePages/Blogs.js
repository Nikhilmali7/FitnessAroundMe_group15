import {Row,Col,Image} from 'react-bootstrap'
import gymBlog from '../images/gymBlog.jpg';
import Container from 'react-bootstrap/Container';
import blogs1 from '../images/blogs1.jpg';
import blogs2 from '../images/blogs2.jpg';
import blogs3 from '../images/blogs3.jpg';

const Blogs= () => {
    return (
        <>
        <div>
       <Image src= {gymBlog} width= "100%" height="400px" /> 
       <h1 className="yel" style={{color:'violet',textAlign:'center'}}>GYM BLOGS </h1>
         </div>

         <Container style={{marginTop:'120px'}}>
        <Row >
          <Col><Image src= { blogs1} width= "100%" height="200px" /></Col>
          <Col>
          <h3>Featured Story </h3>
<p style={{color:'red'}}>29 June 2018 Drav’s Gym Challenge National Winners (Top 15)</p>
“I Am Passionate About Our Iconic Brand And About Leading This Team Of Talented, Committed And Caring People,” Said Zeitsiff.  “We Have A Strong Vision For The Future Of This Company And Will Be Laser-Focused On Partnering With Our Global Franchise Community To Continue To Grow The Brand And Expand Our Worldwide Prominence In The Fitness Industry.”</Col>
        
        </Row>
      </Container>

      <Container style={{marginTop:'120px'}}>
        <Row >
          <Col><h2 style={{color:'red'}} >How Do I Cut Down Belly Fat?</h2>
          ‘Abs Are Made In The Kitchen’. How Many Times Have You Heard Or Seen This Quote While Browsing On How To Lose Belly Fat Fast?  This Holds True, Without A Proper Diet With The Proper Foods, You Will Not Achieve Those Six Pack Abs That You Crave So Much. 
          But What Foods Should You Consume?

Our Digestive System Is Also Known As Our Second Brain, It Is At The Very Center Of Our Core Health. Optimal Gut Bacterial Environment And Digestive System Function Is The Key To A Healthier Body. You Could Be Eating The Cleanest Nutrition Rich Foods But If Your Body Doesn’t Digest It Properly, No Nutrients Are Absorbed. Resulting In, Fat Built Up And Water Retention.
Even If You Have A Healthy Weight, Fat Around The Midsection Can Impose Health Risks In The Future. 

Belly Fat Is Quite Stubborn And Cannot Be Shed Off Easily. That Is Why You Need To Find The Right Combination Of A Good Workout Routine With The Proper Diet Friendly Foods Which Is The Fastest Way To Lose Belly Fat. 
          </Col>
          <Col><Image src= {blogs2} width= "100%" /></Col>
         
        </Row>
      </Container>

      <Container style={{marginTop:'120px'}}>
        <Row >
          <Col><Image src= {blogs3} width= "100%" /></Col>
          <Col><h3 style={{color:'blue'}}>Grow, Nourish, Sustain Through Food!</h3>
          It’s Said The Basic Need Of The Individual Is Roti (Food), Kapda (Body) And Makaan (Shelter). Give A Deep Thought To This, You Will Be Amazed That Food Influences The Clothes Size That We Wear And The Kind Of Sleep That We Get Each Day!
          The Dual Burden Of Malnutrition Is - Undernourishment And Obesity. 
          
          </Col>
          <Col><h3 style={{color:'blue'}}>Eat Seasonal, Eat local –</h3>
          More The Food Is Travelled, More Are The Nutrients Lost. Seasonal, Easily Available And Local Foods Should Be The Criteria To Opt For. Eat A Balanced And Complete Meal. The Best Practice Is To Have Small Kitchen Garden In Your House And Eat Garden Fresh Vegetables. Planting Like Tulsi, Coriander Leaves Or Microgreens Can Take Great To Begin With.
          </Col>
        </Row>
      </Container>

      

    
        </>
    )
} 

export default Blogs