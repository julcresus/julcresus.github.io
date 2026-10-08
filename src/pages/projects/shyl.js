import ProjectLayout from '../../components/ProjectLayout';
import EvidenceGrid from '../../components/EvidenceGrid';

const IMAGES = [
  { src: '/img/shyl/shyl_1.webp', alt: "Four Shy Lifestyle app screens: sign-in, then browsing villas, yachts and hotels", loading: 'lazy', caption: "UI design — app screens" },
  { src: '/img/shyl/shyl_2.webp', alt: "Large flow diagram mapping how members browse services", loading: 'lazy', caption: "UI design — service browsing" },
  { src: '/img/shyl/shyl_3.webp', alt: "Four wireframe screens of the booking flow", loading: 'lazy', caption: "UI design — booking flow" },
  { src: '/img/shyl/shyl_4.webp', alt: "Four wireframe screens of the member profile", loading: 'lazy', caption: "UI design — member profile" },
  { src: '/img/shyl/picture5.png', alt: "Shy Lifestyle UX workflow wireframes", loading: 'lazy', caption: "Wireframes — UX workflow" }
];

function Shyl() {
  return (
    <ProjectLayout 
      title="DAM Digital / Shy Lifestyle"
      client="Shy Lifestyle" agency="DAM Digital" year="2023" duration="9 months" role="UX Lead · Research" team="Paired with a UI designer" 
      route="/shyl"
    
      evidence={<EvidenceGrid images={IMAGES} />}
      summary={(
        <section className="case-summary" aria-labelledby="shyl-summary">
          <h2 id="shyl-summary" className="sub-title">The project at a glance</h2>
          <p className="case-lead">Give luxury concierge members one mobile app to browse and book everything from everyday requests to private jets.</p>
          <dl>
            <dt>My responsibility</dt>
            <dd>I led UX and research, working with a UI designer and the client: competitive research, journey mapping, wireframes and prototypes for membership browsing, service discovery and booking.</dd>
            <dt>The key design work</dt>
            <dd>Making a wide range of services, each with different booking needs, feel organised and premium rather than form-heavy.</dd>
            <dt>Delivery and validation</dt>
            <dd>Close collaboration and regular design reviews with the client. The app launched and is live at shylifestyle.com, with the membership system and booking flow in active use.</dd>
          </dl>
        </section>
      )}
    >

      <h2 className="sub-title">Overview</h2>
        <p className="description">
          Shy Lifestyle is a luxury concierge and travel management service, offering members everything from everyday requests through to private jet charters and exclusive event access. The project involved designing a mobile app giving members a single place to browse and book their full range of services.
        </p>

        <h2 className="sub-title">The challenge</h2>
        <p className="description">
          Luxury products have specific design expectations. The interface needed to feel premium and effortless, not functional and form-heavy. Getting that balance right while still making all the service information clear and bookable took significant design research. We mapped the competitive landscape carefully to understand what the best luxury apps in this space were doing, and where the gaps were.
          <br /><br />
          The booking system itself was also complex. Shy Lifestyle offers a wide range of services with very different booking requirements. Making that breadth feel organised rather than overwhelming was one of the main design challenges.
        </p>

        <h2 className="sub-title">What I designed</h2>
        <p className="description">
          I led UX and research for the project, working closely with the UI designer throughout. That covered competitive research, user journey mapping, wireframes, and prototypes for the membership browsing, service discovery, and booking flows. I worked with the client to translate their brand positioning into design decisions that felt consistent with the Shy Lifestyle experience.
        </p>

        <h2 className="sub-title">How we worked</h2>
        <p className="description">
          The project involved close collaboration with the client to align design decisions with their brand vision, alongside regular design reviews and iteration.
        </p>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The app launched and is live at shylifestyle.com. The membership system and booking flow are in active use.
        </p>
    </ProjectLayout>
  );
}

export default Shyl;
