import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-responsive-carousel';

function EveryMindMatters() {
  return (
    <div>
      
      <Carousel>
                <div>
                    <img src="./img/emm.png" />
                </div>
                <div>
                    <img src="./img/emm/picture7.jpg" />
                </div>
                <div>
                    <img src="./img/emm/picture8.png" />
                </div>
                <div>
                    <img src="./img/emm/picture1.jpg" />
                </div>
                <div>
                    <img src="./img/emm/picture2.jpg" />
                </div>
                <div>
                    <img src="./img/emm/picture3.jpg" />
                </div>
                <div>
                    <img src="./img/emm/picture4.jpg" />
                </div>
                <div>
                    <img src="./img/emm/picture5.jpg" />
                </div>
                <div>
                    <img src="./img/emm/picture6.jpg" />
                </div>
                
            </Carousel>
      <div className='project'>
      
        <p className='project-title'>Methods - Every Mind Matters</p>
        <p className='tags'>UX design, UI Design, Redesign</p>
        <Container>
          <Row>
          
          <Col>
          <p className='sub-title'>Project description</p>
          <br></br>
          <p className='description'>
          Public Health England, in partnership with the NHS has launched Every Mind Matters, a new way of empowering people to manage and improve their mental health. Every Mind Matters aims to help people take simple steps to look after their mental health, improve their mental wellbeing and support others.
          </p>
          <br></br>
          <p className='sub-title'>My role</p>
          <br></br>
          <p className='description'>
          I worked on the project for the 2019 edition, between February and April 2019. With a team of user researchers and service designers, we worked on how should the new website should be and how the user should behave on it. The main concern for the research/prototyping was to make the website accessible for everyone, despite their mental health status. <br></br>
          <br></br>For prototyping and making user journeys more accessible and in order to collaborate with the researchers and service designers, I used the GOV.UK Design System in software-based design (Figma, Sketch). Indeed, it required following the GDS regulations and the GOV.UK Design System Figma kit was perfectly designed based on that.
          </p>
          <br></br>
          <p className='sub-title'>Outcomes</p>
          <br></br>
          <p className='description'>As final product, an interactive prototype using Figma was handover to the client, as well as new content blueprints and code drops as guidance for the developers.</p>
          
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

export default EveryMindMatters;
