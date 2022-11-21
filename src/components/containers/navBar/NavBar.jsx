/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'react-icons';
import { FcLandscape, FcNightLandscape } from 'react-icons/fc';
import HeaderLabel from '../headerLabel/HeaderLabel';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './navBar.css';

function NavBar()
{
  const { themeValue, setTheme } = React.useContext(ThemeContext);

  return (
    <header
      id="header"
      role="navigation"
      className={`${themeValue ? 'header-lt' : 'header-dt'}`}
    >
      <div id="container-logo">
        <div id="image-logo" />
        <div id="text-logo">
          <span>EDR</span>
        </div>
      </div>
      <div className="header-right-panel">
        <ul>
          <HeaderLabel nameLabel="Inicio" directionScroll="home" />
          <HeaderLabel nameLabel="Sobre mí" directionScroll="about" />
          <HeaderLabel nameLabel="Proyectos" directionScroll="projects" />
          <HeaderLabel nameLabel="Tecnologías" directionScroll="skills" />
          <HeaderLabel nameLabel="Contacto" directionScroll="contact" />
        </ul>
        <div className="buttons-config">
          <IconContext.Provider value={{ size: '1.5vw' }}>
            {
              themeValue ? <FcLandscape onClick={setTheme} /> : <FcNightLandscape onClick={setTheme} />
            }
          </IconContext.Provider>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
