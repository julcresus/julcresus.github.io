import '../../App.css';
import ProjectNav from '../../components/ProjectNav';
import ProjectMeta from '../../components/ProjectMeta';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react';

function Rethink() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <h1 className="project-title">Rethink Mental Illness</h1>
        <ProjectMeta client="Rethink Mental Illness" agency="Dam Digital" year="2022" role="UX Design · Product Design" />

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/rethink/picture1.png'} alt="Rethink donation module wireframes" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — donation module redesign</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/rethink/picture2.png'} alt="Rethink donation flow screens" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — donation flow</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/rethink/picture3.png'} alt="Rethink recurring donation screens" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — recurring donation screens</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/rethink/picture4.png'} alt="Rethink one-time donation screens" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — one-time donation screens</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/rethink/picture5.png'} alt="Rethink donation module components" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — component exploration</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <h2 className="sub-title">Overview</h2>
        <p className="description">
          Rethink Mental Illness is a charity supporting people severely affected by mental illness through information, advice, support groups, and advocacy.
          <br /><br />
          The project focused on redesigning their donation module, a critical part of the charity's fundraising efforts, to make it more accessible, easier to understand, and more effective at converting visitors into donors.
        </p>

        <h2 className="sub-title">Role</h2>
        <p className="description">
          Working at Dam Digital, I led the UX and product design for the donation module redesign.
        </p>
        <ul className="description">
          <li>Auditing the existing donation funnel to identify drop-off points and usability issues</li>
          <li>Redesigning the flow to reduce friction for both one-time and recurring donations</li>
          <li>Prototyping and testing the new experience in Figma</li>
          <li>Ensuring the redesign met accessibility standards throughout</li>
        </ul>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The redesigned donation module went live on the Rethink Mental Illness website, delivering a clearer funnel with improved clarity around one-time and recurring giving options. The site has since evolved with a new design direction, but the work served as the foundation for the improved donation experience.
        </p>

        <ProjectNav current="/rethink" />
      </div>
    </div>
  );
}

export default Rethink;
