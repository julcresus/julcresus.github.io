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
        <a href="https://juliencresus.com">juliencresus.com</a>
        <span className="cv-separator">·</span>
        <span>London, UK</span>
      </div>

      <div className="cv-editorial-header">
        <h1 className="cv-name">Julien Crésus-Ashton</h1>
        <p className="cv-editorial-title">SENIOR INTERACTION DESIGNER</p>
      </div>

      <div className="cv-editorial-summary">
        <p>
          Interaction designer with eight years in UK government and consumer apps. At the moment I'm designing HMRC's Council Tax challenge service for Wales, in Welsh and English, as a coded GOV.UK prototype. I like to get something rough in front of users early and change it when they get stuck. SC cleared.
        </p>
      </div>

      <div className="cv-section-divider">
        <h2 className="cv-section-title">EXPERIENCE</h2>
      </div>

      <div className="cv-editorial-experience">
        <div className="cv-job-block">
          <div className="cv-job-top">
            <h3 className="cv-company-name">Cognizant</h3>
            <span className="cv-job-dates">Nov 2023 – Present</span>
          </div>
          <p className="cv-job-role">Senior Interaction Designer</p>
          <ul className="cv-bullets">
            <li>Led interaction design for HMRC's Welsh Council Tax service across all 22 Welsh local authorities, mapping complex policy logic into navigable user flows across discovery and alpha. Delivered accessible, GDS-compliant journeys.</li>
            <li>Designed a DEFRA/APHA workforce planning tool built on PowerBI, supporting planners across multiple Natural England reserves. Made the design decisions within Microsoft Fluent constraints through to handoff.</li>
            <li>Set the standard for personas, interaction models and service flows to GDS requirements, and made WCAG 2.2 compliance a team-wide expectation.</li>
            <li>Coached other designers on GDS standards and coded prototyping in HTML/CSS, bringing the team closer to the medium.</li>
          </ul>
        </div>

        <div className="cv-job-block">
          <div className="cv-job-top">
            <h3 className="cv-company-name">DAM Digital</h3>
            <span className="cv-job-dates">Apr 2022 – Nov 2023</span>
          </div>
          <p className="cv-job-role">Senior UX/UI Designer</p>
          <ul className="cv-bullets">
            <li>Led UX strategy across up to 3 concurrent client engagements including McArthurGlen and Crisis, owning the full design process from discovery through to handoff.</li>
            <li>Ran regular design reviews with clients and turned stakeholder feedback into design decisions grounded in user needs.</li>
            <li>Owned accessibility and design system standards across all concurrent projects, keeping them consistent.</li>
            <li>Coached a user researcher to independently produce production-ready Figma prototypes, upskilling their design craft and improving team throughput.</li>
          </ul>
        </div>

        <div className="cv-job-block">
          <div className="cv-job-top">
            <h3 className="cv-company-name">Methods</h3>
            <span className="cv-job-dates">Feb 2019 – Apr 2022</span>
          </div>
          <p className="cv-job-role">UX Designer</p>
          <ul className="cv-bullets">
            <li>Designed for government programmes including Every Mind Matters, National Funding Formula and Ministry of Defence, working to GDS standards across discovery, alpha and beta.</li>
            <li>Led cross-functional workshops with research, product and engineering, setting the design direction and ensuring decisions were grounded in user evidence before moving to build.</li>
            <li>Built research-informed prototypes in Figma and coded prototypes using React and the GOV.UK Design System, enabling faster collaboration with researchers and stakeholders than static tools allowed.</li>
          </ul>
        </div>

        <div className="cv-job-block">
          <div className="cv-job-top">
            <h3 className="cv-company-name">Société Générale Design</h3>
            <span className="cv-job-dates">Sep 2017 – Dec 2018</span>
          </div>
          <p className="cv-job-role">UX/UI Designer Trainee</p>
          <ul className="cv-bullets">
            <li>Designed interaction models for trading platforms and internal financial tools in low- and high-fidelity using Adobe XD and Sketch, shipping interface updates to internal trading systems used daily by the trading floor.</li>
            <li>Led co-creation sessions with traders, product owners and engineers to validate concepts early and reduce costly rework downstream.</li>
          </ul>
        </div>
      </div>

      <div className="cv-editorial-footer-grid">
        <div className="cv-footer-column">
          <h2 className="cv-section-title">SKILLS</h2>
          <div className="cv-skills-grid">
            <div>
              <ul className="cv-bullets">
                <li>GDS Design System</li>
                <li>WCAG 2.2 accessibility</li>
                <li>Coded prototyping (HTML, CSS, React)</li>
                <li>Conditional routing and policy logic</li>
                <li>Bilingual Welsh and English services</li>
              </ul>
            </div>
            <div>
              <ul className="cv-bullets">
                <li>Service and journey mapping</li>
                <li>Workshop and design critique facilitation</li>
                <li>Figma, Sketch, Adobe XD</li>
                <li>Working with research and engineering</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv-footer-column">
          <h2 className="cv-section-title">EDUCATION</h2>
          <div className="cv-edu-block">
            <h3 className="cv-edu-title">MSc UX Design</h3>
            <p className="cv-edu-school">Kingston University, London</p>
            <p className="cv-edu-meta">2018 · Thesis: WebVR app for autism awareness, exploring immersive environments as a medium for inclusive design and empathy-building.</p>
          </div>
          <div className="cv-edu-block mt-3">
            <h3 className="cv-edu-title">BA Web Design</h3>
            <p className="cv-edu-school">Epitech Digital, Paris</p>
            <p className="cv-edu-meta">2016</p>
          </div>
        </div>

        <div className="cv-footer-column">
          <h2 className="cv-section-title">LANGUAGES</h2>
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
