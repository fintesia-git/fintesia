import React from 'react';
import './styles.css'; // Import the component-specific styles

function Projects() {
  const projects = [
    { 
      title: 'BoxUp', 
      description: 'Almacenamiento global y accesible para todos.', 
      url: "https://boxup.cloud", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      title: 'Verse', 
      description: 'Una nueva forma de conectar.', 
      url: "https://verse.com", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      title: 'Project Gamma', 
      description: 'Information on your third promising project.', 
      url: "https://projectgamma.com", 
      image: "https://via.placeholder.com/150" 
    },
  ];

  return (
    <div className="projects">
      <h2>Proyectos</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;