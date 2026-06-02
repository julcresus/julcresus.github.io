import '../../App.css';
import ProjectNav from '../../components/ProjectNav';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function ESFA() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <h1 className="project-title">ESFA — Education & Skills Funding Agency</h1>
        <p className="tags_">UX Design, UI Design, Coding</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/esfa.webp'} alt="ESFA project screen" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>GOV.UK prototype — React / Express.js</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <h2 className="sub-title">Overview</h2>
        <p className="description">
          The ESFA is accountable for funding education and training for children, young people and adults. It is the result of the combination of the former responsibilities of the Education Funding Agency (EFA) and Skills Funding Agency (SFA).
        </p>

        <h2 className="sub-title">Role</h2>
        <p className="description">
          I've worked on the MyESFA service ("View your payments" and "Subcontractor Declaration Tool") and the National Funding Formula from January to November 2020.
          <br /><br />
          For prototyping and making user journeys more accessible, I used the GOV.UK Design System with React and Express.JS. In order to collaborate with the researchers, other UX Designers and stakeholders, it was much easier, quicker and safer than using software-based design (Figma, Sketch). Indeed, it required following the GDS regulations and the GOV.UK Design System was perfectly designed based on that.
        </p>

        <ProjectNav current="/esfa" />
      </div>
    </div>
  );
}

export default ESFA;
