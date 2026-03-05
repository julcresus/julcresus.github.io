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

        <p className="sub-title">Overview</p>
        <p className="description">
          I volunteered as a UI Designer on the Pride in London website, contributing to the 'Places to Eat & Drink' section. Working from existing wireframes, I designed both desktop and mobile versions of the interface.
          <br /><br />
          Joining late in the process meant working quickly and adapting to decisions already made — a useful experience in picking up mid-project and delivering within constraints.
          <br /><br />
          Tools used: Sketch for design, InVision for prototyping and handoff.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default PrideInLondon;
