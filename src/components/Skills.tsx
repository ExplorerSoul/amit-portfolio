import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import SkillScroller from './SkillScroller';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const allSkills = SKILL_CATEGORIES.flatMap(category => category.skills);
  const middleIndex = Math.ceil(allSkills.length / 2);
  const firstRowSkills = allSkills.slice(0, middleIndex);
  const secondRowSkills = allSkills.slice(middleIndex);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Technologies</h2>
          <p className="skills-subtitle">
            The tools and technologies I use to build modern web applications.
          </p>
        </div>
        <div className="scrollers-container">
          <SkillScroller skills={firstRowSkills} direction="left" />
          <SkillScroller skills={secondRowSkills} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default Skills;