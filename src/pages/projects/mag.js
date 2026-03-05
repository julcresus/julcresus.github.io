import '../../App.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

function Mag() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">Dam Digital — McArthurGlen</p>
        <p className="tags_">App Design, Responsive Web Design, UX Research</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/shya.webp'} alt="McArthurGlen project overview" loading="eager" />
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          The AFRP is responsible for delivering a single, common, tri-Service recruiting process for the Royal Navy, British Army and Royal Air Force.
          <br /><br />
          The new solution situates the candidate at the heart of the recruitment process while ensuring that the Armed Forces achieve the right quality and quantity of candidates to satisfy demand while remaining agile and responsive to change.
        </p>

        <p className="sub-title">Role</p>
        <p className="description">
          I was the UX Designer on the project. It lasted 5 months, shortened due to the pandemic. The team was composed of a service designer and a user experience designer, although the SD left the project after month 1.
          <br /><br />
          For prototyping and making user journeys more accessible, I used the GOV.UK Design System with React and Express.JS. In order to collaborate with the researchers, other UX Designers and stakeholders, it was much easier, quicker and safer than using software-based design (Figma, Sketch).
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          As final product, an online mockup was delivered to the AFRP, using React, Bootstrap and the GOV.UK design kit. It was using the main candidate user journey, with a rough design to show the flow first and foremost.
          <br /><br />
          Thanks to that, the AFRP development team made a working prototype using the mockups and Salesforce. It then got tested internally between the different services.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default Mag;
