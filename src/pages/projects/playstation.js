import '../../App.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

function Playstation() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">University Case Study — Playstation Store</p>
        <p className="tags_">UX Design, UI Design, App Redesign</p>

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

        <p className="sub-title">Project description</p>
        <p className="description">
          During my academic journey at Kingston University, my project focused on the analysis and redesign of a desktop system to enhance its usability on mobile devices. This endeavor was guided by essential UX principles and involved the application of the Common Industry Format (CIF) for Usability Test Reports.
          <br /><br />
          I chose to tackle the PlayStation Store, a platform I identified as lacking consistency across various devices. My aim was to merge the PlayStation Store with the existing PlayStation Messages app to create a modern, integrated application.
        </p>
        <ul className="description">
          <li>Conducted an in-depth analysis of diverse game platforms to identify industry standards and opportunities for improvement.</li>
          <li>Engaged users in hands-on testing across these platforms, assigning easy tasks. Subsequent interviews provided valuable insights into user behaviour and opinions.</li>
          <li>Expanded research scope by surveying a diverse audience, encompassing both gamers and non-gamers.</li>
          <li>Meticulously analysed the collected data to derive actionable insights, serving as the foundation for defining project deliverables.</li>
          <li>Leveraged research findings to craft user journeys and personas.</li>
          <li>Initiated content creation, encompassing messaging and game elements.</li>
          <li>Utilised Axure to craft comprehensive wireframes.</li>
          <li>Employed Sketch and InVision to implement the UI design.</li>
          <li>Conducted rigorous testing of the application with the same user group.</li>
        </ul>
        <p className="description">
          You can try it using this InVision <a href='https://projects.invisionapp.com/share/UHA1EOIVZ#/screens' target='_blank' rel='noreferrer'>link</a>.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Playstation;
