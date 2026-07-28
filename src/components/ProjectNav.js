import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { projects } from '../data/projects';

function ProjectNav({ current }) {
  const index = projects.findIndex(p => p.route === current);
  // Loop back to the first project if we are at the end, or show first project if index is invalid
  const next = (index >= 0 && index < projects.length - 1) ? projects[index + 1] : projects[0];

  return (
    <div className="project-nav-large">
      <p className="sub-title" style={{ marginTop: 0 }}>Next Project</p>
      <Link to={next.route} className="project-nav-next-large">
        {next.title} ↗
      </Link>
      <div className="project-nav-bottom">
        <NavHashLink to="/#projects" className="project-nav-all">← Back to all work</NavHashLink>
      </div>
    </div>
  );
}

export default ProjectNav;
