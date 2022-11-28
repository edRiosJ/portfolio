import React from 'react';
import PropTypes from 'prop-types';
import { BsGithub } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import CardIconModal from '../../containers/cardIconModal/CardIconModal';
import Modal from '../modal/Modal';
import LanguageContext from '../../../context/language/LanguageContext.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './cardProject.css';

function CardProject({
  dataProject,
  functionOpenModal,
  valueActiveModal,
  functionCloseModal,
  textLabel,
})
{
  const { languageValue } = React.useContext(LanguageContext);
  const { themeValue } = React.useContext(ThemeContext);

  const dataSection = languageValue ? { ...dataProject.general, ...dataProject.spanish }
    : { ...dataProject.general, ...dataProject.english };

  return (
    <div className={`card-project ${themeValue ? 'card-project-lt' : 'card-project-dt'}`}>
      <div data-aos="zoom-in-up">
        <div className="image-project" onClick={functionOpenModal}>
          {
            typeof dataSection.logoProject === 'string' ? <img src={dataSection.logoProject} alt={dataSection.altImage} loading="lazy" />
              : dataSection.logoProject
          }
        </div>
      </div>
      <Modal isOpen={valueActiveModal} closeModal={functionCloseModal}>
        <div className="logo-modal">
          {
            typeof dataSection.logoProject === 'string' ? <img src={dataSection.logoProject} alt={dataSection.altImage} loading="lazy" />
              : dataSection.logoProject
          }
        </div>

        <div className="section-modal">
          <div className="left-panel">
            <div className="deploy-card-modal">
              <a href={dataSection.linkDeployProject} target="_blank" rel="noopener noreferrer">
                <div className="image-deploy-card">
                  <img src={dataSection.imageDeploy} alt={dataSection.altImage} loading="lazy" />
                </div>
              </a>
            </div>
            <IconContext.Provider value={{ size: '10vw' }}>
              <div className="repository-card-modal">
                <a href={dataSection.linkRepositoryProject} target="_blank" rel="noopener noreferrer">
                  <BsGithub />
                </a>
                <p>{textLabel}</p>
              </div>
            </IconContext.Provider>
          </div>

          <div className="description-card-modal">
            {dataSection.descriptionProject && dataSection.descriptionProject.map((el) => (
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
            dataSection.icons && dataSection.icons.map((icon) => (
              <CardIconModal color={`${icon.color}`} name={`${icon.name}`} key={icon.name}>
                {icon.icon}
              </CardIconModal>
            ))
          }
        </div>

        <div className="video-modal">
          <iframe
            src={dataSection.linkVideo}
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
  textLabel: PropTypes.string.isRequired,
};

export default CardProject;
