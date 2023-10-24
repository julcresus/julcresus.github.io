import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-responsive-carousel';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Rethink() {
  return (
    <div>
      <hr></hr>
      <p className='project-title'>Rethink: Mental Illness</p>
      <p className='tags_'>UX Design, Responsive UI Design, Product Design</p>


      <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-10" src={'./img/rethink/rethink_1.png'} alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Current live version</h5>
    </CCarouselCaption>
  </CCarouselItem>


</CCarousel>

  <div className='project_inside'>

          <p className='sub-title'>Project description</p>
          <br></br>
          <p className='description'>
          Rethink Mental Illness is a charity that supports people affected by mental illness. They provide a range of services, including information and advice, support groups, and advocacy. Their mission is to improve the lives of people severely affected by mental illness. They believe that everyone deserves to live a full and meaningful life, regardless of their mental health.<br></br><br></br>
          The donation module is a critical part of Rethink Mental Illness's fundraising efforts. It allows donors to make one-time or recurring donations to support the charity's work. Our goal was to redesign the donation module to make it more user-friendly and accessible, and make its funnel easier to understand and use.</p>
          <br></br>
          <p className='sub-title'>My role</p>
          <br></br>
          <div className='description'>
             </div>
          <br></br>
          <p className='sub-title'>Outcomes</p>
          <br></br>
          <div className='description'>
  
    </div>

        <div className="subheader">
        <h1>
          <a href='/'> &#60; back</a>
        </h1>
      </div>
        

    </div>

    </div>
  );
}

export default Rethink;
