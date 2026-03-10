import '../../App.css';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function Shya() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Shy Aviation</p>
        <p className="tags_">UX Design, User Research</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shya/picture1.png'} alt="Shy Aviation booking user journey" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>UX — booking user journey map</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shya/picture2.png'} alt="Shy Aviation booking wireframes" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — booking flow</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shya/picture3.png'} alt="Shy Aviation quote flow wireframes" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — quote flow</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shya/picture4.png'} alt="Shy Aviation charter selection wireframes" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — charter type selection</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shya/picture5.png'} alt="Shy Aviation quote enquiry screen" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — quote enquiry</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          Shy Aviation is a global aviation charter company offering private jet charter, aircraft management, sales, and expert consulting.
          <br /><br />
          The project involved partnering with Dam Digital to design an online booking tool for private flights, helicopters, and group charters — replacing a manual quoting process with a self-serve digital experience.
        </p>

        <p className="sub-title">Role</p>
        <p className="description">
          I was the UX Designer on the project, leading research and design for the booking tool.
        </p>
        <ul className="description">
          <li>Conducting user research to understand how clients currently book charters and where friction occurs</li>
          <li>Mapping user journeys for different booking types (private jet, helicopter, group charter)</li>
          <li>Designing wireframes and prototypes for the booking flow in Figma</li>
          <li>Working closely with the client to align the experience with Shy Aviation's brand and service expectations</li>
          <li>Iterating designs based on feedback from the client and internal review sessions</li>
        </ul>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The booking tool launched as part of Shy Aviation's new website, replacing the previous manual quoting process with a fully digital booking experience for private flights, helicopters, and group charters.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Shya;
