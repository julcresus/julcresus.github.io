import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const PROJECT_ORDER = [
  { route: '/hmrc',            title: 'HMRC Wales' },
  { route: '/naturalengland',  title: 'Natural England' },
  { route: '/defra',           title: 'DEFRA' },
  { route: '/shyl',            title: 'Shy Lifestyle' },
  { route: '/rethink',         title: 'Rethink' },
  { route: '/shya',            title: 'Shy Aviation' },
  { route: '/mag',             title: 'McArthurGlen' },
  { route: '/mod',             title: 'Armed Forces' },
  { route: '/everymindmatters',title: 'Every Mind Matters' },
  { route: '/sgdesign',        title: 'Société Générale' },
];

function ProjectNav({ current }) {
  const index = PROJECT_ORDER.findIndex(p => p.route === current);
  const prev = index > 0  ? PROJECT_ORDER[index - 1] : null;
  const next = index >= 0 && index < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[index + 1] : null;

  return (
    <div className="project-nav">
      <NavHashLink to="/#projects" className="project-nav-all">← All work</NavHashLink>
      {(prev || next) && (
        <div className="project-nav-seq">
          {prev && <Link to={prev.route} className="project-nav-link">← {prev.title}</Link>}
          {next && <Link to={next.route} className="project-nav-link">{next.title} →</Link>}
        </div>
      )}
    </div>
  );
}

export default ProjectNav;
