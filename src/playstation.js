import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function Playstation() {
  return (
    <div>
      <hr></hr>        
      <p className='project-title'>University Case Study: Playstation Store</p>
        <p className='tags_'>UX design, UI Design, Redesign</p>
           <CCarousel controls indicators dark>

  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/psstore/picture1.jpg'} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/psstore/picture2.jpg'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/psstore/picture3.jpg'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/psstore/picture4.jpg'} alt="slide 3" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={'./img/psstore/picture5.jpg'} alt="slide 3" />
  </CCarouselItem>
</CCarousel>

      <div className='project_inside'>
      

        <Container>
          <Row>
          <Col>
          <p className='description'>
          During my academic journey at Kingston University, my project focused on the analysis and redesign of a desktop system, such as a website or application, to enhance its usability on mobile devices. This endeavor was guided by essential UX (User Experience) principles and involved the application of the Common Industry Format (CIF) for Usability Test Reports. I chose to tackle the PlayStation Store, a platform I identified as lacking consistency across various devices. My aim was to merge the PlayStation Store with the existing PlayStation Messages app to create a modern, integrated application.</p>
          <br></br>
          <ul className='description'>
          <li>Conducted an in-depth analysis of diverse game platforms, including the Xbox Store, PlayStation Store Desktop, and PS Store Console, to identify industry standards and opportunities for improvement.</li>

<li>Engaged users in hands-on testing across these platforms, systematically assigning easy tasks. Subsequent interviews provided valuable insights into user behavior and opinions, shaping the project's direction.</li>

<li>Expanded research scope by surveying a diverse audience, encompassing both gamers and non-gamers, to gain a comprehensive understanding of their interactions with gaming platforms.</li>

<li>Meticulously analyzed the collected data to derive actionable insights, serving as the foundation for defining project deliverables and key objectives.</li>

<li>Leveraged research findings to craft user journeys and personas, ensuring that the subsequent design phase aligns seamlessly with user needs and expectations.</li>

<li>Initiated content creation, encompassing messaging and game elements, that harmonized with the project's overarching goals and user preferences.</li>

<li>Utilized Axure to craft comprehensive wireframes, providing a visual roadmap for the application's structure and user flow.</li>

<li>Employed design tools like Sketch and InVision to implement the User Interface (UI) design, focusing on aesthetics and user-friendly visual elements.</li>

<li>Conducted rigorous testing of the application with the same user group as before, ensuring the integration of feedback and fine-tuning for optimum performance and usability.</li>

          </ul>
          <br></br>
          <p className='description'>
          You can try it using this InVision <a href='https://projects.invisionapp.com/share/UHA1EOIVZ#/screens' target='_blank'>link</a>.
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

export default Playstation;
