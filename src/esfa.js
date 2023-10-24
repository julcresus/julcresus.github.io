import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function ESFA() {
  return (
    <div>
      <hr></hr>
            <p className='project-title'>ESFA (Education & Skills Funding Agency)</p>
        <p className='tags_'>UX design, UI Design, Coding</p>
            <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/esfa.jpg'} alt="slide 1" />
  </CCarouselItem>

</CCarousel>
      <div className='project_inside'>

          <p className='sub-title'>Project description</p>
          <br></br>
          <p className='description'>
          The ESFA is accountable for funding education and training for children, young people and adults. It is the result of the combination of the former responsibilities of the Education Funding Agency (EFA) and Skills Funding Agency (SFA).
          </p>
          <br></br>
          <p className='sub-title'>My role</p>
       
          <br></br>
          <p className='description'>
          I’ve worked on the MyESF service (“View your payments” and “Subcontractor Declaration Tool”) and the National Funding Formula from January to November 2020.
          <br></br>
          <br></br>For prototyping and making user journeys more accessible, I used the GOV.UK Design System with React and Express.JS. In order to collaborate with the researchers, other UX Designers and stakeholders, it was much easier, quicker and safer than using software-based design (Figma, Sketch). Indeed, it required following the GDS regulations and the GOV.UK Design System was perfectly designed based on that.
          </p>
          <br></br>
          
        <div className="subheader">
        <h1>
          <a href='/'> &#60; back</a>
        </h1>
      </div>
</div>
    </div>
  );
}

export default ESFA;
