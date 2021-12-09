import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function SgDesign() {
  return (
    <div>
      
      <Carousel>
                <div>
                    <img src="./img/sg.jpg" />
                </div>
                <div>
                    <img src="./img/sgdesign/picture1.jpg" />
                </div>
                <div>
                    <img src="./img/sgdesign/picture2.jpg" />
                </div>
                <div>
                    <img src="./img/sgdesign/picture3.jpg" />
                </div>
            </Carousel>
        
      <div className='project'>
      
        <p className='project-title'>Societe Generale Design</p>
        <p className='tags'>ux design, ui design</p>
        <Container>
          <Row>
          <Col>
          <p className='description'>
          SG Markets Foreign Exchange is a fast, secure and reliable way to electronically access Societe Generale’s deep FX liquidity. FX has many products such as Options, Target Accumulator and Bulk Trading.
          </p>
          <br></br>
          <p className='description'>
          I was brought on board around 35% of the project. Each product had its own process, although there was a common base on every process.<ul><li>Meeting with the stakeholders, P.O and developers aka. the pizza team</li><li> Defining use cases, as a follow-up of the stakeholders meeting</li><li>Building user journeys and personas</li><li>Validating all the research with the pizza team</li><li>Wireframing based on the research</li><li>UI/UX prototyping using Adobe Photoshop/XD</li><li>Developer handout using InVision</li></ul><br></br>Moreover, the design system was being switched from Bootstrap 3 to Bootstrap 4, which provided a new design system and style, which brought some changes to the actual process. Indeed, the processes were taking more time and needed more supervision from the transition team, and also more discussion with developers.
            </p>
            
          <br></br>
          <p className='description'>
          You can read more about the design process here: <a href='https://design.sgmarkets.com/en/' target='_blank'> https://design.sgmarkets.com/en/</a>
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

export default SgDesign;
