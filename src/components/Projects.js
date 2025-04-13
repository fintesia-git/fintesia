import React from 'react';
import './styles.css'; // Import the component-specific styles

function Projects() {
  const projects = [
    { title: 'Project Alpha', description: 'A brief description of your first project.' },
    { title: 'Project Beta', description: 'Details about your second exciting venture.' },
    { title: 'Project Gamma', description: 'Information on your third promising project.' },
  ];

  return (
    <div className="projects">
      <h2>Current Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;