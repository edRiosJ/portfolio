import React from 'react';
import dataProjects from '../../../utils/dataProjects';
import CardProject from '../cardProject/CardProject';
import LanguageContext from '../../../context/language/LanguageContext.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import TitleSection from '../../containers/titleSection/TitleSection';
import { dataProject } from '../../../utils/dataPortfolio.js';
import { useModal } from '../../../hooks/useModal.jsx';
import './projectsSection.css';

function ProjectsSection()
{
  const [isOpenModalYourCountry, openModalYourCountry, closeModalYourCountry] = useModal(false);
  const [isOpenModalPadelApp, openModalPadelApp, closeModalPadelApp] = useModal(false);
  const { languageValue } = React.useContext(LanguageContext);
  const { themeValue } = React.useContext(ThemeContext);

  const dataSection = languageValue ? { ...dataProject.spanish } : { ...dataProject.english };

  return (
    <section className={`projects-section ${themeValue ? 'projects-section-lt' : 'projects-section-dt'}`} id="projects">
      <TitleSection title={dataSection.title} />
      <div className="projects-container">
        <CardProject
          key="YourCountry"
          dataProject={dataProjects[0]}
          functionOpenModal={openModalYourCountry}
          valueActiveModal={isOpenModalYourCountry}
          functionCloseModal={closeModalYourCountry}
          textLabel={dataSection.labelRepository}
        />
        <CardProject
          key="PaddelApp"
          dataProject={dataProjects[1]}
          functionOpenModal={openModalPadelApp}
          valueActiveModal={isOpenModalPadelApp}
          functionCloseModal={closeModalPadelApp}
          textLabel={dataSection.labelRepository}
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
