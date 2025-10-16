import React from 'react';
import ProjectCard from './ProjectCard';
import { useProjectFilter } from '../hooks/useProjectFilter';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const { selectedTag, setSelectedTag, allTags, filteredProjects } = useProjectFilter();

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            A selection of my work. Feel free to explore and see the code behind them.
          </p>
        </div>

        <div className="filter-buttons">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`filter-button ${selectedTag === tag ? 'filter-button-active' : 'filter-button-inactive'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;