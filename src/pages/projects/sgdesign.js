import ProjectLayout from '../../components/ProjectLayout';
import AccessibleCarousel from '../../components/AccessibleCarousel';

const IMAGES = [
  { src: '/img/sgdesign/picture1.webp', alt: "SG Markets FX multi-tile trading workspace", loading: 'lazy', caption: "UI design — FX multi-tile trading workspace" },
  { src: '/img/sgdesign/picture2.webp', alt: "SG Markets bulk trade negotiation screen", loading: 'lazy', caption: "UI design — bulk trade negotiation" },
  { src: '/img/sgdesign/picture3.webp', alt: "SG Markets FX rate tile grid", loading: 'lazy', caption: "UI design — FX rate tile grid" }
];

function Sgdesign() {
  return (
    <ProjectLayout 
      title="Société Générale / SG Markets FX Platform"
      client="Société Générale" year="2017–2018" role="Interaction Design · Design Systems" 
      route="/sgdesign"
    >
      <AccessibleCarousel images={IMAGES} />

      <h2 className="sub-title">Overview</h2>
        <p className="description">
          SG Markets is the digital trading platform Société Générale built for institutional FX clients. I joined the digital design team within the Corporate &amp; Investment Banking division, working on a live product used daily by traders and clients across the bank.
          <br /><br />
          The platform covered spot FX, forwards, options and bulk trade workflows. Dense, data-heavy screens where speed and accuracy matter more than anything else.
        </p>

        <h2 className="sub-title">The challenge</h2>
        <p className="description">
          Designing for traders is different from designing for most users. They're fast, precise, and they've built their workflow around how things already work. Small interface changes can break muscle memory. Every design decision had to earn its place.
          <br /><br />
          The team was modernising the platform. New design system, new tile-based workspace, cleaner workflows throughout. The challenge was doing all of that without making people feel like they'd lost something.
        </p>

        <h2 className="sub-title">What I worked on</h2>
        <p className="description">
          I was part of a small team working across different parts of the platform. We sat on the same floor as the traders, which meant testing wasn't a formal monthly event. It happened constantly. You'd walk over with a prototype, watch someone click through it, and come back with notes the same afternoon.
          <br /><br />
          My work spanned three main areas:
        </p>
        <p className="description">
          <strong>The tile system.</strong> Traders could build their own workspace from modular rate tiles, each showing live prices for a currency pair. Getting the information hierarchy right was tricky: the numbers needed to be readable at a glance while still carrying all the context a trader needed to act. We tested different layouts, density levels and typographic scales until we had something that felt like a natural evolution of what they already knew.
        </p>
        <p className="description">
          <strong>The bulk trade workflow.</strong> For clients executing multiple trades at once, the existing flow was cumbersome. I worked on simplifying the step-by-step journey from inputs through negotiation to confirmation, making the netting logic clearer and reducing the chance of errors on large transactions.
        </p>
        <p className="description">
          <strong>The design system.</strong> I helped set up and apply a shared design system across the platform, translating brand guidelines into components that worked at the density financial interfaces require. This meant thinking about things like number formatting, colour use for buy/sell states, and how to handle error conditions in a context where mistakes are costly.
        </p>

        <h2 className="sub-title">How we worked</h2>
        <p className="description">
          Co-creation sessions with traders, product owners and IT were a regular part of the process. These weren't polished presentations. They were working sessions where we'd sketch out ideas on a whiteboard, get immediate pushback, and iterate on the spot. Having engineers in the room from the start meant we avoided designing things that couldn't be built.
        </p>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The updated platform shipped to clients as part of an ongoing programme of improvements. Working this close to end users, literally in the same room, gave me a strong sense of what it means to design for people who depend on your product to do their job every day.
          <br /><br />
          <em>Visual artefacts shared with permission from Société Générale. Certain client data has been replaced with dummy information.</em>
        </p>
    </ProjectLayout>
  );
}

export default Sgdesign;
