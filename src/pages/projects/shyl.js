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
              <CImage className="d-block w-100" src={'./img/shyl/shyl_1.webp'} alt="Shy Lifestyle app UI screens" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>UI design — app screens</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shyl/shyl_2.webp'} alt="Shy Lifestyle app UI screens" />
              <CCarouselCaption className="d-none d-md-block"><p>UI design — service browsing</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shyl/shyl_3.webp'} alt="Shy Lifestyle app UI screens" />
              <CCarouselCaption className="d-none d-md-block"><p>UI design — booking flow</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shyl/shyl_4.webp'} alt="Shy Lifestyle app UI screens" />
              <CCarouselCaption className="d-none d-md-block"><p>UI design — member profile</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shyl/picture5.png'} alt="Shy Lifestyle UX workflow wireframes" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — UX workflow</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          Shy Lifestyle is a luxury lifestyle and travel management service, offering everything from everyday concierge tasks to private jet charters and exclusive event access.
          <br /><br />
          The project involved partnering with Dam Digital to design a mobile app giving members a seamless way to browse and book their full suite of services.
        </p>

        <p className="sub-title">Role</p>
        <p className="description">
          I was the UX Designer on the project, working closely with the UI Designer throughout.
        </p>
        <ul className="description">
          <li>Competitive research to map the luxury lifestyle app landscape</li>
          <li>Developing user journeys and wireframes to define the member experience</li>
          <li>Working with the client to translate their brand vision into design decisions</li>
          <li>Collaborating with the UI Designer to ensure research and UX thinking informed the visual direction</li>
        </ul>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The app launched into testing with strong client feedback. The membership system and booking flow were well-received, with early testing showing good engagement across the core user journeys.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Shyl;
