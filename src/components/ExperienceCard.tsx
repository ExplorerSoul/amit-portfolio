import React from 'react';
import type { Experience } from '../types';
import '../styles/ExperienceCard.css';

// A map for Google colors to be used in inline styles for dynamic text color
const colorMap: { [key: string]: string } = {
  'google-blue': '#4285F4',
  'google-green': '#34A853',
  'google-yellow': '#FBBC05',
  'google-red': '#EA4335',
};

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="experience-card">
    <div className="card-header">
      <div>
        <h3 className="card-title">{experience.role}</h3>
        <p className="card-company" style={{ color: colorMap[experience.logoColor] || '#4B5563' }}>
          {experience.company}
        </p>
      </div>
      <span className="card-duration">{experience.duration}</span>
    </div>
    <ul className="card-description-list">
      {experience.description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;