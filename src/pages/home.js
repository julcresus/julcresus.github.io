import '../App.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { projects } from '../data/projects';
import FadeIn from '../components/FadeIn';


const FEATURED_IDS = ['hmrc', 'naturalengland', 'shyl'];
const CARD_DETAILS = {
  hmrc: { description: 'Designing a Council Tax challenge service in Welsh and English.', role: 'Interaction design' },
  naturalengland: { description: 'Helping surveyors and managers monitor protected sites.', role: 'Interaction design' },
  defra: { description: 'Making workforce planning clearer for APHA managers.', role: 'Interaction design' },
  shyl: { description: 'Bringing luxury services into one booking app.', role: 'UX design' },
  rethink: { description: 'Simplifying one-time and recurring donations.', role: 'UX design' },
  shya: { description: 'Designing a self-service aviation booking journey.', role: 'UX design' },
  mag: { description: 'Helping shoppers find and redeem outlet offers.', role: 'UX design' },
  mod: { description: 'Prototyping recruitment journeys across the Armed Forces.', role: 'UX design' },
  emm: { description: 'Making mental health support easier to navigate.', role: 'UX design' },
  sg: { description: 'Designing clearer workflows for FX trading.', role: 'Interaction design' },
};

const FILTERS = ['All', 'Government', 'Consumer', 'Fintech'];

const ProjectCard = React.memo(({ project, index }) => {
  return (
    <FadeIn delay={Math.min(index, 3) * 0.1}>
      <Link to={project.route} className="project-card">
        <div className="project-card-image-wrap">
          <img
            src={project.image}
            alt={project.alt}
            loading={index < 4 ? 'eager' : 'lazy'}
          />

        </div>
        <div className="project-card-caption">
          <h3 className="project-card-title">{project.shortTitle}</h3>
          <p className="project-card-description">{CARD_DETAILS[project.id].description}</p>
          <p className="project-card-tags">
            {CARD_DETAILS[project.id].role}
            {project.year && ` · ${project.year}`}
          </p>
        </div>
      </Link>
    </FadeIn>
  );
});

ProjectCard.displayName = 'ProjectCard';

function Home() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects.filter(p => !FEATURED_IDS.includes(p.id))
    : projects.filter(p => p.sector === activeFilter.toLowerCase());

  return (
    <div className="page-wrapper">
      <header className="intro-container portfolio-intro">
        <div>
          <p className="intro-eyebrow">Julien Crésus-Ashton · London · Currently at Cognizant</p>
          <h1 className="intro">I make complex services <strong className="intro-strong">easier to use.</strong></h1>
          <p className="intro-summary">Senior Interaction Designer working across public services and digital products. I turn research and complex requirements into accessible journeys, tested through prototypes.</p>
          <div className="intro-actions">
            <a href="#projects">Explore my work ↓</a>
            <a href="mailto:cresusjulien@gmail.com">Get in touch ↗</a>
          </div>
        </div>
      </header>

      <section id="projects" className="projects-section" aria-labelledby="selected-work-heading">
        <h2 id="selected-work-heading" className="section-label">Selected work</h2>
        <Row className="g-4">
          {FEATURED_IDS.map((id, index) => (
            <Col xs={12} lg={4} key={id}>
              <ProjectCard project={projects.find(p => p.id === id)} index={index} />
            </Col>
          ))}
        </Row>
      </section>

      <section className="projects-section work-archive" aria-labelledby="more-work-heading">
        <h2 id="more-work-heading" className="section-label">More work</h2>
        <p className="archive-description">Browse the wider portfolio by sector. Sector filters include the selected projects above.</p>
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' filter-btn-active' : ''}`}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <Row className="g-4 g-md-5">
          {filtered.map((project, index) => (
            <Col xs={12} md={6} key={project.id}>
              <ProjectCard project={project} index={index} />
            </Col>
          ))}
        </Row>
      </section>

      <div className="contact-cta">
        <a href="mailto:cresusjulien@gmail.com" className="contact-cta-link">Let's work together →</a>
      </div>
    </div>
  );
}

export default Home;
