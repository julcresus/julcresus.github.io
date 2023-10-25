import React from 'react';
import './App.css';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Shya() {
  return (
    <div>
      <hr></hr>
      <p className='project-title'>Shy Aviation</p>
      <p className='tags_'>UX design, User Research</p>


      <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-10" src={'./img/shya/shya_1.png'} alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Latest UI screens</h5>
    </CCarouselCaption>
  </CCarouselItem>


</CCarousel>

  <div className='project_inside'>

          <p className='sub-title'>Project description</p>
          <br></br>
          <div className='description'>
          <p>As a global aviation charter leader, Shy Aviation grants access to every aircraft in the market. Their services encompass:</p>
          <ul className='description'>
              <li>Private jet charter</li>
              <li>Aircraft management</li>
              <li>Aircraft sales and acquisitions</li>
              <li>Expert consulting</li>
          </ul>
    <p>Their unwavering commitment is simple: delivering an unmatched level of service. With a dedicated team of experienced professionals, they tailor solutions to meet each client's unique needs.
Moreover, Shy Aviation prioritizes sustainability, actively reducing their environmental impact through sustainable aviation fuel and innovative fuel efficiency technologies.</p>
    <br></br>
    <p>To enhance the user experience, they've partnered with Dam Digital to develop a cutting-edge online tool for user-friendly bookings of private flights, helicopters, and group charters.</p>

          </div>
          <br></br>
          <p className='sub-title'>My role</p>
          <br></br>
          <div className='description'></div>

    <br></br>
  
          <p className='sub-title'>Outcomes</p>
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

export default Shya;
