import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function Shyl() {
  return (
    <div>
      <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/shyl.png'} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/shyl/shyl_1.png'} alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Wireframes board on Whimsical</h5>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/shyl/shyl_2.png'} alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Main user journey</h5>
    </CCarouselCaption>
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/shyl/shyl_3.png'} alt="slide 4" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Account settings journey</h5>
    </CCarouselCaption>
  </CCarouselItem>

</CCarousel>
      <div className='project'>
      
        <p className='project-title'>Shy Lifestyle</p>
        <p className='tags'>App design, UX research, UX design</p>
        <Container>
          <Row>
          
          <Col>
          <p className='sub-title'>Project description</p>
          <br></br>
          <p className='description'>
          Shy Lifestyle is an elite luxury lifestyle and travel management service dedicated to a discerning clientele. Their extensive array of offerings is meticulously crafted to not only save valuable time but also to instill a sense of wonder through exceptional experiences.
          From handling everyday tasks like appointment bookings and errand management to orchestrating private jet charters and securing exclusive event access, the team at Shy Lifestyle is unwavering in its commitment to delivering the utmost in service and discretion.
          <br></br><br></br>What sets the company apart is its unwavering focus on cultivating robust relationships with clients, exemplified by their dedication to tailoring bespoke solutions that cater to each individual's unique needs. The Shy Lifestyle team invests time in comprehending clients' lifestyles and preferences, guaranteeing that each experience is a precise reflection of their specific desires.
          <br></br><br></br>Their latest endeavor involves partnering with Dam Digital to develop a cutting-edge mobile app, offering users a seamless way to access and book their suite of services
          </p>
          <br></br>
          <p className='sub-title'>My role</p>
          <br></br>
          <p className='description'>
         </p>
          <br></br>
          <p className='sub-title'>Outcomes</p>
          <br></br>
          <p className='description'></p>
          
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
