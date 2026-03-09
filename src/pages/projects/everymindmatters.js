import '../../App.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function EveryMindMatters() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Every Mind Matters</p>
        <p className="tags_">UX Design, UI Design, User Research</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture7.webp'} alt="Every Mind Matters screen 1" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>Interactive prototype — Figma</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture8.webp'} alt="Every Mind Matters screen 2" />
              <CCarouselCaption className="d-none d-md-block"><p>Interactive prototype — Figma</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture1.webp'} alt="Every Mind Matters screen 3" />
              <CCarouselCaption className="d-none d-md-block"><p>Interactive prototype — Figma</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture2.webp'} alt="Every Mind Matters screen 4" />
              <CCarouselCaption className="d-none d-md-block"><p>Interactive prototype — Figma</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture3.webp'} alt="Every Mind Matters screen 5" />
              <CCarouselCaption className="d-none d-md-block"><p>Interactive prototype — Figma</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture4.webp'} alt="Every Mind Matters screen 6" />
              <CCarouselCaption className="d-none d-md-block"><p>Interactive prototype — Figma</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture5.webp'} alt="Every Mind Matters screen 7" />
              <CCarouselCaption className="d-none d-md-block"><p>Interactive prototype — Figma</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture6.webp'} alt="Every Mind Matters screen 8" />
              <CCarouselCaption className="d-none d-md-block"><p>Interactive prototype — Figma</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          Every Mind Matters is a Public Health England and NHS initiative designed to help people take practical steps to look after their mental health and support those around them.
        </p>

        <p className="sub-title">Role</p>
        <p className="description">
          From February to April 2019, I worked as part of a team of user researchers and service designers to shape the new website's structure and user interactions. A key focus throughout was accessibility — designing for users regardless of their mental health status or digital confidence.
          <br /><br />
          I worked in Figma and Sketch using the GOV.UK Design System, ensuring all design decisions aligned with GDS standards.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The project delivered an interactive Figma prototype alongside content blueprints and code guidance for the development team — providing a clear handoff for a service that needed to reach as many people as possible.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default EveryMindMatters;
