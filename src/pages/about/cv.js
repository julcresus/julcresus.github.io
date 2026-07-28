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
        <h2 className="cv-editorial-title">SENIOR INTERACTION DESIGNER</h2>
      </div>

      <div className="cv-editorial-summary">
        <p>
          Paris-born, London-based interaction designer with eight years of experience in consultancy and digital transformation, working across fintech, government, enterprise and consumer products. I specialize in user-centred design for complex services, where getting the interaction model right matters more than how it looks.
        </p>
        <p>
          I work across the full delivery lifecycle, from discovery through to live, collaborating closely with research and engineering. I use accessibility (WCAG 2.2) as a baseline, and focus on making practical, evidence-based design decisions within real-world constraints.
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
            <li>Owned interaction design for HMRC's Welsh Council Tax service, mapping complex policy logic into flows users could actually navigate. Prototyped in both Figma and coded HTML/CSS, working across discovery, alpha and beta to deliver accessible, GDS-compliant solutions.</li>
            <li>Designed an internal workforce planning tool for DEFRA/APHA built on PowerBI, working within Microsoft Fluent design constraints.</li>
            <li>Set out personas, interaction models and service flows to GDS standards; made WCAG 2.2 compliance a baseline expectation across multidisciplinary teams.</li>
            <li>Worked directly with engineers throughout delivery, translating interaction decisions into specifications and iterating quickly when needed.</li>
            <li>Worked closely with researchers through usability testing across alpha and beta, using findings to refine flows and reduce friction.</li>
            <li>Contributed design direction and shaped interaction/service design across DEFRA and Natural England projects.</li>
            <li>Facilitated workshops and design reviews with senior stakeholders across DEFRA and Natural England.</li>
          </ul>
        </div>

        <div className="cv-job-block">
          <div className="cv-job-top">
            <h4 className="cv-company-name">DAM Digital</h4>
            <span className="cv-job-dates">Apr 2022 – Nov 2023</span>
          </div>
          <p className="cv-job-role">Senior UX/UI Designer</p>
          <ul className="cv-bullets">
            <li>Led UX strategy across a range of clients including McArthurGlen and Crisis, owning the design process from research through to handoff.</li>
            <li>Designed complex user workflows and information architecture across consumer and enterprise products, balancing user needs against technical constraints.</li>
            <li>Ran the full design process in Figma from early discovery through to handoff, working directly with product managers and engineers.</li>
            <li>Kept accessibility and design system standards consistent across concurrent projects, and managed client relationships.</li>
            <li>Helped a user researcher get up to speed with Figma and UX practice.</li>
          </ul>
        </div>

        <div className="cv-job-block">
          <div className="cv-job-top">
            <h4 className="cv-company-name">Methods</h4>
            <span className="cv-job-dates">Feb 2019 – Apr 2022</span>
          </div>
          <p className="cv-job-role">UX Designer</p>
          <ul className="cv-bullets">
            <li>Designed for government programmes including Every Mind Matters, National Funding Formula and Ministry of Defence—working to GDS standards across discovery, alpha and beta.</li>
            <li>Built research-informed prototypes in Figma and coded prototypes using React and the GOV.UK Design System, enabling faster collaboration.</li>
            <li>Produced user journeys, personas, service maps and storyboards that helped engineers and product managers understand design intent.</li>
            <li>Ran workshops that brought research, product and engineering into the same room, helping align on design direction.</li>
          </ul>
        </div>

        <div className="cv-job-block">
          <div className="cv-job-top">
            <h4 className="cv-company-name">Société Générale Design</h4>
            <span className="cv-job-dates">Sep 2017 – Dec 2018</span>
          </div>
          <p className="cv-job-role">UX/UI Designer Trainee</p>
          <ul className="cv-bullets">
            <li>Designed interaction models for trading platforms and internal innovation programmes / financial tools in low- and high-fidelity, using Adobe XD and Sketch.</li>
            <li>Worked with quantitative analysts and IT teams to translate complex data workflows into usable interfaces for the people using them.</li>
            <li>Ran co-creation sessions with traders, product owners, end users and engineers to validate concepts early.</li>
          </ul>
        </div>
      </div>

      <div className="cv-editorial-footer-grid">
        <div className="cv-footer-column">
          <h3 className="cv-section-title">SKILLS</h3>
          <div className="cv-skills-grid">
            <div>
              <p className="cv-skill-header">Core</p>
              <ul className="cv-bullets">
                <li>Interaction Design</li>
                <li>User-Centred Design</li>
                <li>Service & Journey Mapping</li>
              </ul>
              <p className="cv-skill-header mt-3">Delivery</p>
              <ul className="cv-bullets">
                <li>Prototyping & Wireframing</li>
                <li>Workshop facilitation</li>
                <li>Stakeholder Management</li>
              </ul>
            </div>
            <div>
              <p className="cv-skill-header">Standards & Tools</p>
              <ul className="cv-bullets">
                <li>GDS Design System</li>
                <li>WCAG 2.2 Accessibility</li>
                <li>HTML & CSS</li>
                <li>Figma · Sketch · Adobe Suite</li>
                <li>Miro · JIRA · Confluence</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv-footer-column">
          <h3 className="cv-section-title">EDUCATION</h3>
          <div className="cv-edu-block">
            <h5 className="cv-edu-title">MSc UX Design</h5>
            <p className="cv-edu-school">Kingston University, London</p>
            <p className="cv-edu-meta">2018 · Thesis: Autism awareness app in WebVR</p>
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
