import '../../App.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

function EveryMindMatters() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Every Mind Matters</p>
        <p className="tags_">UX Design, Research, User Testing</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture7.webp'} alt="Every Mind Matters screen 1" loading="eager" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture8.webp'} alt="Every Mind Matters screen 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture1.webp'} alt="Every Mind Matters screen 3" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture2.webp'} alt="Every Mind Matters screen 4" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture3.webp'} alt="Every Mind Matters screen 5" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture4.webp'} alt="Every Mind Matters screen 6" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture5.webp'} alt="Every Mind Matters screen 7" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/emm/picture6.webp'} alt="Every Mind Matters screen 8" />
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Project description</p>
        <p className="description">
          Public Health England, in collaboration with the NHS, introduced "Every Mind Matters," an innovative initiative designed to empower individuals to proactively manage and enhance their mental health. Every Mind Matters is dedicated to assisting people in taking simple yet impactful steps to care for their mental well-being and provide support to others.
        </p>

        <p className="sub-title">My role</p>
        <p className="description">
          In the 2019 edition of this project, spanning from February to April, I played a vital role within a dynamic team comprising user researchers and service designers. Our collective effort was directed at shaping the new website's structure and user interactions. An overarching goal during research and prototyping was ensuring the website's universal accessibility, catering to users regardless of their mental health status.
          <br /><br />
          To achieve these objectives and facilitate collaboration with the research and service design teams, I leveraged the GOV.UK Design System within software-based design tools, such as Figma and Sketch. This approach ensured our adherence to Government Digital Service (GDS) regulations.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The culmination of our efforts resulted in the delivery of an interactive prototype created using Figma. We also provided the client with new content blueprints and code drops, serving as guidance for the developers. These assets aimed to support the project's overarching mission of making mental health resources and information accessible to all.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default EveryMindMatters;
