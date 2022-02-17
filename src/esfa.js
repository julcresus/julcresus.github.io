import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-responsive-carousel';

function ESFA() {
  return (
    <div>
      
      <Carousel>
                <div>
                    <img src="./img/esfa.jpg" />
                </div>
                
            </Carousel>
      <div className='project'>
      
        <p className='project-title'>Methods - ESFA (Education & Skills Funding Agency)</p>
        <p className='tags'>UX design, UI Design, Coding</p>
        <Container>
          <Row>
          
          <Col>
          <p className='sub-title'>Project description</p>
          <p className='description'>
          The ESFA is accountable for funding education and training for children, young people and adults. It is the result of the combination of the former responsibilities of the Education Funding Agency (EFA) and Skills Funding Agency (SFA).
          </p>
          <p className='sub-title'>My role</p>
       
          <br></br>
          <p className='description'>
          I’ve worked on the MyESF service (“View you payments” and “Subcontractor Declaration Tool”) and the National Funding Formula from January to November 2020.
          <br></br>
          <br></br>For prototyping and making user journeys more accessible, I used the GOV.UK Design System with React and Express.JS. In order to collaborate with the researchers, other UX Designers and stakeholders, it was much easier, quicker and safer than using software-based design (Figma, Sketch). Indeed, it required following the GDS regulations and the GOV.UK Design System was perfectly designed based on that.
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

export default ESFA;
