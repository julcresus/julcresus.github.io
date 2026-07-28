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
        
        <div className="project-split-layout">
          <div className="project-split-text">
            {children}
          </div>
          {carousel && (
            <div className="project-split-media">
              <div className="sticky-media">
                {carousel}
              </div>
            </div>
          )}
        </div>
        
        <ProjectNav current={route} />
      </div>
    </div>
  );
}

export default ProjectLayout;
