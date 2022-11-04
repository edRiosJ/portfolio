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
  return (
    <div className="cardProject">
      <div className="imageProject" onClick={functionOpenModal} data-aos="zoom-in-up">
        {
          typeof logoProject === 'string' ? <img src={logoProject} alt={altImage} /> : logoProject
        }
      </div>
      <Modal isOpen={valueActiveModal} closeModal={functionCloseModal}>
        <div className="logoModal">
          {
            typeof logoProject === 'string' ? <img src={logoProject} alt={altImage} /> : logoProject
          }
        </div>

        <div className="sectionModal">
          <div className="leftPanel">
            <div className="deployCardModal">
              <a href={linkDeployProject} target="_blank" rel="noopener noreferrer">
                <div className="imageDeployCard">
                  <img src={imageDeploy} alt={altImage} />
                </div>
              </a>
            </div>
            <IconContext.Provider value={{ size: '10vw' }}>
              <div className="repositoryCardModal">
                <a href={linkRepositoryProject} target="_blank" rel="noopener noreferrer">
                  <BsGithub />
                </a>
                <p>Repositorio</p>
              </div>
            </IconContext.Provider>
          </div>

          <div className="descriptionCardModal">
            {descriptionProyect && descriptionProyect.map((el) => (
              <p>
                {el}
                <br />
                <br />
              </p>
            ))}
          </div>
        </div>

        <div className="techCardModal">
          {
            icons && icons.map((icon) => (
              <CardIconModal color={`${icon.color}`} name={`${icon.name}`} key={icon.name}>
                {icon.icon}
              </CardIconModal>
            ))
          }
        </div>

        <div className="videoModal">
          <iframe
            src={linkVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </Modal>
    </div>
  );
}

CardProject.propTypes = {
  dataProject: PropTypes.objectOf(PropTypes.shape(
    {
      logoProject: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      altImage: PropTypes.string.isRequired,
      linkDeployProject: PropTypes.string.isRequired,
      imageDeploy: PropTypes.string.isRequired,
      linkRepositoryProject: PropTypes.string.isRequired,
      descriptionProyect: PropTypes.arrayOf(PropTypes.string).isRequired,
      icons: PropTypes.arrayOf(PropTypes.shape(
        {
          color: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          icon: PropTypes.node.isRequired,
        },
      )).isRequired,
      linkVideo: PropTypes.string.isRequired,
    },
  )).isRequired,
  functionOpenModal: PropTypes.func.isRequired,
  valueActiveModal: PropTypes.bool.isRequired,
  functionCloseModal: PropTypes.func.isRequired,
};

export default CardProject;
