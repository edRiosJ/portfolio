import React from 'react';
import dataExpierence from '../../../utils/dataExpierence.js';
import CardJob from '../cardJob/CardJob.jsx';
import './experienceSection.css';

function ExperienceSection()
{
  return (
    <section className="experience-section" id="experience">
      <h2 data-aos="fade-up">Experiencia</h2>
      <div className="experience-container">
        {
          dataExpierence && dataExpierence.map((job) => <CardJob key={job.nameCompany} dataJob={job} />)
        }
      </div>
    </section>
  );
}

export default ExperienceSection;
