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
        
        {children}
        
        <ProjectNav current={route} />
      </div>
    </div>
  );
}

export default ProjectLayout;
