import React from 'react';
import dataSkills from '../../../utils/dataSkills.jsx';
import CardSkill from '../../containers/cardSkill/CardSkill.jsx';
import './skillsSection.css';

function SkillsSection()
{
  return (
    <section className="skillsSection">
      <h2>Tecnologías</h2>
      <div className="skillsContainer">
        {
          dataSkills && dataSkills.map((skill) => <CardSkill key={skill.name} skill={skill} />)
        }
      </div>
    </section>
  );
}

export default SkillsSection;
