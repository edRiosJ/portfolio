import React from 'react';
import dataSkills from '../../../utils/dataSkills.jsx';
import CardCertification from '../../containers/cardCertification/CardCertification.jsx';
import CardSkill from '../../containers/cardSkill/CardSkill.jsx';
import dataCertifications from '../../../utils/dataCertifications.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import TitleSection from '../../containers/titleSection/TitleSection.jsx';
import './skillsSection.css';

function SkillsSection()
{
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <section className={`skills-section ${themeValue ? 'skills-section-lt' : 'skills-section-dt'}`} id="skills">
      <TitleSection title="Tecnologías" />
      <div className="skills-container">
        {
          dataSkills && dataSkills.map((skill) => <CardSkill key={skill.name} skill={skill} />)
        }
      </div>
      <div className="certifications-container">
        {
          dataCertifications && dataCertifications.map((certification) => (
            <CardCertification
              key={certification.credentialCertification}
              certification={certification}
            />
          ))
        }
      </div>
    </section>
  );
}

export default SkillsSection;
