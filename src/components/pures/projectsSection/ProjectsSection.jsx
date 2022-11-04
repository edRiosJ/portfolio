/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import dataProjects from '../../../utils/dataProjects';
import CardProject from '../cardProject/CardProject';
import { useModal } from '../../../hooks/useModal.jsx';
import './projectsSection.css';

function ProjectsSection()
{
  const [isOpenModalYourCountry, openModalYourCountry, closeModalYourCountry] = useModal(false);
  const [isOpenModalPadelApp, openModalPadelApp, closeModalPadelApp] = useModal(false);

  return (
    <section className="projectsSection" id="projects">
      <h2 data-aos="fade-up">Proyectos</h2>
      <div className="projectsContainer">
        <CardProject
          dataProject={dataProjects[0]}
          functionOpenModal={openModalYourCountry}
          valueActiveModal={isOpenModalYourCountry}
          functionCloseModal={closeModalYourCountry}
        />
        <CardProject
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
