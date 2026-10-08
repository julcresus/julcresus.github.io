import '../App.css';
import { NavHashLink } from 'react-router-hash-link';

function Accessibility() {
  return (
    <div className="about-page">
      <p className="section-label">Accessibility</p>
      <h1 className="project-title">Accessibility statement</h1>
      <p className="description">
        I want everyone to be able to use this site. It aims to meet WCAG 2.2 AA, the same standard I work to when designing government services.
      </p>

      <h2 className="sub-title">What's in place</h2>
      <ul className="description">
        <li>Full keyboard navigation, including a skip link and visible focus indicators</li>
        <li>Case-study screens are plain captioned images with links to open them full size in a new tab, so there are no carousels or overlays to get stuck in</li>
        <li>Animations and transitions are switched off when your system requests reduced motion</li>
        <li>Semantic headings and landmarks, and text alternatives on images</li>
        <li>Light and dark themes that respect your system preference</li>
      </ul>

      <h2 className="sub-title">Known issues</h2>
      <p className="description">
        Some project images are dense interface screenshots whose full content can't reasonably be conveyed in a text alternative. If you'd like any of them described in detail, ask me and I will.
      </p>

      <h2 className="sub-title">Found a problem?</h2>
      <p className="description">
        If anything on this site doesn't work for you, email me at{' '}
        <a href="mailto:cresusjulien@gmail.com">cresusjulien@gmail.com</a> and I'll fix it.
      </p>
      <p className="description">Last reviewed: October 2026. An automated check (axe, against WCAG 2.2 AA) found no violations on any page in the light or dark theme. Automated checks only catch some problems, so please tell me if you find one.</p>

      <NavHashLink to="/#projects" className="about-back">← Back</NavHashLink>
    </div>
  );
}

export default Accessibility;
