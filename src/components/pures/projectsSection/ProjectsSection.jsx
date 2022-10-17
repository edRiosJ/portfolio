/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
} from 'react-icons/si';
import { IconContext } from 'react-icons';
import CardIconModal from '../../containers/cardIconModal/CardIconModal';
import Modal from '../modal/Modal';
import { useModal } from '../../../hooks/useModal.jsx';
import logoYourCountry from '../../../img/logoYourCountry.svg';
import './projectsSection.css';

function ProjectsSection()
{
  const [isOpenModalYourCountry, openModalYourCountry, closeModalYourCountry] = useModal(false);
  const [isOpenModalPadelApp, openModalPadelApp, closeModalPadelApp] = useModal(false);

  return (
    <section className="projectsSection">
      <h2>Mis Proyectos</h2>
      <div className="projectsContainer">
        <div className="cardProject">
          <div
            className="imageProject"
            onClick={openModalYourCountry}
          >
            <img
              src={logoYourCountry}
              alt="Your Country"
            />
          </div>
          <Modal
            isOpen={isOpenModalYourCountry}
            closeModal={closeModalYourCountry}
          >
            <div className="logoModal">
              <img src={logoYourCountry} alt="Your Country" />
            </div>

            <div className="sectionModal">
              <div className="leftPanel">
                <div className="deployCardModal">
                  <a
                    href="https://app-countries-omega.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="imageDeployCard" />
                  </a>
                </div>
                <IconContext.Provider value={{ size: '10vw' }}>
                  <div className="repositoryCardModal">
                    <a
                      href="https://github.com/edRiosJ/App-countries"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub />
                    </a>
                    <p>Repositorio</p>
                  </div>
                </IconContext.Provider>
              </div>

              <div className="descriptionCardModal">
                <p>
                  Aplicación web con tema de países que realiza peticiones a una api y base de datos.
                  <br />
                  <br />
                  📌 Realizar búsquedas por nombre de país
                  <br />
                  <br />
                  📌 Filtrar países por continente y/o actividad turistica.
                  <br />
                  <br />
                  📌 Ordenar países de alfabeticamente o por número de habitantes tanto de forma ascendente como descendente.
                  <br />
                  <br />
                  📌 Crear actividades turisticas para uno o varios paises al mismo tiempo.
                </p>
              </div>
            </div>

            <div className="techCardModal">
              <CardIconModal color="#F7E018" name="JavaScript">
                <SiJavascript />
              </CardIconModal>

              <CardIconModal color="#61DAFB" name="React">
                <SiReact />
              </CardIconModal>

              <CardIconModal color="#764ABC" name="Redux">
                <SiRedux />
              </CardIconModal>

              <CardIconModal color="#121212" name="ReactRouter">
                <SiReactrouter />
              </CardIconModal>

              <CardIconModal color="#43853D" name="Node.js">
                <SiNodedotjs />
              </CardIconModal>

              <CardIconModal color="#353535" name="Express">
                <SiExpress />
              </CardIconModal>

              <CardIconModal color="#52B0E7" name="Sequelize">
                <SiSequelize />
              </CardIconModal>

              <CardIconModal color="#336791" name="PostgresSQL">
                <SiPostgresql />
              </CardIconModal>

            </div>

            <div className="videoModal">
              <p>video</p>
            </div>
          </Modal>
        </div>

        <div className="cardProject">
          <div
            className="imageProject"
            onClick={openModalPadelApp}
          >
            <p>PadelApp</p>
          </div>
          <Modal
            isOpen={isOpenModalPadelApp}
            closeModal={closeModalPadelApp}
          >
            <div className="logoModal">
              <p>PadelApp</p>
            </div>

            <div className="sectionModal">
              <div className="leftPanel">
                <div className="deployCardModal">
                  <p>deploy</p>
                </div>
                <div className="repositoryCardModal">
                  <p>repository</p>
                </div>
              </div>

              <div className="descriptionCardModal">
                <p>description</p>
              </div>
            </div>

            <div className="techCardModal">
              <p>Technologies</p>
            </div>

            <div className="videoModal">
              <p>video</p>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
