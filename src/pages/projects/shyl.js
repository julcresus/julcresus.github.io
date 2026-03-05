import '../../App.css';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function Shyl() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Shy Lifestyle</p>
        <p className="tags_">App Design, UX Design, User Research</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shyl/shyl_1.webp'} alt="Shy Lifestyle latest UI screens" loading="eager" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>Latest UI screens</h5>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Project description</p>
        <p className="description">
          Shy Lifestyle is an elite luxury lifestyle and travel management service dedicated to a discerning clientele. Their extensive array of offerings is meticulously crafted to not only save valuable time but also to instill a sense of wonder through exceptional experiences.
          <br /><br />
          From handling everyday tasks like appointment bookings and errand management to orchestrating private jet charters and securing exclusive event access, the team at Shy Lifestyle is unwavering in its commitment to delivering the utmost in service and discretion.
          <br /><br />
          Their latest endeavor involves partnering with Dam Digital to develop a cutting-edge mobile app, offering users a seamless way to access and book their suite of services.
        </p>

        <p className="sub-title">My role</p>
        <p className="description">
          For the mobile app, I played a pivotal role as the UX Designer, collaborating closely with the UI Designer to ensure the creation of a seamless and luxurious experience for the <strong>SHY Lifestyle</strong> members.
          <br /><br />
          <strong>Understanding User Needs:</strong> I initiated the project by conducting comprehensive competition research to understand the competitive landscape and identify gaps that our app could address.
          <br /><br />
          <strong>UI Inspiration and Design:</strong> In collaboration with the UI Designer, I researched UI inspiration from various sources, drawing on the latest design trends and innovative approaches in the luxury service industry.
          <br /><br />
          <strong>Deciphering Client Expectations:</strong> We worked closely with our client, translating their vision and expectations into actionable design elements.
          <br /><br />
          <strong>User Journeys and Wireframes:</strong> As the UX Designer, I developed detailed user journeys and wireframes to map out the interactions and experiences of our members. These served as the blueprint for the entire design and development process.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          While the mobile app is currently in the testing phase, the client is already thrilled with the progress. Our user-centered design approach and collaborative efforts have exceeded their expectations, setting the stage for a successful app launch.
          <br /><br />
          <strong>Membership Engagement:</strong> The introduction of a membership system has already shown promising signs of driving engagement and loyalty.
          <br /><br />
          <strong>Enhanced User Experience:</strong> Our design choices, guided by extensive research and user feedback, have already demonstrated a highly intuitive and engaging user experience during testing.
        </p>

        <a href="/" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Shyl;
