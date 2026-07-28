import ProjectLayout from '../../components/ProjectLayout';
import AccessibleCarousel from '../../components/AccessibleCarousel';

const IMAGES = [
  { src: './img/shya/picture1.png', alt: "Shy Aviation booking user journey", loading: 'lazy', caption: "UX — booking user journey map" },
  { src: './img/shya/picture2.png', alt: "Shy Aviation booking wireframes", loading: 'lazy', caption: "Wireframes — booking flow" },
  { src: './img/shya/picture3.png', alt: "Shy Aviation quote flow wireframes", loading: 'lazy', caption: "Wireframes — quote flow" },
  { src: './img/shya/picture4.png', alt: "Shy Aviation charter selection wireframes", loading: 'lazy', caption: "Wireframes — charter type selection" },
  { src: './img/shya/picture5.png', alt: "Shy Aviation quote enquiry screen", loading: 'lazy', caption: "Wireframes — quote enquiry" }
];

function Shya() {
  return (
    <ProjectLayout 
      title="Dam Digital / Shy Aviation"
      client="Shy Aviation" agency="Dam Digital" year="2022" role="UX Design · Research" 
      route="/shya"
    >
      <AccessibleCarousel images={IMAGES} />

      <h2 className="sub-title">Overview</h2>
        <p className="description">
          Shy Aviation is a global private aviation company offering charter flights, helicopter hire, aircraft management and consulting. Before this project, booking was handled manually through a quoting process. The project replaced that with a self-serve digital booking tool for private jets, helicopters and group charters.
        </p>

        <h2 className="sub-title">The challenge</h2>
        <p className="description">
          The main users were corporate clients and their assistants, people booking on behalf of executives, often with specific requirements around dates, routes and aircraft type. The quoting process had to be easy and fast while also collecting sensitive information securely: passenger details, passport numbers, visa information.
          <br /><br />
          Getting that balance right was the core design challenge. A booking flow that feels like a form is the wrong tone for a premium aviation brand. But the information requirements are substantial and can't be skipped. The flow needed to feel guided and reassuring rather than bureaucratic.
        </p>

        <h2 className="sub-title">What I designed</h2>
        <p className="description">
          I led research and UX design for the booking tool. That covered user journey mapping for the three charter types (private jet, helicopter, group), wireframes and prototypes for the quote and booking flows, and the enquiry experience for users who needed a bespoke quote rather than a standard booking. Work was done in Figma, with close collaboration with the Shy Aviation team throughout.
        </p>

        <h2 className="sub-title">How we worked</h2>
        <p className="description">
          Research involved understanding how corporate clients and their assistants currently handled aviation bookings and where friction occurred. Design was iterated based on client feedback and internal reviews.
        </p>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The booking tool launched as part of Shy Aviation's website and is live at shyaviation.com, replacing the previous manual quoting process.
        </p>
    </ProjectLayout>
  );
}

export default Shya;
