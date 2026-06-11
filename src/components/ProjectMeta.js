function ProjectMeta({ client, agency, year, role, team, duration }) {
  const items = [
    { label: 'Client', value: client },
    agency ? { label: 'Agency', value: agency } : null,
    { label: 'Year', value: year },
    duration ? { label: 'Duration', value: duration } : null,
    { label: 'Role', value: role },
    team ? { label: 'Team', value: team } : null,
  ].filter(Boolean);

  return (
    <div className="project-meta">
      {items.map(({ label, value }) => (
        <div key={label} className="project-meta-item">
          <span className="project-meta-label">{label}</span>
          <span className="project-meta-value">{value}</span>
        </div>
      ))}
    </div>
  );
}

export default ProjectMeta;
