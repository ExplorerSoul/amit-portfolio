import React from 'react';
import type { Project } from '../types';
import '../styles/ProjectCard.css';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card">
      <img className="project-card-image" src={project.imageUrl} alt={project.title} />
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="project-card-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link live-demo-link">
            Live Demo
          </a>
        )}
        {project.sourceUrl && (
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-link source-code-link">
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;