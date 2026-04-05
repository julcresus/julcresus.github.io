import '../../App.css';
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';

function DEFRA() {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <p className="project-title">DEFRA / APHA / People Planner</p>
        <p className="tags_">UX Design, Interaction Design, Internal Tools · 2024–2025</p>

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
          The Animal and Plant Health Agency protects animal and plant health across England, Wales and Scotland. Their work includes routine surveillance and responding to disease outbreaks, which means at any point, managers might need to rapidly redeploy staff across teams and regions.
          <br /><br />
          Before this project, all of that planning happened in Excel. Managers tracked team activities, absences and outbreak resourcing across sprawling spreadsheets, with no shared view and no easy way to report upward. The aim was to move this into a purpose-built internal tool (People Planner) built on PowerBI.
        </p>

        <p className="sub-title">The challenge</p>
        <p className="description">
          PowerBI is not a natural home for a designed service. It comes with Microsoft's Fluent design system baked in, a Figma design kit that only partially maps to what the platform can actually render, and very limited room for customisation. The gap between what you can prototype in Figma and what a developer can build in PowerBI is significant: components behave differently, layouts have constraints, and interactions that feel obvious in a design tool either don't exist or need to be approximated.
          <br /><br />
          My job was to design something that worked for managers — clear, accessible, fast to use in high-pressure situations, while staying within what the platform could actually deliver. That meant constant negotiation between user needs and technical reality.
        </p>

        <p className="sub-title">What I designed</p>
        <p className="description">
          The tool had three main areas: a home dashboard showing each manager's planned activities and team notifications, a team activities view with a calendar and day-level activity list, and an edit flow for updating individual team members' allocations.
          <br /><br />
          The calendar was one of the trickier problems. Managers needed to see planned activities, absences and non-working days at a glance across their whole team, then drill into a specific day to see who was doing what. Getting that level of information density to work clearly, without overwhelming the interface or breaking PowerBI's rendering, required a lot of iteration on the colour coding and the relationship between the calendar and the list panel beside it.
          <br /><br />
          The edit form also needed careful thought. Managers could update a single day or apply changes across a whole activity period. The interaction pattern for that, selecting days on the calendar while filling in the form on the right, had to work predictably, especially for someone doing it quickly under pressure.
          <br /><br />
          Throughout, I worked closely with developers to understand what was actually buildable. If I designed something in Figma that PowerBI couldn't replicate, we'd find out at handoff. That feedback loop shaped how I approached the designs, starting from the platform's constraints rather than treating them as a problem for the end.
        </p>

        <p className="sub-title">How we worked</p>
        <p className="description">
          User research ran alongside design throughout, with regular testing sessions with APHA managers. Findings fed directly into decisions: what the dashboard needed to surface, how the calendar should handle edge cases, what level of detail they needed at a glance versus on click.
        </p>

        <p className="sub-title">Outcomes</p>
        <p className="description">
          The People Planner tool was developed and tested with APHA staff as part of an ongoing alpha. The design work helped establish patterns for how complex scheduling workflows could be handled within PowerBI's constraints, and gave the development team clear, buildable specifications to work from.
        </p>

        <a href="/#projects" className="about-back">← Back</a>
      </div>
    </div>
  );
}

export default DEFRA;
