import '../../App.css';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function Shyl() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Dam Digital / Shy Lifestyle</p>
        <p className="tags_">App Design, UX Design, User Research · 2023</p>

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
          Shy Lifestyle is a luxury concierge and travel management service, offering members everything from everyday requests through to private jet charters and exclusive event access. The project involved designing a mobile app giving members a single place to browse and book their full range of services.
        </p>

        <p className="sub-title">The challenge</p>
        <p className="description">
          Luxury products have specific design expectations. The interface needed to feel premium and effortless, not functional and form-heavy. Getting that balance right while still making all the service information clear and bookable took significant design research. We mapped the competitive landscape carefully to understand what the best luxury apps in this space were doing, and where the gaps were.
          <br /><br />
          The booking system itself was also complex. Shy Lifestyle offers a wide range of services with very different booking requirements. Making that breadth feel organised rather than overwhelming was one of the main design challenges.
        </p>

        <p className="sub-title">What I designed</p>
        <p className="description">
          I led UX and research for the project, working closely with the UI designer throughout. That covered competitive research, user journey mapping, wireframes, and prototypes for the membership browsing, service discovery, and booking flows. I worked with the client to translate their brand positioning into design decisions that felt consistent with the Shy Lifestyle experience.
        </p>

        <p className="sub-title">How we worked</p>
        <p className="description">
          The project involved close collaboration with the client to align design decisions with their brand vision, alongside regular design reviews and iteration.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The app launched and is live at shylifestyle.com. The membership system and booking flow are in active use.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Shyl;
