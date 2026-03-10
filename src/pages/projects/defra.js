import '../../App.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function DEFRA() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">DEFRA / APHA — People Planner</p>
        <p className="tags_">UX Design, UI Design, User Research</p>

        <div className="carousel-wrap">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/defra/picture1.jpg'} alt="People Planner dashboard" loading="eager" />
              <CCarouselCaption className="d-none d-md-block"><p>UI design — home dashboard</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/defra/picture2.jpg'} alt="People Planner planned activities calendar" />
              <CCarouselCaption className="d-none d-md-block"><p>UI design — planned activities calendar</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/defra/picture3.jpg'} alt="People Planner manager team view" />
              <CCarouselCaption className="d-none d-md-block"><p>UI design — manager team activities view</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/defra/picture4.jpg'} alt="People Planner edit allocation" />
              <CCarouselCaption className="d-none d-md-block"><p>UI design — edit team member allocation</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={'./img/defra/picture5.png'} alt="People Planner add absence" />
              <CCarouselCaption className="d-none d-md-block"><p>UI design — add absence / leave</p></CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div>

        <p className="sub-title">Overview</p>
        <p className="description">
          The Animal and Plant Health Agency (APHA) is an executive agency of DEFRA, responsible for safeguarding animal and plant health for the benefit of people, the environment, and the economy.
          <br /><br />
          This alpha project focused on designing an internal workforce planning tool — People Planner — to help APHA staff and managers plan, track, and report on team activities, absences, and outbreak resourcing across the agency.
          <br /><br />
          Working as part of the UCD team at Cognizant, I collaborated with user researchers to understand the needs of both individual staff members and team managers, translating complex scheduling workflows into a clear, accessible interface.
        </p>

        <p className="sub-title">Role</p>
        <p className="description">
          As a UX Designer working alongside user researchers, I contributed to designing and testing digital services for internal DEFRA agency staff.
        </p>
        <ul className="description">
          <li>Designing wireframes and prototypes in Figma based on user requirements</li>
          <li>Supporting user research sessions with internal stakeholders</li>
          <li>Creating user flows and journey maps</li>
          <li>Iterating designs based on user feedback and testing</li>
          <li>Developing design concepts for data management interfaces</li>
          <li>Collaborating with user researchers to plan and conduct testing sessions</li>
        </ul>
        <p className="description">
          The work required understanding complex internal processes while creating clear, accessible interfaces that met diverse user needs across different roles.
        </p>

        <p className="sub-title">Process</p>
        <p className="description">
          The project involved close collaboration with user research, conducting in-depth interviews and testing sessions with internal users across various roles. Regular workshops and requirement gathering sessions helped inform the design direction.
          <br /><br />
          Design concepts were tested iteratively through multiple rounds of user sessions, allowing for continuous refinement based on feedback.
          <br /><br />
          Following GDS standards, the focus remained on creating accessible, intuitive interfaces that simplified complex workflows and data management tasks for internal staff.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The collaborative approach between UX design and user research helped identify key user pain points and validate design decisions throughout the project. The work contributed to improving internal processes and data management for DEFRA agency staff.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default DEFRA;
