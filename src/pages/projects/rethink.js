import '../../App.css';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function Rethink() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Rethink: Mental Illness</p>
        <p className="tags_">UX Design, Responsive UI Design, Product Design</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/rethink/rethink_1.webp'} alt="Rethink current live version" loading="eager" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>Current live version</h5>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Project description</p>
        <p className="description">
          Rethink Mental Illness is a charity that supports people affected by mental illness. They provide a range of services, including information and advice, support groups, and advocacy. Their mission is to improve the lives of people severely affected by mental illness.
          <br /><br />
          The donation module is a critical part of Rethink Mental Illness's fundraising efforts. It allows donors to make one-time or recurring donations to support the charity's work. Our goal was to redesign the donation module to make it more user-friendly and accessible, and make its funnel easier to understand and use.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Rethink;
