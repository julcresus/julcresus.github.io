import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function PrideInLondon() {
  return (
    <div>
      <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/pride.jpg'} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/pride/picture1.jpg'} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/pride/picture2.jpg'} alt="slide 3" />
  </CCarouselItem>
</CCarousel>

      <div className='project'>
      
        <p className='project-title'>Pride In London</p>
        <p className='tags'>UI Design</p>
        <Container>
          <Row>
          <Col>
          <p className='description'>
          I got to work on the Pride in London website, as a volunteer. It was a small experience because of time schedule, although, I got to see most of the process that was made, and got to work with really nice people. I mainly worked on the UI of 'Places to Eat & Drink', based on wireframes, desktop and mobile version. It's an experience I'd love to try again next year, much more earlier to give myself more time on it.
          </p>
          <br></br>
          <p className='description'>
          To create this interface, I used Sketch, my personal favorite, combined with InVision for the interaction and the sharing.
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

export default PrideInLondon;
