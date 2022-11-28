import React from 'react';
import CardJob from '../cardJob/CardJob.jsx';
import dataExperience from '../../../utils/dataExperience.js';
import { dataAbout } from '../../../utils/dataPortfolio.js';
import LanguageContext from '../../../context/language/LanguageContext';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './aboutSection.css';

function AboutSection()
{
  const { languageValue } = React.useContext(LanguageContext);
  const { themeValue } = React.useContext(ThemeContext);

  const dataSection = languageValue ? { ...dataAbout.spanish } : { ...dataAbout.english };

  return (
    <section className={`about-section ${themeValue ? 'about-section-lt' : 'about-section-dt'}`} id="about">
      <div data-aos="fade-right">
        <div className="about-title">
          <h2>{dataSection.title}</h2>
        </div>
      </div>
      <div className="about-container">
        <div className="about-panel-left">
          <div className="image" />
          <article>
            <div className="container-title-about">
              <div>{dataSection.im}</div>
              <div className="rotate-words">
                <span style={{ '--d': '0s' }}>{dataSection.eng}</span>
                <span style={{ '--d': '4s' }}>Front End Developer</span>
                <span style={{ '--d': '8s' }}>Back End Developer</span>
              </div>
            </div>
            <p>
              {dataSection.text1}
              <br />
              {dataSection.text2}
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
