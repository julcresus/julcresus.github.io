import ProjectLayout from '../../components/ProjectLayout';

function EvidenceImage({ src, alt, children }) {
  return (
    <figure className="case-evidence">
      <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size image: ${alt} (opens in a new tab)`}>
        <img src={src} alt={alt} loading="lazy" />
      </a>
      <figcaption>{children} <span>Open image to inspect the detail ↗</span></figcaption>
    </figure>
  );
}

function Hmrc() {
  return (
    <ProjectLayout
      title="Designing a Council Tax service for Wales"
      client="HMRC" agency="Cognizant" year="2025–2026"
      role="Sole interaction designer" duration="5 months, during alpha" team="With content design, user research and Welsh-speaking colleagues"
      route="/hmrc"
    >
      <section className="case-summary" aria-labelledby="hmrc-summary">
        <h2 id="hmrc-summary" className="sub-title">The project at a glance</h2>
        <p className="case-lead">Help people in Wales challenge their Council Tax band through a journey that works in Welsh and English.</p>
        <dl>
          <dt>My responsibility</dt>
          <dd>I owned the interaction design and built the GOV.UK prototype, working with content designers, researchers and Welsh-speaking colleagues.</dd>
          <dt>The key design work</dt>
          <dd>Keep language choices consistent, route different challenge scenarios correctly and reflect Wales-specific policy and property data.</dd>
          <dt>What research changed</dt>
          <dd>Testing led to concrete changes between rounds. Questions people couldn't answer accurately were removed, and wording that felt confrontational was softened.</dd>
          <dt>Delivery and validation</dt>
          <dd>The prototype supported six to seven rounds of usability testing, with at least half of participants Welsh speakers, plus mobile users. I was on the project for five months during alpha; the service has since moved into beta.</dd>
        </dl>
      </section>

      <h2 className="sub-title">The problem</h2>
      <p className="description">The existing service covered England. Wales needed its own journey: nine Council Tax bands rather than eight, a different valuation date and property information reflecting Welsh policy. People also needed to complete the journey in Welsh.</p>
      <p className="description">Someone challenging their band may already be worried about paying the wrong amount. An unexpected language change or an incorrect route could make a stressful task harder. I needed to adapt the interaction model as well as the content.</p>

      <h2 className="sub-title">1. Keep the language choice consistent</h2>
      <p className="description">Users could choose Welsh or English at the start. That choice needed to hold across every screen, conditional branch and error state. Without a content management system, I handled language state in the prototype code and checked routes and labels with Welsh-speaking colleagues.</p>
      <EvidenceImage src="/img/hmrc/picture1.png" alt="Welsh-language Council Tax start page in the GOV.UK prototype">
        <strong>Welsh entry point.</strong> The start page establishes the language of the journey. The design requirement was to carry that choice through subsequent pages and errors.
      </EvidenceImage>
      <EvidenceImage src="/img/hmrc/picture2.png" alt="Council Tax postcode search screen with Welsh and English language options">
        <strong>Language within the journey.</strong> Postcode search is one of the screens checked for consistency across the bilingual flow.
      </EvidenceImage>

      <h2 className="sub-title">2. Route people by their circumstances</h2>
      <p className="description">The challenge journey branches according to a person's situation, including whether they are the current resident or a previous owner, and their grounds for challenging. I mapped those scenarios into conditional routes in the GOV.UK Prototype Kit and checked how the branches connected.</p>
      <EvidenceImage src="/img/hmrc/picture5.png" alt="Draft of the main Council Tax challenge journey and scenario selection">
        <strong>Scenario routing draft.</strong> Different circumstances require different paths. This artefact shows the main journey draft used to work through that routing.
      </EvidenceImage>

      <h2 className="sub-title">3. Reflect Welsh policy in the property journey</h2>
      <p className="description">I worked with policy and research colleagues to reflect Wales-specific band ranges, valuation dates and local authority information. The property journey needed to present the Welsh information rather than inherit assumptions from the English service.</p>
      <EvidenceImage src="/img/hmrc/picture4.png" alt="Property details screen in the Welsh Council Tax prototype">
        <strong>Property context.</strong> The property details screen sits within a journey shaped by Welsh policy and data requirements.
      </EvidenceImage>

      <h2 className="sub-title">Research and collaboration</h2>
      <p className="description">Researchers ran six to seven rounds of testing while I was on the project, with at least half of participants Welsh speakers, alongside people unfamiliar with the challenge process and mobile users. I revised the prototype between rounds in response to findings, working closely with content design and the wider team.</p>
      <p className="description">As the sole interaction designer, I made the day-to-day design decisions. Welsh-speaking colleagues helped check whether labels made sense in context, while policy colleagues helped establish the differences the journey needed to accommodate.</p>

      <h2 className="sub-title">What the work delivered</h2>
      <p className="description">A coded GOV.UK prototype supporting six to seven rounds of usability research. The bilingual language and conditional routing patterns carry through the service, which has since moved into beta.</p>
      <p className="description">The outcome documented here is the prototype and its use in research; live-service performance and completion-rate results are not yet reported.</p>
    </ProjectLayout>
  );
}

export default Hmrc;
