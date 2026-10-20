import ProjectLayout from '../../components/ProjectLayout';
import EvidenceGrid from '../../components/EvidenceGrid';

const IMAGES = [
  { src: '/img/naturalengland/picture1.png', alt: "NRMS service overview", loading: 'lazy', caption: "GOV.UK prototype — service overview" },
  { src: '/img/naturalengland/picture2.png', alt: "NRMS survey management", loading: 'lazy', caption: "GOV.UK prototype — survey management" },
  { src: '/img/naturalengland/picture3.png', alt: "NRMS monitoring specification", loading: 'lazy', caption: "GOV.UK prototype — monitoring specification" },
  { src: '/img/naturalengland/picture4.png', alt: "NRMS site map view", loading: 'lazy', caption: "GOV.UK prototype — site map" },
  { src: '/img/naturalengland/picture5.png', alt: "NRMS survey creation flow", loading: 'lazy', caption: "GOV.UK prototype — survey creation" }
];

function Naturalengland() {
  return (
    <ProjectLayout 
      title="Natural England / DEFRA / Protected Sites Monitoring"
      client="Natural England / DEFRA" agency="Cognizant" year="2024–2025" duration="About 8 months" team="With a content designer, a business analyst, a developer and at least two user researchers" role="Interaction Design · Service Design · User Research" 
      route="/naturalengland"
    
      evidence={<EvidenceGrid images={IMAGES} />}
      summary={(
        <section className="case-summary" aria-labelledby="ne-summary">
          <h2 id="ne-summary" className="sub-title">The project at a glance</h2>
          <p className="case-lead">Replace paper files, iPads and legacy systems with one GOV.UK service for planning, running and tracking surveys of protected sites.</p>
          <dl>
            <dt>My responsibility</dt>
            <dd>Interaction and service design across two very different journeys: field surveyors recording what they see on site, and managers planning and tracking surveys from the office.</dd>
            <dt>What research changed</dt>
            <dd>Testing with ecologists and geological specialists pointed to three things: a preference for grouped, form-style layouts for complex, repeated tasks; guidance inside the service; and a clear view of how a site, its surveys and its assessments relate.</dd>
            <dt>Delivery and validation</dt>
            <dd>Several rounds of usability testing with ecologists and field surveyors, using a coded GOV.UK Prototype Kit prototype with realistic site data.</dd>
          </dl>
        </section>
      )}
    >

      <h2 className="sub-title">Overview</h2>
        <p className="description">
          Natural England looks after protected sites across England: habitats, wildlife areas, geological sites. Keeping on top of them means sending surveyors into the field regularly, collecting data, and feeding it back into a central picture of how each site is doing.
          <br /><br />
          Before this project, that process ran on iPads, paper files and a patchwork of legacy systems. Surveyors took notes in the field, managers tried to make sense of it back at the office. There was no single place to plan surveys, track what had been done, or see the condition of a site across time.
          <br /><br />
          The aim was to replace that with a GOV.UK service that actually matched how people worked.
        </p>

        <h2 className="sub-title">The challenge</h2>
        <p className="description">
          The users came in two types with quite different needs. Field surveyors needed something they could use on site: clear, focused, not demanding too much context-switching when they were outdoors trying to record what they saw. Managers needed a higher-level view: which sites had been surveyed, what needed attention, what surveys still needed scheduling.
          <br /><br />
          The data itself was complex. Different types of protected site have different monitoring requirements, different species to look for, different reporting frameworks. On top of that, some information is sensitive, and access to certain site data depended on a user's role and clearance level. Designing screens that showed the right information to the right person, without creating confusion about what was visible or why, took real care.
        </p>

        <h2 className="sub-title">What I designed</h2>
        <p className="description">
          The service had a few main areas: finding a site, site information, the monitoring specification and surveys. Each site had its own pages, so people could see how a site, its surveys and its assessments relate.
          <br /><br />
          From there, surveyors could access the surveys they needed to complete, with the specific monitoring questions and data fields relevant to their site. Managers could create new surveys and assign them to particular sites and teams.
          <br /><br />
          Different people needed to see different things. Stakeholders and business analysts set the access rules, and I designed how those rules worked in the experience: different content for each role, and a clear message, “You don't have access to this”, when something wasn't available.
          <br /><br />
          Journey maps helped us work through the different user paths early on, and the GOV.UK Prototype Kit let us test interactions with real users rather than static mockups.
        </p>

        <h2 className="sub-title">How we worked</h2>
        <p className="description">
          We ran several rounds of usability testing with ecologists and field surveyors. Findings included a preference for grouped, form-style layouts, a need for guidance inside the service, and the importance of showing clearly how site data, surveys and condition assessments relate.
          <br /><br />
          I started with low-fidelity sketches in a workshop with stakeholders, user researchers and a business analyst, then built Figma screens and a coded prototype with realistic data, so people could click through the journey and see how it would work.
          <br /><br />
          Working with expert users was one of the more interesting aspects. Ecologists and surveyors know their domain deeply. They had strong opinions about how data should be structured and what information mattered most. Getting designs in front of them early and often was the only way to make sure we were reflecting that knowledge rather than designing around it.
        </p>

        <h2 className="sub-title">Outcomes</h2>
        <p className="description">
          The design work contributed to a structured digital service intended to replace a paper and iPad-based workflow, for both field surveyors and office-based managers. The outcome documented here is the prototype and its use in research; the service is still in development.
        </p>
    </ProjectLayout>
  );
}

export default Naturalengland;
