import '../App.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { projects } from '../data/projects';
import FadeIn from '../components/FadeIn';


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
          {project.teaser && (
            <div className="project-card-overlay" aria-hidden="true">
              <span className="project-card-overlay-text">{project.teaser}</span>
            </div>
          )}
        </div>
        <div className="project-card-caption">
          <p className="project-card-title">{project.title}</p>
          <p className="project-card-tags">
            {project.tags}
            {project.year && ` · ${project.year}`}
            {project.readTime && ` · ${project.readTime} min read`}
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
    ? projects
    : projects.filter(p => p.sector === activeFilter.toLowerCase());

  return (
    <div className="page-wrapper">
      <div className="intro-container">
        <div>
          <p className="intro">
            Senior Interaction Designer, currently designing @ Cognizant.
          </p>
        </div>
      </div>

      <div id="projects" className="projects-section">
        <p className="section-label">Selected work</p>

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
      </div>

      <div className="contact-cta">
        <a href="mailto:cresusjulien@gmail.com" className="contact-cta-link">Let's work together →</a>
      </div>
    </div>
  );
}

export default Home;
