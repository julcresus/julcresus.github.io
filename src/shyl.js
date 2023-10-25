import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Shyl() {
  return (
    <div>
      <hr></hr>
      <p className='project-title'>Shy Lifestyle</p>
      <p className='tags_'>App design, UX research, UX design</p>


      <CCarousel controls indicators dark>
  <CCarouselItem>
    <CImage className="d-block w-10" src={'./img/shyl/shyl_1.png'} alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Latest UI screens</h5>
    </CCarouselCaption>
  </CCarouselItem>

</CCarousel>

  <div className='project_inside'>

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
          <div className='description'>
          <p>
        For the mobile app, I played a pivotal role as the UX Designer, collaborating closely with the UI Designer to ensure the creation of a seamless and luxurious experience for the <b>SHY Lifestyle</b> members. This project revolved around an innovative concept, enabling users to book premium lifestyle services, engage in personalized chats with the company, all within an exclusive membership system.
    </p>
    <br></br>
    <strong>Understanding User Needs:</strong>
    <p>I initiated the project by conducting comprehensive competition research to understand the competitive landscape and identify gaps that our app could address. This research allowed us to set the stage for creating a unique and differentiated user experience.</p>
    <br></br>
    <strong>UI Inspiration and Design:</strong>
    <p>In collaboration with the UI Designer, I researched UI inspiration from various sources, drawing on the latest design trends and innovative approaches in the luxury service industry. This research served as a foundation for crafting a design that resonated with the target audience and captured the essence of luxury.</p>
    <br></br>
    <strong>Deciphering Client Expectations:</strong>
    <p>We worked closely with our client, translating their vision and expectations into actionable design elements. Maintaining open lines of communication, we ensured alignment with their objectives and seamlessly integrated their insights into the design process.</p>
    <br></br>
    <strong>User Journeys and Wireframes:</strong>
    <p>As the UX Designer, I developed detailed user journeys and wireframes to map out the interactions and experiences of our members. These served as the blueprint for the entire design and development process, ensuring intuitive navigation and a user-friendly interface.</p>
    <br></br>
    <p>Collaborating with the UI Designer was a critical aspect of our success. Our collective efforts resulted in a mobile app that seamlessly combined functionality, aesthetics, and exclusivity. Users could effortlessly book luxury lifestyle services, engage in personalized conversations with the company, and enjoy a streamlined experience within the membership system.</p>
         </div>
          <br></br>
          <p className='sub-title'>Outcomes</p>
          <br></br>
          <div className='description'>
          <p>While the mobile app is currently in the testing phase, I'm delighted to report that the client is already thrilled with the progress. Our user-centered design approach and collaborative efforts have exceeded their expectations, setting the stage for a successful app launch.</p>
          <br></br>
          <strong>Membership Engagement:</strong>
    <p>The introduction of a membership system has already shown promising signs of driving engagement and loyalty, aligning with the client's vision of a more exclusive and interactive service.</p>
    <br></br>
    <strong>Enhanced User Experience:</strong>
    <p>Our design choices, guided by extensive research and user feedback, have already demonstrated a highly intuitive and engaging user experience during testing. Members are seamlessly navigating and booking luxury lifestyle services, enhancing their interaction with the app.</p>

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

export default Shyl;
