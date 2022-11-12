import React from 'react';
import dataExpierence from '../../../utils/dataExpierence.js';
import CardJob from '../cardJob/CardJob.jsx';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import TitleSection from '../../containers/titleSection/TitleSection.jsx';
import './experienceSection.css';

function ExperienceSection()
{
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <section className={`experience-section ${themeValue ? 'experience-section-lt' : 'experience-section-dt'}`} id="experience">
      <TitleSection title="Experiencia" />
      <div className="experience-container">
        {
          dataExpierence && dataExpierence.map((job) => <CardJob key={job.nameCompany} dataJob={job} />)
        }
      </div>
    </section>
  );
}

export default ExperienceSection;
