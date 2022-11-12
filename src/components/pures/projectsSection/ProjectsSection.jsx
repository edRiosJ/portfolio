/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import dataProjects from '../../../utils/dataProjects';
import CardProject from '../cardProject/CardProject';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import { useModal } from '../../../hooks/useModal.jsx';
import './projectsSection.css';

function ProjectsSection()
{
  const [isOpenModalYourCountry, openModalYourCountry, closeModalYourCountry] = useModal(false);
  const [isOpenModalPadelApp, openModalPadelApp, closeModalPadelApp] = useModal(false);
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <section className={`projects-section ${themeValue ? 'projects-section-lt' : 'projects-section-dt'}`} id="projects">
      <div data-aos="fade-up">
        <h2>Proyectos</h2>
      </div>
      <div className="projects-container">
        <CardProject
          key="YourCountry"
          dataProject={dataProjects[0]}
          functionOpenModal={openModalYourCountry}
          valueActiveModal={isOpenModalYourCountry}
          functionCloseModal={closeModalYourCountry}
        />
        <CardProject
          key="PaddelApp"
          dataProject={dataProjects[1]}
          functionOpenModal={openModalPadelApp}
          valueActiveModal={isOpenModalPadelApp}
          functionCloseModal={closeModalPadelApp}
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
