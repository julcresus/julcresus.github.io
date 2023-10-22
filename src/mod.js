import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';


function Mod() {
  return (
    <div>
      
      <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/mod.png'} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/mod/mod-0.png'} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/mod/mod-1.png'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/mod/mod-2.png'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/mod/mod-3.png'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/mod/mod-4.png'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/mod/mod-5.png'} alt="slide 3" />
  </CCarouselItem>


</CCarousel>

      <div className='project'>
      
        <p className='project-title'>MoD (Armed Forces Recruitement Process)</p>
        <p className='tags'>UX design, Responsive UI Design, Coding</p>
        <Container>
          <Row>
          
          <Col>
          <p className='sub-title'>Project description</p>
          <br></br>
          <p className='description'>
          The Armed Forces Recruiting Process (AFRP) project aimed to revolutionize the recruitment procedures for the Royal Navy, British Army, and Royal Air Force. It had a dual objective: prioritizing the candidate's experience while ensuring the Armed Forces had access to the right quantity and quality of recruits, all while maintaining agility and adaptability to changing circumstances.</p>
          <br></br>
          <p className='sub-title'>My role</p>
          <br></br>
          <p className='description'>
          I had the privilege of serving as the UX Designer on this transformational project. Our ambitious five-month timeline was unexpectedly shortened due to the pandemic, which presented unique challenges. At the project's outset, I collaborated with a service designer and another UX designer, although the latter departed after the first month.<br></br><br></br>For enhancing user experiences and streamlining the candidate journey, I harnessed the power of the GOV.UK Design System, incorporating React and Express.JS. This technology stack provided a robust platform for cooperation with researchers, fellow UX designers, and stakeholders. Notably, it proved to be more efficient and compliant with GDS regulations compared to software-based design tools like Figma or Sketch.
          </p>
          <br></br>
          <p className='sub-title'>Outcomes</p>
          <br></br>
          <p className='description'>The crowning achievement of the project was the delivery of an online mockup for the AFRP. This mockup, developed using React, Bootstrap, and the GOV.UK design kit, focused on the primary candidate journey. Its design initially emphasized flow and functionality. This mockup served as the cornerstone upon which the AFRP development team built a functional prototype, incorporating Salesforce. <br></br><br></br>Subsequent internal testing within the various Armed Forces branches allowed us to refine the process. It's worth noting that internal testing presented its own set of challenges, including schedule conflicts and policy constraints, which we navigated diligently.<br></br><br></br>This project underscores the critical role of user experience design in reshaping recruiting processes for the betterment of the Armed Forces. It demonstrates the power of effective collaboration, modern design frameworks, and adaptability in the face of unexpected challenges. Ultimately, the project aimed at serving both the candidates and the Armed Forces efficiently, and the resulting outcomes are a testament to this vision.</p>
          
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

export default Mod;
