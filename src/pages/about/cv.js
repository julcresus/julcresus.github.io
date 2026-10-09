import React, { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import '../../App.css';

// Per-application summaries ("/cv?for=rga") come from a gitignored local file and exist in
// dev builds only: NODE_ENV is inlined at build time, so production never includes them.
let SUMMARIES = {};
if (process.env.NODE_ENV !== 'production') {
  try {
    SUMMARIES = require('./cv-summaries').default;
  } catch (e) {
    SUMMARIES = {};
  }
}

function CV() {
  const { search } = useLocation();
  const tailored = SUMMARIES[new URLSearchParams(search).get('for')];
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
          {tailored || 'Interaction designer with eight years in UK government and consumer apps. Currently designing and prototyping a beta service for ICS. Previously HMRC\'s bilingual Council Tax service, tested over six to seven research rounds with at least half Welsh speakers. SC cleared.'}
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
            <li>Designing and prototyping a case-management service for ICS, now in beta. Interaction design and coded GOV.UK Prototype Kit prototypes, using Claude to speed up coding and iteration.</li>
            <li>Led interaction design for HMRC's Welsh Council Tax service during alpha, in Welsh and English, for all 22 Welsh local authorities. Six to seven research rounds, at least half with Welsh speakers.</li>
            <li>Designed Natural England's protected sites monitoring service, testing with ecologists and field surveyors. Testing showed users losing their bearings, so I added a site overview page, now part of the core service.</li>
            <li>Designed a DEFRA/APHA workforce planning tool on PowerBI, replacing team spreadsheets with one view of activities and absences for managers, within Fluent constraints.</li>
            <li>Set the standard for personas, interaction models and WCAG 2.2 across the team, and coached other designers on GDS and coded prototyping.</li>
          </ul>
        </div>

        <div className="cv-job-block">
          <div className="cv-job-top">
            <h3 className="cv-company-name">DAM Digital</h3>
            <span className="cv-job-dates">Apr 2022 – Nov 2023</span>
          </div>
          <p className="cv-job-role">Senior UX Designer</p>
          <ul className="cv-bullets">
            <li>Led UX on Shy Lifestyle (a luxury concierge app, live at shylifestyle.com), Rethink Mental Illness's donation module and McArthurGlen's shopping app, across up to 3 concurrent clients.</li>
            <li>Ran regular design reviews with clients and turned stakeholder feedback into design decisions grounded in user needs.</li>
            <li>Owned accessibility and design system standards across all concurrent projects, keeping them consistent.</li>
            <li>Coached a user researcher to produce production-ready Figma prototypes.</li>
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
            <li>Built research-informed prototypes in Figma and coded prototypes in React and the GOV.UK Design System.</li>
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
            <li>Led co-creation sessions with traders, product owners and engineers to validate concepts early.</li>
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
                <li>Coded prototyping (React, GOV.UK Prototype Kit)</li>
                <li>Conditional routing and policy logic</li>
                <li>Bilingual Welsh and English services</li>
              </ul>
            </div>
            <div>
              <ul className="cv-bullets">
                <li>Service and journey mapping</li>
                <li>Workshop and design critique facilitation</li>
                <li>AI tools (Claude, Copilot)</li>
                <li>Figma, Sketch, Miro, Mural</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="cv-footer-column">
          <h2 className="cv-section-title">EDUCATION</h2>
          <div className="cv-edu-block">
            <h3 className="cv-edu-title">MSc UX Design</h3>
            <p className="cv-edu-school">Kingston University, London</p>
            <p className="cv-edu-meta">2016 – 2017 · Thesis: WebVR app for autism awareness, exploring immersive environments as a medium for inclusive design and empathy-building.</p>
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
