import '../../App.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

function SgDesign() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Societe Generale Design</p>
        <p className="tags_">UX Design, UI Design</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/sgdesign/picture1.webp'} alt="Societe Generale design screen 1" loading="eager" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/sgdesign/picture2.webp'} alt="Societe Generale design screen 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/sgdesign/picture3.webp'} alt="Societe Generale design screen 3" />
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          SG Markets Foreign Exchange is Societe Generale's electronic FX trading platform, covering products including Options, Target Accumulator, and Bulk Trading.
          <br /><br />
          I joined the project partway through and worked across multiple FX products, contributing to UX and UI design while the design system was transitioning from Bootstrap 3 to Bootstrap 4.
        </p>

        <p className="sub-title">Process</p>
        <p className="description">
          Each product followed a common design process:
        </p>
        <ul className="description">
          <li>Stakeholder, product owner, and developer alignment sessions</li>
          <li>Defining use cases based on stakeholder input</li>
          <li>Building user journeys and personas</li>
          <li>Validating research findings with the team</li>
          <li>Wireframing based on validated research</li>
          <li>UI prototyping in Adobe Photoshop and XD</li>
          <li>Developer handoff via InVision</li>
        </ul>
        <p className="description">
          The Bootstrap 3 to 4 migration ran in parallel, requiring closer coordination with the transition team and additional review time on design decisions.
          <br /><br />
          You can read more about the design process at <a href='https://design.sgmarkets.com/en/' target='_blank' rel='noreferrer'>design.sgmarkets.com</a>.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          Several of the product designs shipped as part of the live SG Markets FX platform. Others remained in prototype stage or were deprioritised during the Bootstrap migration period.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default SgDesign;
