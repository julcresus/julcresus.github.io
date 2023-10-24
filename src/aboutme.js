import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel } from 'react-responsive-carousel';

function AboutMe() {
  return (
    <div>
      <hr></hr>
        <div>
        <Container>
          <Row className='justify-content-md-center aboutme-row'>
            <Col xs={12} sm={5} md={5}>
            <img className='me img-fluid' src='./img/me.jpeg' width={350}></img>
            </Col>
            <Col xs={12} sm={7} md={7} className='abouttext'>
              <p><b>Bonjour!</b> <br></br><br></br>I'm Julien, a Paris-born and London-based UX Designer, passionate about creating meaningful and user-centered experiences through empathy and problem-solving.<br></br><br></br> With a background in UX design, I've dedicated my career to the art of crafting digital solutions that not only look fantastic but also work seamlessly to meet the needs of users.<br></br></p>
              <br></br>
            <p>In my free time, I enjoy playing rugby and experimenting in the kitchen, baking delicious treats. My portfolio showcases various projects, from user-friendly mobile apps to engaging web platforms.</p>
           <br></br>
           <p>I'm always open to connecting with fellow designers and potential collaborators. Feel free to get in touch via email at <a href='mailto:cresusjulien@gmail.com'>cresusjulien@gmail.com</a> or connect with me on <a href='https://www.linkedin.com/in/juliencresus/'>LinkedIn</a>. Thanks for visiting my portfolio, and I look forward to the opportunity to work together on great UX projects.</p>
            </Col>
          </Row>
          <Row className="subheader">
          <h1>
          <a href='/'> &#60; back</a>
        </h1>
          </Row>
        </Container>
        
    </div>
    </div>
  );
}

export default AboutMe;
