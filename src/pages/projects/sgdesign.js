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

        <p className="sub-title">Project description</p>
        <p className="description">
          SG Markets Foreign Exchange is a fast, secure and reliable way to electronically access Societe Generale's deep FX liquidity. FX has many products such as Options, Target Accumulator and Bulk Trading.
          <br /><br />
          I was brought on board around 35% of the project. Each product had its own process, although there was a common base on every process:
        </p>
        <ul className="description">
          <li>Meeting with the stakeholders, P.O and developers</li>
          <li>Defining use cases, as a follow-up of the stakeholders meeting</li>
          <li>Building user journeys and personas</li>
          <li>Validating all the research with the team</li>
          <li>Wireframing based on the research</li>
          <li>UI/UX prototyping using Adobe Photoshop/XD</li>
          <li>Developer handout using InVision</li>
        </ul>
        <p className="description">
          Moreover, the design system was being switched from Bootstrap 3 to Bootstrap 4, which provided a new design system and style. The processes were taking more time and needed more supervision from the transition team.
          <br /><br />
          You can read more about the design process here: <a href='https://design.sgmarkets.com/en/' target='_blank' rel='noreferrer'>design.sgmarkets.com</a>
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default SgDesign;
