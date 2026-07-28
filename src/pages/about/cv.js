import React, { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import '../../App.css';

function CV() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page cv-editorial-page">
      <div className="cv-contact-top">
        <a href="mailto:cresusjulien@gmail.com">cresusjulien@gmail.com</a>
        <span className="cv-separator">·</span>
        <a href="https://linkedin.com/in/juliencresus/" target="_blank" rel="noopener noreferrer">linkedin.com/in/juliencresus</a>
        <span className="cv-separator">·</span>
        <a href="https://julcresus.github.io">julcresus.github.io</a>
        <span className="cv-separator">·</span>
        <span>London, UK</span>
      </div>

      <div className="cv-editorial-header">
        <h1 className="cv-name">Julien Crésus-Ashton</h1>
        <h2 className="cv-editorial-title">LEAD INTERACTION DESIGNER</h2>
      </div>

      <div className="cv-editorial-summary">
        <p>
          London-based interaction designer with eight years' experience in consultancy and digital transformation across government, fintech, and enterprise. I specialize in user-centred design for complex, high-stakes services where the interaction model matters more than the visual finish. I work across the full delivery lifecycle, collaborating closely with engineering and research to make practical, evidence-based design decisions while treating accessibility (WCAG 2.2) as a strict baseline.
        </p>
      </div>

      <div className="cv-section-divider">
        <h3 className="cv-section-title">EXPERIENCE</h3>
      </div>

      <div className="cv-editorial-experience">
        <div className="cv-job-block">
          <div className="cv-job-top">
            <h4 className="cv-company-name">Cognizant</h4>
            <span className="cv-job-dates">Nov 2023 – Present</span>
          </div>
          <p className="cv-job-role">Senior Interaction Designer</p>
          <ul className="cv-bullets">
            <li>Led interaction design for HMRC's Welsh Council Tax service end-to-end, mapping complex policy logic into navigable user flows across discovery, alpha and beta. Prototyped in Figma and coded HTML/CSS to deliver accessible, GDS-compliant solutions.</li>
            <li>Directed interaction and service design for a DEFRA/APHA workforce planning tool built on PowerBI, setting the interaction model within Microsoft Fluent constraints and owning all design decisions through to handoff.</li>
            <li>Set standards for personas, interaction models and service flows to GDS requirements; established WCAG 2.2 compliance as a team-wide expectation, not an afterthought.</li>
            <li>Partnered with engineers throughout delivery to translate design decisions into precise specifications, resolving feasibility issues without compromising user needs.</li>
            <li>Directed design iterations in response to usability testing findings across alpha and beta, reducing friction at key decision points.</li>
            <li>Set design direction across DEFRA and Natural England, keeping decisions joined up across multidisciplinary delivery teams.</li>
            <li>Led design reviews and workshops with senior stakeholders across DEFRA and Natural England, translating research into actionable design decisions.</li>
          </ul>
        </div>

        <div className="cv-job-block">
          <div className="cv-job-top">
            <h4 className="cv-company-name">DAM Digital</h4>
            <span className="cv-job-dates">Apr 2022 – Nov 2023</span>
          </div>
          <p className="cv-job-role">Senior UX/UI Designer</p>
          <ul className="cv-bullets">
            <li>Led UX strategy across multiple concurrent clients including McArthurGlen and Crisis, owning the full design process from discovery through to handoff.</li>
            <li>Directed information architecture and complex interaction design across consumer and enterprise products, balancing user needs against technical and business constraints.</li>
            <li>Managed client relationships end-to-end, running regular design reviews and translating stakeholder feedback into design decisions without losing sight of user needs.</li>
            <li>Owned accessibility and design system standards across all concurrent projects, ensuring consistency without a central design operations function.</li>
            <li>Coached a user researcher to independently produce production-ready Figma prototypes, upskilling their design craft and improving team throughput.</li>
          </ul>
        </div>

        <div className="cv-job-block">
          <div className="cv-job-top">
            <h4 className="cv-company-name">Methods</h4>
            <span className="cv-job-dates">Feb 2019 – Apr 2022</span>
          </div>
          <p className="cv-job-role">UX Designer</p>
          <ul className="cv-bullets">
            <li>Designed for government programmes including Every Mind Matters, National Funding Formula and Ministry of Defence, working to GDS standards across discovery, alpha and beta.</li>
            <li>Built research-informed prototypes in Figma and coded prototypes using React and the GOV.UK Design System, enabling faster collaboration with researchers and stakeholders than static tools allowed.</li>
            <li>Led cross-functional workshops with research, product and engineering, setting the design direction and ensuring decisions were grounded in user evidence before moving to build.</li>
            <li>Produced user journeys, personas, service maps and storyboards that made design intent legible to engineers and product managers throughout delivery.</li>
          </ul>
        </div>

        <div className="cv-job-block">
          <div className="cv-job-top">
            <h4 className="cv-company-name">Société Générale Design</h4>
            <span className="cv-job-dates">Sep 2017 – Dec 2018</span>
          </div>
          <p className="cv-job-role">UX/UI Designer Trainee</p>
          <ul className="cv-bullets">
            <li>Designed interaction models for trading platforms and internal financial tools in low- and high-fidelity using Adobe XD and Sketch, within agile delivery teams.</li>
            <li>Worked directly with quantitative analysts and IT teams to translate complex data workflows into usable interfaces for traders and internal users.</li>
            <li>Led co-creation sessions with traders, product owners and engineers to validate concepts early and reduce costly rework downstream.</li>
          </ul>
        </div>
      </div>

      <div className="cv-editorial-footer-grid">
        <div className="cv-footer-column">
          <h3 className="cv-section-title">SKILLS</h3>
          <div className="cv-skills-grid">
            <div>
              <p className="cv-skill-header">Design Practice</p>
              <ul className="cv-bullets">
                <li>Interaction Design</li>
                <li>User-Centred Design</li>
                <li>Service & Journey Mapping</li>
                <li>Design Critique Facilitation</li>
              </ul>
              <p className="cv-skill-header mt-3">Delivery</p>
              <ul className="cv-bullets">
                <li>Prototyping & Wireframing</li>
                <li>Workshop Facilitation</li>
                <li>Cross-functional Influence</li>
                <li>Stakeholder Management</li>
              </ul>
            </div>
            <div>
              <p className="cv-skill-header">Standards</p>
              <ul className="cv-bullets">
                <li>GDS Design System</li>
                <li>WCAG 2.2 Accessibility</li>
                <li>Discovery to Live Delivery</li>
                <li>HTML & CSS</li>
              </ul>
              <p className="cv-skill-header mt-3">Tools</p>
              <ul className="cv-bullets">
                <li>Figma · Sketch</li>
                <li>Adobe Suite · Miro</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv-footer-column">
          <h3 className="cv-section-title">EDUCATION</h3>
          <div className="cv-edu-block">
            <h5 className="cv-edu-title">MSc UX Design</h5>
            <p className="cv-edu-school">Kingston University, London</p>
            <p className="cv-edu-meta">2018 · Thesis: WebVR app for autism awareness, exploring immersive environments as a medium for inclusive design and empathy-building.</p>
          </div>
          <div className="cv-edu-block mt-3">
            <h5 className="cv-edu-title">BA Web Design</h5>
            <p className="cv-edu-school">Epitech Digital, Paris</p>
            <p className="cv-edu-meta">2016</p>
          </div>
        </div>

        <div className="cv-footer-column">
          <h3 className="cv-section-title">LANGUAGES</h3>
          <ul className="cv-lang-list">
            <li>French <span className="cv-meta">(Native)</span></li>
            <li>English <span className="cv-meta">(Bilingual)</span></li>
            <li>German <span className="cv-meta">(Basic)</span></li>
          </ul>
        </div>
      </div>

      <NavHashLink to="/#projects" className="about-back mt-5">← Back to Portfolio</NavHashLink>
    </div>
  );
}

export default CV;
