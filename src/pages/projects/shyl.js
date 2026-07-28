import ProjectLayout from '../../components/ProjectLayout';
import AccessibleCarousel from '../../components/AccessibleCarousel';

const IMAGES = [
  { src: '/img/shyl/shyl_1.webp', alt: "Shy Lifestyle app UI screens", loading: 'lazy', caption: "UI design — app screens" },
  { src: '/img/shyl/shyl_2.webp', alt: "Shy Lifestyle app UI screens", loading: 'lazy', caption: "UI design — service browsing" },
  { src: '/img/shyl/shyl_3.webp', alt: "Shy Lifestyle app UI screens", loading: 'lazy', caption: "UI design — booking flow" },
  { src: '/img/shyl/shyl_4.webp', alt: "Shy Lifestyle app UI screens", loading: 'lazy', caption: "UI design — member profile" },
  { src: '/img/shyl/picture5.png', alt: "Shy Lifestyle UX workflow wireframes", loading: 'lazy', caption: "Wireframes — UX workflow" }
];

function Shyl() {
  return (
    <ProjectLayout 
      title="Dam Digital / Shy Lifestyle"
      client="Shy Lifestyle" agency="Dam Digital" year="2023" role="UX Lead · Research" team="Paired with a UI designer" 
      route="/shyl"
    >
      <AccessibleCarousel images={IMAGES} />

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
