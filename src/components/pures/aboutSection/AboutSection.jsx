import React from 'react';
import './aboutSection.css';

function AboutSection()
{
  return (
    <section className="aboutSection">
      <div className="containerTitle__About">
        <div>Me llamo Eduardo, soy </div>
        <div className="rotate_words">
          <span style={{ '--d': '0s' }}>Full Stack Web Developer</span>
          <span style={{ '--d': '4s' }}>Front End Developer</span>
          <span style={{ '--d': '8s' }}>Back End Developer</span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
