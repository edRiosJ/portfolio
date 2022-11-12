import React from 'react';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './aboutSection.css';

function AboutSection()
{
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <section className={`about-section ${themeValue ? 'about-section-lt' : 'about-section-dt'}`} id="about">
      <div data-aos="fade-up">
        <div className={`container-title-about ${themeValue ? 'title-about-lt' : 'title-about-dt'}`}>
          <div>Me llamo Eduardo, soy </div>
          <div className={`rotate-words ${themeValue ? 'rotate-words-lt' : 'rotate-words-dt'}`}>
            <span style={{ '--d': '0s' }}>Full Stack Web Developer</span>
            <span style={{ '--d': '4s' }}>Front End Developer</span>
            <span style={{ '--d': '8s' }}>Back End Developer</span>
          </div>
        </div>

      </div>
      <div className={`about-body ${themeValue ? 'about-body-lt' : 'about-body-dt'}`}>
        <div className="about-image" data-aos="fade-up-right">
          <div className="image" />
        </div>
        <article>
          <div data-aos="fade-up-left">
            <p>
              🔹 Soy Ingeniero en Ciencias de la Computación, desarrollador web Full Stack y Técnico en Informática. Siempre he estado interesado por el mundo de la tecnología por lo cual descubrí la programación, despertando en mi una pasión por la misma.
            </p>
            <br />
            <p>
              🔹 Soy una persona curiosa, por lo cual me gusta aventurarme en nuevas experiencias y estar en un estado de continuo aprendizaje. Me gusta salir de mi zona de confort, gracias a ello he podido obtener y madurar habilidades como la inteligencia emocional, tolerancia a la frustración, creatividad, toma de decisiones, adaptación al cambio, empatía, entre otras.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default AboutSection;
