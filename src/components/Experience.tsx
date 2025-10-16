import React from 'react';
import { EXPERIENCES } from '../constants';
import ExperienceCard from './ExperienceCard';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">Work Experience</h2>
          <p className="experience-subtitle">
            My professional journey and key contributions in the tech industry.
          </p>
        </div>
        <div className="experience-grid">
          {EXPERIENCES.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;