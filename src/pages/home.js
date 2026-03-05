import '../App.css';
import React from 'react';
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Project data
const projects = [
  {
    id: 'hmrc',
    image: './img/hmrc.webp',
    alt: 'HMRC project with Cognizant',
    title: 'Cognizant — HMRC Wales',
    tags: 'UX Design, UI Design, User Research',
    year: '2025–2026',
    route: '/hmrc',
    disabled: false
  },
  {
    id: 'naturalengland',
    image: './img/naturalengland.png',
    alt: 'Natural England / DEFRA project with Cognizant',
    title: 'Cognizant — Natural England / DEFRA',
    tags: 'UX Design, UI Design, User Research, Service Design',
    year: '2024–2025',
    route: '/naturalengland',
    disabled: false
  },
  {
    id: 'defra',
    image: './img/defra.webp',
    alt: 'DEFRA project with Cognizant',
    title: 'Cognizant — DEFRA',
    tags: 'UX Design, UI Design, User Research',
    year: '2024–2025',
    route: '/defra',
    disabled: false
  },
  {
    id: 'shyl',
    image: './img/shyl.webp',
    alt: 'Shy Lifestyle app design showcase',
    title: 'Dam Digital — Shy Lifestyle',
    tags: 'App Design, UX Design, User Research',
    year: '2023',
    route: '/shyl',
    disabled: false
  },
  {
    id: 'rethink',
    image: './img/rethink.png',
    alt: 'Rethink responsive UI design project',
    title: 'Dam Digital — Rethink',
    tags: 'UX Design, UI Design, Product Design',
    year: '2022',
    route: '/rethink',
    disabled: false
  },
  {
    id: 'shya',
    image: './img/shya.webp',
    alt: 'Shy Aviation UX research project',
    title: 'Dam Digital — Shy Aviation',
    tags: 'UX Design, User Research',
    year: '2022',
    route: '/shya',
    disabled: false
  },
  {
    id: 'mag',
    image: './img/mag.webp',
    alt: 'McArthurGlen app design project',
    title: 'Dam Digital — McArthurGlen',
    tags: 'App Design, UX Design, User Research',
    year: '2022',
    note: 'Case study under NDA',
    route: '/#',
    disabled: true
  },
  {
    id: 'mod',
    image: './img/mod.webp',
    alt: 'Armed Forces Recruitment Program UI design',
    title: 'Methods — Armed Forces Recruitment Program',
    tags: 'UX Design, UI Design, Coding',
    year: '2019–2020',
    route: '/mod',
    disabled: false
  },
  {
    id: 'emm',
    image: './img/emm.webp',
    alt: 'Every Mind Matters UX research and testing',
    title: 'Methods — Every Mind Matters',
    tags: 'UX Design, UI Design, User Research',
    year: '2018',
    route: '/everymindmatters',
    disabled: false
  },
  {
    id: 'esfa',
    image: './img/esfa.webp',
    alt: 'ESFA user testing project',
    title: 'Methods — ESFA',
    tags: 'UX Design, UI Design, Coding',
    year: '2018',
    route: '/esfa',
    disabled: false
  },
  {
    id: 'sg',
    image: './img/sg.webp',
    alt: 'Societe Generale UX and UI design',
    title: 'Societe Generale Design',
    tags: 'UX Design, UI Design',
    year: '2019',
    route: '/sgdesign',
    disabled: false
  },
  {
    id: 'ps',
    image: './img/ps.webp',
    alt: 'PlayStation Store app redesign case study',
    title: 'University Case Study — Playstation Store',
    tags: 'UX Design, UI Design, App Design',
    year: '2019',
    route: '/playstation',
    disabled: false
  },
  {
    id: 'pride',
    image: './img/pride.webp',
    alt: 'Pride in London UI design',
    title: 'Pride in London',
    tags: 'UI Design',
    year: '2018',
    route: '/prideinlondon',
    disabled: false
  }
];

// Memoized ProjectCard component
const ProjectCard = React.memo(({ project, index }) => {
  if (project.disabled) {
    return (
      <div className="project-card project-card-disabled">
        <div className="project-card-image-wrap">
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
          />
        </div>
        <div className="project-card-caption">
          <p className="project-card-title">{project.title}</p>
          <p className="project-card-tags">{project.tags}{project.year && ` · ${project.year}`}</p>
          {project.note && <p className="project-card-note">{project.note}</p>}
        </div>
      </div>
    );
  }

  return (
    <Link to={project.route} className="project-card">
      <div className="project-card-image-wrap">
        <img
          src={project.image}
          alt={project.alt}
          loading={index < 4 ? "eager" : "lazy"}
        />
      </div>
      <div className="project-card-caption">
        <p className="project-card-title">{project.title}</p>
        <p className="project-card-tags">{project.tags}{project.year && ` · ${project.year}`}</p>
      </div>
    </Link>
  );
});

ProjectCard.displayName = 'ProjectCard';

function Home() {
  return (
    <div className="page-wrapper">
      {/* Hero */}
      <div className="intro-container">
        <div>
          <p className="intro">
            Currently,{' '}
            <TextLoop interval={1300}>
              <span>designing</span>
              <span>creating</span>
              <span>coding</span>
              <span>testing</span>
              <span>iterating</span>
              <span>researching</span>
            </TextLoop>
            {' '}@ Cognizant, London, UK —{' '}
            working across government services, fintech, and consumer products.
          </p>
        </div>
      </div>

      {/* Project grid */}
      <div id="projects" className="projects-section">
        <p className="section-label">Selected work</p>
        <Row className="g-4 g-md-5">
          {projects.map((project, index) => (
            <Col xs={12} md={6} key={project.id}>
              <ProjectCard project={project} index={index} />
            </Col>
          ))}
        </Row>
      </div>

      {/* Contact CTA */}
      <div className="contact-cta">
        <a href="mailto:cresusjulien@gmail.com" className="contact-cta-link">Let's work together →</a>
      </div>
    </div>
  );
}

export default Home;
