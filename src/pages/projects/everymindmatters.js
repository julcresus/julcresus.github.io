import ProjectLayout from '../../components/ProjectLayout';
import AccessibleCarousel from '../../components/AccessibleCarousel';

const IMAGES = [
  { src: './img/emm/picture7.webp', alt: "Every Mind Matters user flow diagram", loading: 'lazy', caption: "UX — user flow diagram" },
  { src: './img/emm/picture8.webp', alt: "Every Mind Matters lo-fi wireframes", loading: 'lazy', caption: "Wireframes — lo-fi screen overview" },
  { src: './img/emm/picture1.webp', alt: "Every Mind Matters home screen", loading: 'lazy', caption: "Prototype — home screen & action overview" },
  { src: './img/emm/picture2.webp', alt: "Every Mind Matters mental health topics", loading: 'lazy', caption: "Prototype — mental health topics" },
  { src: './img/emm/picture3.webp', alt: "Every Mind Matters helping others flow", loading: 'lazy', caption: "Prototype — helping others flow" },
  { src: './img/emm/picture4.webp', alt: "Every Mind Matters mental health quiz", loading: 'lazy', caption: "Prototype — mental health quiz" },
  { src: './img/emm/picture5.webp', alt: "Every Mind Matters urgent support screen", loading: 'lazy', caption: "Prototype — urgent support" },
  { src: './img/emm/picture6.webp', alt: "Every Mind Matters action library", loading: 'lazy', caption: "Prototype — action library" }
];

function Everymindmatters() {
  return (
    <ProjectLayout 
      title="Every Mind Matters"
      client="Public Health England / NHS" agency="Methods" year="2019" duration="~5 months" role="UX Design · Research" team="With user researchers and service designers" 
      route="/everymindmatters"
    >
      <AccessibleCarousel images={IMAGES} />

      <h2 className="sub-title">Overview</h2>
        <p className="description">
          Every Mind Matters is a Public Health England and NHS initiative that helps people take practical steps to look after their mental health. The project focused on designing the structure and key journeys for the new website, with a particular emphasis on the mental health quiz, a tool to help users understand what kind of support they might need.
        </p>

        <h2 className="sub-title">The challenge</h2>
        <p className="description">
          Designing for mental health means designing for people who may already be overwhelmed. Users experiencing anxiety don't respond well to busy, information-heavy screens. Research sessions with people affected by anxiety and low mood shaped the design in specific ways: content had to be kept short and focused, and the number of decisions per screen was deliberately kept low to reduce cognitive load.
          <br /><br />
          Making it work on mobile was a priority from the start. The people most likely to use the service in a difficult moment are on their phones, not at a desktop.
        </p>

        <h2 className="sub-title">What I designed</h2>
        <p className="description">
          The main focus was the mental health quiz: a branching flow that helped users identify what kind of support would be most relevant to them, from self-help techniques through to urgent support pathways. Getting the structure right meant thinking carefully about how to ask sensitive questions without creating anxiety in the process of seeking help.
          <br /><br />
          I also worked on the overall site architecture, including the mental health topics section and the "helping others" flow for people supporting someone else. All design was done in Figma and Sketch using the GOV.UK Design System.
        </p>

        <h2 className="sub-title">How we worked</h2>
        <p className="description">
          The project ran for around five months with a team that included user researchers and service designers. Research with real users fed directly into design decisions, particularly around the quiz flow and the amount of information shown per screen.
        </p>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The project delivered a full interactive Figma prototype to NHS Digital, alongside content blueprints and code guidance for the development team. Parts of the work fed into the live Every Mind Matters service.
        </p>
    </ProjectLayout>
  );
}

export default Everymindmatters;
