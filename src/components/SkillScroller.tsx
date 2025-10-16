import React from 'react';
import '../styles/SkillScroller.css';

interface SkillScrollerProps {
  skills: string[];
  direction: 'left' | 'right';
}

const SkillScroller: React.FC<SkillScrollerProps> = ({ skills, direction }) => {
  const animationClass = direction === 'left' ? 'scroller-inner-ltr' : 'scroller-inner-rtl';
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="scroller">
      <ul className={`scroller-inner ${animationClass}`}>
        {duplicatedSkills.map((skill, index) => (
          <li key={`${skill}-${index}`} className="skill-item">
            <div className="skill-bubble">
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillScroller;