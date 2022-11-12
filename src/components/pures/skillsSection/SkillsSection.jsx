import React from 'react';
import dataSkills from '../../../utils/dataSkills.jsx';
import CardSkill from '../../containers/cardSkill/CardSkill.jsx';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './skillsSection.css';

function SkillsSection()
{
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <section className={`skills-section ${themeValue ? 'skills-section-lt' : 'skills-section-dt'}`} id="skills">
      <div data-aos="fade-up">
        <h2>Tecnologías</h2>
      </div>
      <div className="skills-container">
        {
          dataSkills && dataSkills.map((skill) => <CardSkill key={skill.name} skill={skill} />)
        }
      </div>
    </section>
  );
}

export default SkillsSection;
