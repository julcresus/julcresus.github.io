import ProjectLayout from '../../components/ProjectLayout';
import AccessibleCarousel from '../../components/AccessibleCarousel';

const IMAGES = [
  { src: './img/defra/picture1.jpg', alt: "People Planner dashboard", loading: 'lazy', caption: "UI design — home dashboard" },
  { src: './img/defra/picture2.jpg', alt: "People Planner planned activities calendar", loading: 'lazy', caption: "UI design — planned activities calendar" },
  { src: './img/defra/picture3.jpg', alt: "People Planner manager team view", loading: 'lazy', caption: "UI design — manager team activities view" },
  { src: './img/defra/picture4.jpg', alt: "People Planner edit allocation", loading: 'lazy', caption: "UI design — edit team member allocation" },
  { src: './img/defra/picture5.png', alt: "People Planner add absence", loading: 'lazy', caption: "UI design — add absence / leave" }
];

function Defra() {
  return (
    <ProjectLayout 
      title="DEFRA / APHA / People Planner"
      client="DEFRA / APHA" agency="Cognizant" year="2024–2025" role="Interaction Design · User Research" 
      route="/defra"
    >
      <AccessibleCarousel images={IMAGES} />

      <h2 className="sub-title">Overview</h2>
        <p className="description">
          The Animal and Plant Health Agency protects animal and plant health across England, Wales and Scotland. Their work includes routine surveillance and responding to disease outbreaks, which means at any point, managers might need to rapidly redeploy staff across teams and regions.
          <br /><br />
          Before this project, all of that planning happened in Excel. Managers tracked team activities, absences and outbreak resourcing across sprawling spreadsheets, with no shared view and no easy way to report upward. The aim was to move this into a purpose-built internal tool (People Planner) built on PowerBI.
        </p>

        <h2 className="sub-title">The challenge</h2>
        <p className="description">
          PowerBI is not a natural home for a designed service. It comes with Microsoft's Fluent design system baked in, a Figma design kit that only partially maps to what the platform can actually render, and very limited room for customisation. The gap between what you can prototype in Figma and what a developer can build in PowerBI is significant: components behave differently, layouts have constraints, and interactions that feel obvious in a design tool either don't exist or need to be approximated.
          <br /><br />
          My job was to design something that worked for managers — clear, accessible, fast to use in high-pressure situations, while staying within what the platform could actually deliver. That meant constant negotiation between user needs and technical reality.
        </p>

        <h2 className="sub-title">What I designed</h2>
        <p className="description">
          The tool had three main areas: a home dashboard showing each manager's planned activities and team notifications, a team activities view with a calendar and day-level activity list, and an edit flow for updating individual team members' allocations.
          <br /><br />
          The calendar was one of the trickier problems. Managers needed to see planned activities, absences and non-working days at a glance across their whole team, then drill into a specific day to see who was doing what. Getting that level of information density to work clearly, without overwhelming the interface or breaking PowerBI's rendering, required a lot of iteration on the colour coding and the relationship between the calendar and the list panel beside it.
          <br /><br />
          The edit form also needed careful thought. Managers could update a single day or apply changes across a whole activity period. The interaction pattern for that, selecting days on the calendar while filling in the form on the right, had to work predictably, especially for someone doing it quickly under pressure.
          <br /><br />
          Throughout, I worked closely with developers to understand what was actually buildable. If I designed something in Figma that PowerBI couldn't replicate, we'd find out at handoff. That feedback loop shaped how I approached the designs, starting from the platform's constraints rather than treating them as a problem for the end.
        </p>

        <h2 className="sub-title">How we worked</h2>
        <p className="description">
          User research ran alongside design throughout, with regular testing sessions with APHA managers. Findings fed directly into decisions: what the dashboard needed to surface, how the calendar should handle edge cases, what level of detail they needed at a glance versus on click.
        </p>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The People Planner tool was developed and tested with APHA staff as part of an ongoing alpha. The design work helped establish patterns for how complex scheduling workflows could be handled within PowerBI's constraints, and gave the development team clear, buildable specifications to work from.
        </p>
    </ProjectLayout>
  );
}

export default Defra;
