import React from 'react';
import ProjectNav from './ProjectNav';
import ProjectMeta from './ProjectMeta';

function ProjectLayout({ 
  title, 
  client, 
  agency, 
  year, 
  role, 
  team, 
  duration, 
  route, 
  carousel,
  children 
}) {
  return (
    <div className="page-wrapper">
      <div className="project_inside">
        <h1 className="project-title">{title}</h1>
        <ProjectMeta 
          client={client} 
          agency={agency} 
          year={year} 
          role={role} 
          team={team} 
          duration={duration} 
        />
        
        {carousel && (
          <div className="project-media-hero">
            {carousel}
          </div>
        )}

        <div className="project-editorial-text">
          {children}
        </div>
        
        <ProjectNav current={route} />
      </div>
    </div>
  );
}

export default ProjectLayout;
