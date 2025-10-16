"use client"; // 👈 Add this at the very top of the file
import React from 'react';
import { PROFILE_DATA } from '../constants';
import ThemeToggleButton from './ThemeToggleButton';
import { useHeader } from '../hooks/useHeader'; // Correctly imported
import '../styles/Header.css';

const Header: React.FC = () => {
  const { isOpen, toggleMenu, handleNavClick } = useHeader();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="flex-shrink-0">
          <a href="#home" onClick={handleNavClick} className="brand-link">
            {PROFILE_DATA.name}
          </a>
        </div>
        <nav className="nav-desktop">
          <div className="nav-links-container">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={handleNavClick} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
        <div className="header-actions">
          <ThemeToggleButton />
          <a href={PROFILE_DATA.contactEmail} className="contact-button">
            Contact Me
          </a>
        </div>
        <div className="mobile-menu-button-container">
          <button onClick={toggleMenu} type="button" className="mobile-menu-button" aria-controls="mobile-menu" aria-expanded={isOpen}>
            {/* <span className="sr-only">Open main menu</span> */}
            {!isOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={handleNavClick} className="nav-link mobile-nav-link">
                {link.name}
              </a>
            ))}
            <div className="mobile-actions">
              <a href={PROFILE_DATA.contactEmail} className="contact-button mobile-contact-button">
                Contact Me
              </a>
              <div className="mobile-theme-toggle">
                <ThemeToggleButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;