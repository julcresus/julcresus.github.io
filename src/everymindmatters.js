import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function EveryMindMatters() {
  return (
    <div>
               <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/emm.png'} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/emm/picture7.jpg'} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/emm/picture8.jpg'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/emm/picture1.jpg'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/emm/picture2.jpg'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/emm/picture3.jpg'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/emm/picture4.jpg'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/emm/picture5.jpg'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/emm/picture6.jpg'} alt="slide 3" />
  </CCarouselItem>
</CCarousel>

      <div className='project'>
      
        <p className='project-title'>Every Mind Matters</p>
        <p className='tags'>UX design, UI Design, Redesign</p>
        <Container>
          <Row>
          
          <Col>
          <p className='sub-title'>Project description</p>
          <br></br>
          <p className='description'>
          Public Health England, in collaboration with the NHS, introduced "Every Mind Matters," an innovative initiative designed to empower individuals to proactively manage and enhance their mental health. Every Mind Matters is dedicated to assisting people in taking simple yet impactful steps to care for their mental well-being and provide support to others. </p>
          <br></br>
          <p className='sub-title'>My role</p>
          <br></br>
          <p className='description'>
          In the 2019 edition of this project, spanning from February to April, I played a vital role within a dynamic team comprising user researchers and service designers. Our collective effort was directed at shaping the new website's structure and user interactions. An overarching goal during research and prototyping was ensuring the website's universal accessibility, catering to users regardless of their mental health status.<br></br><br></br>To achieve these objectives and facilitate collaboration with the research and service design teams, I leveraged the GOV.UK Design System within software-based design tools, such as Figma and Sketch. This approach ensured our adherence to Government Digital Service (GDS) regulations, with the GOV.UK Design System Figma kit serving as an invaluable resource for seamless design compliance.
          </p>
          <br></br>
          <p className='sub-title'>Outcomes</p>
          <br></br>
          <p className='description'>The culmination of our efforts resulted in the delivery of an interactive prototype created using Figma. We also provided the client with new content blueprints and code drops, serving as guidance for the developers. These assets aimed to support the project's overarching mission of making mental health resources and information accessible to all.</p>
          
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
