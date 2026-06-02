import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CYCLE_WORDS = ['designing', 'researching', 'prototyping', 'testing', 'iterating', 'facilitating'];

function CyclingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reducedMotion.current) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex(i => (i + 1) % CYCLE_WORDS.length);
        setVisible(true);
      }, 300);
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span aria-hidden="true" style={{ transition: 'opacity 0.3s ease', opacity: visible ? 1 : 0 }}>
      {CYCLE_WORDS[index]}
    </span>
  );
}

const projects = [
  {
    id: 'hmrc',
    image: './img/hmrc.webp',
    alt: 'HMRC project with Cognizant',
    title: 'Cognizant — HMRC Wales',
    tags: 'UX Design, Interaction Design, User Research',
    year: '2023–Present',
    readTime: 4,
    teaser: 'Bilingual Welsh service · GOV.UK Prototype Kit',
    route: '/hmrc',
    sector: 'government',
  },
  {
    id: 'naturalengland',
    image: './img/naturalengland.webp',
    alt: 'Natural England / DEFRA project with Cognizant',
    title: 'Cognizant — Natural England / DEFRA',
    tags: 'UX Design, Service Design, User Research',
    year: '2024–2025',
    readTime: 4,
    teaser: 'Protected sites monitoring · field survey tools',
    route: '/naturalengland',
    sector: 'government',
  },
  {
    id: 'defra',
    image: './img/defra.webp',
    alt: 'DEFRA project with Cognizant',
    title: 'Cognizant — DEFRA / APHA',
    tags: 'UX Design, Interaction Design, User Research',
    year: '2024–2025',
    readTime: 4,
    teaser: 'Internal scheduling tool · PowerBI constraints',
    route: '/defra',
    sector: 'government',
  },
  {
    id: 'shyl',
    image: './img/shyl.webp',
    alt: 'Shy Lifestyle app design showcase',
    title: 'Dam Digital — Shy Lifestyle',
    tags: 'App Design, UX Design, User Research',
    year: '2023',
    readTime: 3,
    teaser: 'Luxury concierge app · premium booking flows',
    route: '/shyl',
    sector: 'consumer',
  },
  {
    id: 'rethink',
    image: './img/rethink.png',
    alt: 'Rethink responsive UI design project',
    title: 'Dam Digital — Rethink',
    tags: 'UX Design, UI Design, Product Design',
    year: '2022',
    readTime: 3,
    teaser: 'Charity donation module · accessibility-first',
    route: '/rethink',
    sector: 'consumer',
  },
  {
    id: 'shya',
    image: './img/shya.webp',
    alt: 'Shy Aviation UX research project',
    title: 'Dam Digital — Shy Aviation',
    tags: 'UX Design, User Research',
    year: '2022',
    readTime: 3,
    teaser: 'Private jet booking · corporate client journeys',
    route: '/shya',
    sector: 'consumer',
  },
  {
    id: 'mag',
    image: './img/mag.webp',
    alt: 'McArthurGlen app design project',
    title: 'Dam Digital — McArthurGlen',
    tags: 'App Design, UX Design, User Research',
    year: '2022',
    readTime: 3,
    teaser: 'Designer outlet loyalty app · QR redemption flow',
    route: '/mag',
    sector: 'consumer',
  },
  {
    id: 'mod',
    image: './img/mod.webp',
    alt: 'Armed Forces Recruitment Program UI design',
    title: 'Methods — Armed Forces Recruitment',
    tags: 'UX Design, Interaction Design, GOV.UK',
    year: '2019–2020',
    readTime: 2,
    teaser: 'Multi-branch candidate journey · coded prototype',
    route: '/mod',
    sector: 'government',
  },
  {
    id: 'emm',
    image: './img/emm.webp',
    alt: 'Every Mind Matters UX research and testing',
    title: 'Methods — Every Mind Matters',
    tags: 'UX Design, Interaction Design, User Research',
    year: '2019',
    readTime: 4,
    teaser: 'NHS mental health quiz · cognitive load design',
    route: '/everymindmatters',
    sector: 'government',
  },
  {
    id: 'sg',
    image: './img/sg.webp',
    alt: 'Societe Generale UX and UI design',
    title: 'Société Générale',
    tags: 'Interaction Design, Design Systems',
    year: '2017–2018',
    readTime: 4,
    teaser: 'FX trading platform · data-dense interfaces',
    route: '/sgdesign',
    sector: 'fintech',
  },
];

const FILTERS = ['All', 'Government', 'Consumer', 'Fintech'];

const ProjectCard = React.memo(({ project, index }) => {
  const wrapRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delay = `${Math.min(index, 3) * 80}ms`;
  const animClass = `card-anim${visible ? ' card-visible' : ''}`;

  return (
    <div ref={wrapRef} className={animClass} style={{ transitionDelay: delay }}>
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
    </div>
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
          <p className="intro" aria-label="Senior Interaction Designer, currently designing at Cognizant.">
            Senior Interaction Designer, currently{' '}
            <CyclingWord />
            {' '}@ Cognizant.
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
