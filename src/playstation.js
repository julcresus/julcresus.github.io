import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Playstation() {
  return (
    <div>
     
      <Carousel>
                <div>
                    <img src="./img/psstore/main.jpg" />
                </div>
                <div>
                    <img src="./img/psstore/picture1.jpg" />
                </div>
                <div>
                    <img src="./img/psstore/picture2.jpg" />
                </div>
                <div>
                    <img src="./img/psstore/picture3.jpg" />
                </div>
                <div>
                    <img src="./img/psstore/picture4.jpg" />
                </div>
                <div>
                    <img src="./img/psstore/picture5.jpg" />
                </div>
            </Carousel>
        
      <div className='project'>
      
        <p className='project-title'>University Case Study: Playstation Store</p>
        <p className='tags'>UX design, UI Design, Redesign</p>
        <Container>
          <Row>
          <Col>
          <p className='description'>
          Within the scope of my studies in Kingston University, the goal was to analyse a desktop system such as a website or an application and redesign it for mobile devices, using UX principles and the CIF (Common Industry Format) for Usability Test Report. I decided to focus on the PlayStation Store, which, in my opinion, has a lack of consistency between all current platforms. I decided to merge the PlayStation Store and the current PlayStation Messages app and make an application of its time.
          </p>
          <br></br>
          <ul className='description'>
            <li>Benchmark about the different game platforms (Xbox Store, PlayStation Store Desktop, PS Store Console...)</li>
            <li>Testing on those platforms by making the user try different easy tasks and interview them on their behaviour and opinion</li>
            <li>Surveying a bigger audience made of gamers and non gamers about their use of the gaming platform</li>
            <li>Understanding of all the data gathered and defining the deliverables</li>
            <li>Building user journeys and personas based on the research done before</li>
            <li>Content creation such as messages and games</li>
            <li>Wireframing the app using Axure</li>
            <li>UI Design using Sketch and InVision</li>
            <li>App testing on same users as before</li>
          </ul>
          <br></br>
          <p className='description'>
          You can try it using this link: <a href='https://projects.invisionapp.com/share/UHA1EOIVZ#/screens' target='_blank'>https://projects.invisionapp.com/share/UHA1EOIVZ#/screens</a>",
          </p>
          <br></br>
          </Col>
        </Row>
        <div className="subheader">
        <h1>
          <a href='/'> &#60; back</a>
        </h1>
      </div>
        </Container>

    </div>
    </div>
  );
}

export default Playstation;
