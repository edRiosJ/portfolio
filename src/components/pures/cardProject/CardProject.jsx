/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { BsGithub } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import CardIconModal from '../../containers/cardIconModal/CardIconModal';
import Modal from '../modal/Modal';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './cardProject.css';

function CardProject({
  dataProject,
  functionOpenModal,
  valueActiveModal,
  functionCloseModal,
})
{
  const {
    logoProject,
    altImage,
    linkDeployProject,
    imageDeploy,
    linkRepositoryProject,
    descriptionProyect,
    icons,
    linkVideo,
  } = dataProject;

  const { themeValue } = React.useContext(ThemeContext);

  return (
    <div className={`card-project ${themeValue ? 'card-project-lt' : 'card-project-dt'}`}>
      <div data-aos="zoom-in-up">
        <div className="image-project" onClick={functionOpenModal}>
          {
            typeof logoProject === 'string' ? <img src={logoProject} alt={altImage} loading="lazy" /> : logoProject
          }
        </div>
      </div>
      <Modal isOpen={valueActiveModal} closeModal={functionCloseModal}>
        <div className="logo-modal">
          {
            typeof logoProject === 'string' ? <img src={logoProject} alt={altImage} loading="lazy" /> : logoProject
          }
        </div>

        <div className="section-modal">
          <div className="left-panel">
            <div className="deploy-card-modal">
              <a href={linkDeployProject} target="_blank" rel="noopener noreferrer">
                <div className="image-deploy-card">
                  <img src={imageDeploy} alt={altImage} loading="lazy" />
                </div>
              </a>
            </div>
            <IconContext.Provider value={{ size: '10vw' }}>
              <div className="repository-card-modal">
                <a href={linkRepositoryProject} target="_blank" rel="noopener noreferrer">
                  <BsGithub />
                </a>
                <p>Repositorio</p>
              </div>
            </IconContext.Provider>
          </div>

          <div className="description-card-modal">
            {descriptionProyect && descriptionProyect.map((el) => (
              <p key={el.slice(10)}>
                {el}
                <br />
                <br />
              </p>
            ))}
          </div>
        </div>

        <div className="tech-card-modal">
          {
            icons && icons.map((icon) => (
              <CardIconModal color={`${icon.color}`} name={`${icon.name}`} key={icon.name}>
                {icon.icon}
              </CardIconModal>
            ))
          }
        </div>

        <div className="video-modal">
          <iframe
            src={linkVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </div>
  );
}

CardProject.propTypes = {
  dataProject: PropTypes.objectOf(
    PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.node,
        PropTypes.array,
      ],
    ),
  ).isRequired,
  functionOpenModal: PropTypes.func.isRequired,
  valueActiveModal: PropTypes.bool.isRequired,
  functionCloseModal: PropTypes.func.isRequired,
};

export default CardProject;
