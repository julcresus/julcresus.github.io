import '../../App.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

function Playstation() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">University Case Study — PlayStation Store</p>
        <p className="tags_">UX Design, UI Design, App Design</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/psstore/picture1.webp'} alt="PlayStation Store redesign screen 1" loading="eager" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/psstore/picture2.webp'} alt="PlayStation Store redesign screen 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/psstore/picture3.webp'} alt="PlayStation Store redesign screen 3" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/psstore/picture4.webp'} alt="PlayStation Store redesign screen 4" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/psstore/picture5.webp'} alt="PlayStation Store redesign screen 5" />
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          A university case study at Kingston University focused on analysing and redesigning the PlayStation Store for mobile. The Store lacked consistency across devices, so the goal was to merge it with the PlayStation Messages app into a single, integrated mobile experience — applying UX principles and the Common Industry Format (CIF) for usability testing throughout.
        </p>

        <p className="sub-title">Role</p>
        <p className="description">
          I led the full design process from research through to final prototype.
        </p>
        <ul className="description">
          <li>Analysed competing game platforms to identify industry standards and design opportunities</li>
          <li>Conducted usability testing and interviews with gamers and non-gamers</li>
          <li>Ran a broader survey to capture diverse user perspectives</li>
          <li>Synthesised research into user journeys and personas</li>
          <li>Wireframed the new experience in Axure</li>
          <li>Designed the UI in Sketch and built an interactive prototype in InVision</li>
          <li>Tested the final prototype with the original user group</li>
        </ul>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The project delivered a fully interactive prototype combining the PlayStation Store and Messages into a unified mobile app. You can explore it via the InVision{' '}
          <a href='https://projects.invisionapp.com/share/UHA1EOIVZ#/screens' target='_blank' rel='noreferrer'>prototype link</a>.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Playstation;
