import ProjectLayout from '../../components/ProjectLayout';
import AccessibleCarousel from '../../components/AccessibleCarousel';

const IMAGES = [
  { src: '/img/psstore/picture1.webp', alt: "PlayStation Store app splash screen", loading: 'lazy', caption: "UI design — app splash screen" },
  { src: '/img/psstore/picture2.webp', alt: "PlayStation Store personalised home feed", loading: 'lazy', caption: "UI design — personalised home feed" },
  { src: '/img/psstore/picture3.webp', alt: "PlayStation Store game detail page", loading: 'lazy', caption: "UI design — game detail page" },
  { src: '/img/psstore/picture4.webp', alt: "PlayStation Store search results", loading: 'lazy', caption: "UI design — search results" },
  { src: '/img/psstore/picture5.webp', alt: "PlayStation Store integrated messaging", loading: 'lazy', caption: "Interactive prototype — integrated messaging" }
];

function Playstation() {
  return (
    <ProjectLayout 
      title="University Case Study — PlayStation Store"
      client="Kingston University" year="2016–2017" role="UX Design · Research" 
      route="/playstation"
    >
      <AccessibleCarousel images={IMAGES} />

      <h2 className="sub-title">Overview</h2>
        <p className="description">
          A university case study at Kingston University focused on analysing and redesigning the PlayStation Store for mobile. The Store lacked consistency across devices, so the goal was to merge it with the PlayStation Messages app into a single, integrated mobile experience, applying UX principles and the Common Industry Format (CIF) for usability testing throughout.
        </p>

        <h2 className="sub-title">Role</h2>
        <p className="description">
          I led the full design process from research through to final prototype.
        </p>
        <ul className="description">
          <li>Analysed competing game platforms to identify industry standards and design opportunities</li>
          <li>Conducted usability testing and interviews with gamers and non-gamers</li>
          <li>Ran a broader survey to capture diverse user perspectives</li>
          <li>Synthesised research into user journeys and personas</li>
          <li>Wireframed the new experience in Axure</li>
          <li>Designed the UI in Sketch and built an interactive prototype in InVision</li>
          <li>Tested the final prototype with the original user group</li>
        </ul>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The project delivered a fully interactive prototype combining the PlayStation Store and Messages into a unified mobile app. You can explore it via the InVision{' '}
          <a href='https://projects.invisionapp.com/share/UHA1EOIVZ#/screens' target='_blank' rel='noreferrer'>prototype link</a>.
        </p>
    </ProjectLayout>
  );
}

export default Playstation;
