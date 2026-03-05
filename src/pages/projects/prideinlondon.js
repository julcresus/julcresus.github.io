import '../../App.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

function PrideInLondon() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Pride In London</p>
        <p className="tags_">UI Design</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/pride/picture1.webp'} alt="Pride in London design screen 1" loading="eager" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/pride/picture2.webp'} alt="Pride in London design screen 2" />
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Project description</p>
        <p className="description">
          I got to work on the Pride in London website as a volunteer. It was a small experience because of time schedule, although I got to see most of the process that was made, and got to work with really nice people.
          <br /><br />
          I mainly worked on the UI of 'Places to Eat & Drink', based on wireframes, desktop and mobile version. It's an experience I'd love to try again next year, much more earlier to give myself more time on it.
          <br /><br />
          To create this interface, I used Sketch, combined with InVision for the interaction and the sharing.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default PrideInLondon;
