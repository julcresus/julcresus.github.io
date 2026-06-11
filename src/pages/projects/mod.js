import '../../App.css';
import ProjectNav from '../../components/ProjectNav';
import ProjectMeta from '../../components/ProjectMeta';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function Mod() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <h1 className="project-title">MoD — Armed Forces Recruitment Process</h1>
        <ProjectMeta client="Ministry of Defence" agency="Methods" year="2019–2020" duration="5 months" role="UX Design · Prototyping" team="Largely independent, after an initial team of three" />

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-4.webp'} alt="MoD recruitment landing page and branch selection" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>Prototype — landing page & branch selection</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-0.webp'} alt="User flow workshop with stakeholders" />
              <CCarouselCaption className="d-none d-md-block"><p>Research — user flow workshop</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-1.webp'} alt="Mobile wireframes for eligibility check and account creation" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — eligibility check & account creation</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-2.webp'} alt="Mobile wireframes for candidate dashboard and application form" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — candidate dashboard & application</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-3.webp'} alt="Mobile wireframes for assessment booking and results" />
              <CCarouselCaption className="d-none d-md-block"><p>Wireframes — assessment booking & results</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/mod/mod-5.webp'} alt="Pre-production Salesforce prototype showing candidate dashboard" />
              <CCarouselCaption className="d-none d-md-block"><p>Prototype — candidate dashboard & profile</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <h2 className="sub-title">Overview</h2>
        <p className="description">
          The Armed Forces Recruiting Process (AFRP) aimed to redesign recruitment for the Royal Navy, British Army, and Royal Air Force, putting the candidate at the centre while helping each service attract the right number and quality of recruits.
        </p>

        <h2 className="sub-title">Role</h2>
        <p className="description">
          I was the UX Designer on a five-month project that was cut short by the pandemic. The team initially included a service designer and another UX designer, though I worked independently for most of the engagement.
          <br /><br />
          I used the GOV.UK Design System with React and Express.JS to prototype the candidate journey, an approach that made collaboration with researchers and stakeholders faster and more transparent than traditional design tools.
        </p>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The project delivered a coded online mockup built with React, Bootstrap, and the GOV.UK design kit, focused on the main candidate journey. The AFRP development team used it as a foundation to build a working prototype in Salesforce, which then went through internal testing across the different Armed Forces branches.
        </p>

        <ProjectNav current="/mod" />
      </div>
    </div>
  );
}

export default Mod;
