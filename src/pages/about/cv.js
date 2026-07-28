import React, { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';

function CV() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <p className="section-label">Curriculum Vitae</p>
      
      <div className="cv-content">
        <div className="cv-header-flex">
          <div>
            <h1 className="project-title" style={{marginBottom: "8px"}}>Julien Crésus-Ashton</h1>
            <p className="about-lead">
              Paris-born, London-based interaction designer with eight years of experience in consultancy and digital transformation, working across fintech, government, enterprise and consumer products. I specialize in user-centred design for complex services, where getting the interaction model right matters more than how it looks.
            </p>
          </div>
          <div className="cv-contact-info">
            <a href="mailto:cresusjulien@gmail.com">cresusjulien@gmail.com</a>
            <a href="https://linkedin.com/in/juliencresus/" target="_blank" rel="noopener noreferrer">linkedin.com/in/juliencresus</a>
            <a href="https://julcresus.github.io">julcresus.github.io</a>
            <span>London, UK</span>
          </div>
        </div>
        
        <Row className="g-5 align-items-start mt-4">
          <Col xs={12} md={8}>
            <p className="section-label mb-4">Experience</p>
            
            <div className="cv-job">
              <div className="cv-job-header">
                <h3 className="cv-role">Senior Interaction Designer</h3>
                <span className="cv-dates">Nov 2023 – Present</span>
              </div>
              <p className="cv-company">Cognizant</p>
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

            <div className="cv-job">
              <div className="cv-job-header">
                <h3 className="cv-role">Senior UX/UI Designer</h3>
                <span className="cv-dates">Apr 2022 – Nov 2023</span>
              </div>
              <p className="cv-company">DAM Digital</p>
              <ul className="cv-bullets">
                <li>Led UX strategy across a range of clients including McArthurGlen and Crisis, owning the design process from research through to handoff.</li>
                <li>Designed complex user workflows and information architecture across consumer and enterprise products, balancing user needs against technical constraints.</li>
                <li>Ran the full design process in Figma from early discovery through to handoff, working directly with product managers and engineers.</li>
                <li>Kept accessibility and design system standards consistent across concurrent projects, and managed client relationships.</li>
                <li>Helped a user researcher get up to speed with Figma and UX practice.</li>
              </ul>
            </div>

            <div className="cv-job">
              <div className="cv-job-header">
                <h3 className="cv-role">UX Designer</h3>
                <span className="cv-dates">Feb 2019 – Apr 2022</span>
              </div>
              <p className="cv-company">Methods</p>
              <ul className="cv-bullets">
                <li>Designed for government programmes including Every Mind Matters, National Funding Formula and Ministry of Defence—working to GDS standards across discovery, alpha and beta.</li>
                <li>Built research-informed prototypes in Figma and coded prototypes using React and the GOV.UK Design System, enabling faster collaboration.</li>
                <li>Produced user journeys, personas, service maps and storyboards that helped engineers and product managers understand design intent.</li>
                <li>Ran workshops that brought research, product and engineering into the same room, helping align on design direction.</li>
              </ul>
            </div>

            <div className="cv-job">
              <div className="cv-job-header">
                <h3 className="cv-role">UX/UI Designer Trainee</h3>
                <span className="cv-dates">Sep 2017 – Dec 2018</span>
              </div>
              <p className="cv-company">Société Générale Design</p>
              <ul className="cv-bullets">
                <li>Designed interaction models for trading platforms and internal innovation programmes / financial tools in low- and high-fidelity, using Adobe XD and Sketch.</li>
                <li>Worked with quantitative analysts and IT teams to translate complex data workflows into usable interfaces for the people using them.</li>
                <li>Ran co-creation sessions with traders, product owners, end users and engineers to validate concepts early.</li>
              </ul>
            </div>
          </Col>
          
          <Col xs={12} md={4}>
            <div className="cv-sidebar-section">
              <p className="section-label mb-3">Education</p>
              <div className="cv-edu">
                <h4 className="cv-edu-degree">MSc UX Design</h4>
                <p className="cv-edu-school">Kingston University, London <span className="cv-dates ml-1">2018</span></p>
                <p className="cv-edu-desc">Thesis: Autism awareness app in WebVR</p>
              </div>
              <div className="cv-edu mt-3">
                <h4 className="cv-edu-degree">BA Web Design</h4>
                <p className="cv-edu-school">Epitech Digital · Paris <span className="cv-dates ml-1">2016</span></p>
              </div>
            </div>

            <div className="cv-sidebar-section mt-5">
              <p className="section-label mb-3">Skills</p>
              <ul className="cv-skills-list">
                <li>Interaction Design</li>
                <li>UX & Service Design</li>
                <li>User-Centred Design</li>
                <li>Prototyping & Wireframing</li>
                <li>GDS Design System</li>
                <li>WCAG 2.2 Accessibility</li>
                <li>Discovery to Live Delivery</li>
                <li>Journey & Service Mapping</li>
                <li>Workshop Facilitation</li>
                <li>Stakeholder Management</li>
                <li>HTML, CSS & React</li>
              </ul>
            </div>

            <div className="cv-sidebar-section mt-5">
              <p className="section-label mb-3">Tools</p>
              <p className="cv-tools-list">
                Figma, Sketch, Adobe Suite,<br/>
                Miro, JIRA, Confluence
              </p>
            </div>

            <div className="cv-sidebar-section mt-5">
              <p className="section-label mb-3">Languages</p>
              <ul className="cv-skills-list">
                <li>French <span className="cv-dates">(Native)</span></li>
                <li>English <span className="cv-dates">(Bilingual)</span></li>
                <li>German <span className="cv-dates">(Basic)</span></li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      <NavHashLink to="/#projects" className="about-back mt-5">← Back to Portfolio</NavHashLink>
    </div>
  );
}

export default CV;
