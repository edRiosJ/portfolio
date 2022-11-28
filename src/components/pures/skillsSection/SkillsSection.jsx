import React from 'react';
import dataSkills from '../../../utils/dataSkills.jsx';
import CardCertification from '../../containers/cardCertification/CardCertification.jsx';
import CardSkill from '../../containers/cardSkill/CardSkill.jsx';
import dataCertifications from '../../../utils/dataCertifications.js';
import LanguageContext from '../../../context/language/LanguageContext.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import TitleSection from '../../containers/titleSection/TitleSection.jsx';
import { dataSkill } from '../../../utils/dataPortfolio.js';
import './skillsSection.css';

function SkillsSection()
{
  const { languageValue } = React.useContext(LanguageContext);
  const { themeValue } = React.useContext(ThemeContext);

  const dataSection = languageValue ? { ...dataSkill.spanish } : { ...dataSkill.english };

  return (
    <section className={`skills-section ${themeValue ? 'skills-section-lt' : 'skills-section-dt'}`} id="skills">
      <TitleSection title={dataSection.title} />
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
              text={dataSection.text}
            />
          ))
        }
      </div>
    </section>
  );
}

export default SkillsSection;
