import '../../App.css';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function Rethink() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Rethink Mental Illness</p>
        <p className="tags_">UX Design, UI Design, Product Design</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/rethink/rethink_1.webp'} alt="Rethink current live version" loading="eager" />
              <CCarouselCaption className="d-none d-md-block">
                <h5>Live version at time of design</h5>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          Rethink Mental Illness is a charity supporting people severely affected by mental illness through information, advice, support groups, and advocacy.
          <br /><br />
          The project focused on redesigning their donation module — a critical part of the charity's fundraising efforts — to make it more accessible, easier to understand, and more effective at converting visitors into donors.
        </p>

        <p className="sub-title">Role</p>
        <p className="description">
          Working at Dam Digital, I led the UX and product design for the donation module redesign.
        </p>
        <ul className="description">
          <li>Auditing the existing donation funnel to identify drop-off points and usability issues</li>
          <li>Redesigning the flow to reduce friction for both one-time and recurring donations</li>
          <li>Prototyping and testing the new experience in Figma</li>
          <li>Ensuring the redesign met accessibility standards throughout</li>
        </ul>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The redesigned donation module went live on the Rethink Mental Illness website, delivering a clearer funnel with improved clarity around one-time and recurring giving options. The site has since evolved with a new design direction, but the work served as the foundation for the improved donation experience.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Rethink;
