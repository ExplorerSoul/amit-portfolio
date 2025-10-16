"use client"; // 👈 Add this at the very top of the file
import React from 'react';
import profileImage from '../assets/profilepic.jpeg';
import { PROFILE_DATA } from '../constants';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const { handleScrollClick } = useSmoothScroll();

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="hero-intro">Hi there, I'm</span>
            <h1 className="hero-name">
              {PROFILE_DATA.name}
            </h1>
            <h2 className="hero-title">
              {PROFILE_DATA.title}
            </h2>
            <p className="hero-summary">
              {PROFILE_DATA.summary}
            </p>
            <div className="hero-buttons">
              <a href="#projects" onClick={handleScrollClick} className="hero-button hero-button-primary">
                View My Work
              </a>
              {/* <a href={PROFILE_DATA.contactEmail} className="hero-button hero-button-secondary">
                Get In Touch
              </a> */}
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <div className="hero-image-bg1"></div>
              <div className="hero-image-bg2"></div>
              <img
                className="hero-image"
                src={profileImage}
                alt="Profile of Amit Ranjan Das"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;