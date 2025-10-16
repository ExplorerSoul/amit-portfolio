// import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <ScrollToTopButton />
      <Projects />
      <Skills />
      <Footer />
      
    </>
  );
}

export default App;