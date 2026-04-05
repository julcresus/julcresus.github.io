import '../../App.css';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function Shya() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Dam Digital / Shy Aviation</p>
        <p className="tags_">UX Design, User Research · 2022</p>

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
          Shy Aviation is a global private aviation company offering charter flights, helicopter hire, aircraft management and consulting. Before this project, booking was handled manually through a quoting process. The project replaced that with a self-serve digital booking tool for private jets, helicopters and group charters.
        </p>

        <p className="sub-title">The challenge</p>
        <p className="description">
          The main users were corporate clients and their assistants, people booking on behalf of executives, often with specific requirements around dates, routes and aircraft type. The quoting process had to be easy and fast while also collecting sensitive information securely: passenger details, passport numbers, visa information.
          <br /><br />
          Getting that balance right was the core design challenge. A booking flow that feels like a form is the wrong tone for a premium aviation brand. But the information requirements are substantial and can't be skipped. The flow needed to feel guided and reassuring rather than bureaucratic.
        </p>

        <p className="sub-title">What I designed</p>
        <p className="description">
          I led research and UX design for the booking tool. That covered user journey mapping for the three charter types (private jet, helicopter, group), wireframes and prototypes for the quote and booking flows, and the enquiry experience for users who needed a bespoke quote rather than a standard booking. Work was done in Figma, with close collaboration with the Shy Aviation team throughout.
        </p>

        <p className="sub-title">How we worked</p>
        <p className="description">
          Research involved understanding how corporate clients and their assistants currently handled aviation bookings and where friction occurred. Design was iterated based on client feedback and internal reviews.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The booking tool launched as part of Shy Aviation's website and is live at shyaviation.com, replacing the previous manual quoting process.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Shya;
