import ProjectLayout from '../../components/ProjectLayout';
import AccessibleCarousel from '../../components/AccessibleCarousel';

const IMAGES = [
  { src: '/img/rethink/picture1.png', alt: "Rethink donation module wireframes", loading: 'lazy', caption: "Wireframes — donation module redesign" },
  { src: '/img/rethink/picture2.png', alt: "Rethink donation flow screens", loading: 'lazy', caption: "Wireframes — donation flow" },
  { src: '/img/rethink/picture3.png', alt: "Rethink recurring donation screens", loading: 'lazy', caption: "Wireframes — recurring donation screens" },
  { src: '/img/rethink/picture4.png', alt: "Rethink one-time donation screens", loading: 'lazy', caption: "Wireframes — one-time donation screens" },
  { src: '/img/rethink/picture5.png', alt: "Rethink donation module components", loading: 'lazy', caption: "Wireframes — component exploration" }
];

function Rethink() {
  return (
    <ProjectLayout 
      title="Rethink Mental Illness"
      client="Rethink Mental Illness" agency="Dam Digital" year="2022" role="UX Design · Product Design" 
      route="/rethink"
    
      carousel={<AccessibleCarousel images={IMAGES} />}
    >

      <h2 className="sub-title">Overview</h2>
        <p className="description">
          Rethink Mental Illness is a charity supporting people severely affected by mental illness through information, advice, support groups, and advocacy.
          <br /><br />
          The project focused on redesigning their donation module, a critical part of the charity's fundraising efforts, to make it more accessible, easier to understand, and more effective at converting visitors into donors.
        </p>

        <h2 className="sub-title">Role</h2>
        <p className="description">
          Working at Dam Digital, I led the UX and product design for the donation module redesign.
        </p>
        <ul className="description">
          <li>Auditing the existing donation funnel to identify drop-off points and usability issues</li>
          <li>Redesigning the flow to reduce friction for both one-time and recurring donations</li>
          <li>Prototyping and testing the new experience in Figma</li>
          <li>Ensuring the redesign met accessibility standards throughout</li>
        </ul>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The redesigned donation module went live on the Rethink Mental Illness website, delivering a clearer funnel with improved clarity around one-time and recurring giving options. The site has since evolved with a new design direction, but the work served as the foundation for the improved donation experience.
        </p>
    </ProjectLayout>
  );
}

export default Rethink;
