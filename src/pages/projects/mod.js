import '../../App.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

function Mod() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">MoD — Armed Forces Recruitment Process</p>
        <p className="tags_">UX Design, Responsive UI Design, Coding</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-4.webp'} alt="MoD recruitment process screen 1" loading="eager" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-0.webp'} alt="MoD recruitment process screen 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-1.webp'} alt="MoD recruitment process screen 3" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-2.webp'} alt="MoD recruitment process screen 4" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-3.webp'} alt="MoD recruitment process screen 5" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-5.webp'} alt="MoD recruitment process screen 6" />
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Project description</p>
        <p className="description">
          The Armed Forces Recruiting Process (AFRP) project aimed to revolutionise the recruitment procedures for the Royal Navy, British Army, and Royal Air Force. It had a dual objective: prioritising the candidate's experience while ensuring the Armed Forces had access to the right quantity and quality of recruits, all while maintaining agility and adaptability to changing circumstances.
        </p>

        <p className="sub-title">My role</p>
        <p className="description">
          I had the privilege of serving as the UX Designer on this transformational project. Our ambitious five-month timeline was unexpectedly shortened due to the pandemic, which presented unique challenges. At the project's outset, I collaborated with a service designer and another UX designer, although the latter departed after the first month.
          <br /><br />
          For enhancing user experiences and streamlining the candidate journey, I harnessed the power of the GOV.UK Design System, incorporating React and Express.JS. This technology stack provided a robust platform for cooperation with researchers, fellow UX designers, and stakeholders.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The crowning achievement of the project was the delivery of an online mockup for the AFRP. This mockup, developed using React, Bootstrap, and the GOV.UK design kit, focused on the primary candidate journey. Its design initially emphasised flow and functionality. This mockup served as the cornerstone upon which the AFRP development team built a functional prototype, incorporating Salesforce.
          <br /><br />
          Subsequent internal testing within the various Armed Forces branches allowed us to refine the process. This project underscores the critical role of user experience design in reshaping recruiting processes for the betterment of the Armed Forces.
        </p>

        <a href="/" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Mod;
