import React from 'react';
import Modal from '../modal/Modal';
import { useModal } from '../../../hooks/useModal.jsx';
import './projectsSection.css';

function ProjectsSection()
{
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);

  return (
    <section className="projectsSection">
      <h2>Mis Proyectos</h2>
      <div className="projectsContainer">
        <button
          type="button"
          onClick={openModal1}
        >
          Modal
        </button>
        <Modal
          isOpen={isOpenModal1}
          closeModal={closeModal1}
        >
          <h3>Modal 1</h3>
        </Modal>
      </div>
    </section>
  );
}

export default ProjectsSection;
