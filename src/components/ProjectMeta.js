function ProjectMeta({ client, agency, year, role }) {
  const items = [
    { label: 'Client', value: client },
    agency ? { label: 'Agency', value: agency } : null,
    { label: 'Year', value: year },
    { label: 'Role', value: role },
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
