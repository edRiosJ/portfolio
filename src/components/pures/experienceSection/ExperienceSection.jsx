import React from 'react';
import dataExpierence from '../../../utils/dataExpierence.js';
import CardJob from '../cardJob/CardJob.jsx';
import './experienceSection.css';

function ExperienceSection()
{
  return (
    <section className="experienceSection" id="experience">
      <h2 data-aos="fade-up">Experiencia</h2>
      <div className="experienceContainer">
        {
          dataExpierence && dataExpierence.map((job) => <CardJob key={job.nameCompany} dataJob={job} />)
        }
      </div>
    </section>
  );
}

export default ExperienceSection;
