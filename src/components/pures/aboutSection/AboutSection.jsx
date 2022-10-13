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
      <div className="aboutBody">
        <div className="aboutImage">
          <div className="image" />
        </div>
        <article>
          <div>
            <p>
              🔹 Soy Ingeniero en Ciencias de la Computación, desarrollador web Full Stack y Técnico en Informática. Siempre he estado interesado por el mundo de la tecnología por lo cual descubrí la programación, despertando en mi una pasión por la misma, paso poco tiempo para darme cuenta que quería desarrollarme profesionalmente en el ámbito de la programación, actualmente estoy interesado en el desarrollo web.
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
