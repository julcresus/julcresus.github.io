import '../../App.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function Mod() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">MoD — Armed Forces Recruitment Process</p>
        <p className="tags_">UX Design, UI Design, Coding</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-4.webp'} alt="MoD recruitment process screen 1" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>Candidate journey — coded prototype</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-0.webp'} alt="MoD recruitment process screen 2" />
              <CCarouselCaption className="d-none d-md-block"><p>Candidate journey — coded prototype</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-1.webp'} alt="MoD recruitment process screen 3" />
              <CCarouselCaption className="d-none d-md-block"><p>Candidate journey — coded prototype</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-2.webp'} alt="MoD recruitment process screen 4" />
              <CCarouselCaption className="d-none d-md-block"><p>Candidate journey — coded prototype</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-3.webp'} alt="MoD recruitment process screen 5" />
              <CCarouselCaption className="d-none d-md-block"><p>Candidate journey — coded prototype</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-5.webp'} alt="MoD recruitment process screen 6" />
              <CCarouselCaption className="d-none d-md-block"><p>Candidate journey — coded prototype</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          The Armed Forces Recruiting Process (AFRP) aimed to redesign recruitment for the Royal Navy, British Army, and Royal Air Force — putting the candidate at the centre while helping each service attract the right number and quality of recruits.
        </p>

        <p className="sub-title">Role</p>
        <p className="description">
          I was the UX Designer on a five-month project that was cut short by the pandemic. The team initially included a service designer and another UX designer, though I worked independently for most of the engagement.
          <br /><br />
          I used the GOV.UK Design System with React and Express.JS to prototype the candidate journey — an approach that made collaboration with researchers and stakeholders faster and more transparent than traditional design tools.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The project delivered a coded online mockup built with React, Bootstrap, and the GOV.UK design kit, focused on the main candidate journey. The AFRP development team used it as a foundation to build a working prototype in Salesforce, which then went through internal testing across the different Armed Forces branches.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Mod;
