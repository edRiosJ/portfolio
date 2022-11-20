import React from 'react';
import CardJob from '../cardJob/CardJob.jsx';
import dataExperience from '../../../utils/dataExperience.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './aboutSection.css';

function AboutSection()
{
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <section className={`about-section ${themeValue ? 'about-section-lt' : 'about-section-dt'}`} id="about">
      <div data-aos="fade-right">
        <div className="about-title">
          <h2>Sobre mí</h2>
        </div>
      </div>
      <div className="about-container">
        <div className="about-panel-left">
          <div className="image" />
          <article>
            <div className="container-title-about">
              <div>Me llamo Eduardo, soy </div>
              <div className="rotate-words">
                <span style={{ '--d': '0s' }}>Ing. en Ciencias de la Computación</span>
                <span style={{ '--d': '4s' }}>Front End Developer</span>
                <span style={{ '--d': '8s' }}>Back End Developer</span>
              </div>
            </div>
            <p>
              🔥 Tengo una pasión por la programación.
              <br />
              🔥 Creando soluciones a traves de codigo.
            </p>
          </article>
        </div>
        <div className="about-panel-right">
          {
            dataExperience && dataExperience.map((job) => <CardJob key={job.nameCompany} dataJob={job} />)
          }
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
