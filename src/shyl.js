import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-responsive-carousel';

function Shyl() {
  return (
    <div>
      
      <Carousel>
      <div>
                    <img src="./img/shyl.png" />
                </div>
                <div>
                    <img src="./img/shyl/shyl-0.png" />
                </div>
                <div>
                    <img src="./img/shyl/shyl-1.png" />
                </div>
                <div><img src="./img/shyl/shyl-2.png" />
                    </div>
                    <div>
                    <img src="./img/shyl/shyl-3.png" />
                    
                    </div>
                    <div>
                    <img src="./img/shyl/shyl-4.png" />
                    </div>
                    <div>
                    <img src="./img/shyl/shyl-5.png" />
                    </div>
                
            </Carousel>
      <div className='project'>
      
        <p className='project-title'>Dam Digital - Shy Lifestyle</p>
        <p className='tags'>UX design, Responsive UI Design, Coding</p>
        <Container>
          <Row>
          
          <Col>
          <p className='sub-title'>Project description</p>
          <br></br>
          <p className='description'>
          The AFRP is responsible for delivering a single, common, tri-Service recruiting process for the Royal Navy, British Army and Royal Air Force.<br></br>
The new solution situates the candidate at the heart of the recruitment process while ensuring that the Armed Forces achieve the right quality and quantity of candidates to satisfy demand while remaining agile and responsive to change.</p>
<br></br>
          <p className='sub-title'>My role</p>
          <br></br>
          <p className='description'>
          I was the UX Designer on the project. It lasted 5 months, shortnend due to the pandemic. The team was composed of a service designer and a user experience designer, althought the SD left the project after month 1.<br></br>
          <br></br>For prototyping and making user journeys more accessible, I used the GOV.UK Design System with React and Express.JS. In order to collaborate with the researchers, other UX Designers and stakeholders, it was much easier, quicker and safer than using software-based design (Figma, Sketch). Indeed, it required following the GDS regulations and the GOV.UK Design System was perfectly designed based on that.
          </p>
          <br></br>
          <p className='sub-title'>Outcomes</p>
          <br></br>
          <p className='description'>As final product, an online mockup was delivered to the AFRP, using React, Bootstrap and the GOV.UK design kit. It was using the main candidate user journey, with a rough design to show the flow first and foremost. 
Thanks to that, the AFRP development team made a working prototype using the mockups  and SalesForce. It, then, got tested internally between the different services, which was different to our user testing sessions, as schedule conflicts and difficult policies held off some of ours.</p>
          
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

export default Shyl;
