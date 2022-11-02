import React from 'react';
import HeaderLabel from '../headerLabel/HeaderLabel';
import './navBar.css';

function NavBar()
{
  return (
    <header id="header">
      <div id="containerLogo">
        <div id="imageLogo" />
        <div id="textLogo">
          <span>EDR</span>
        </div>
      </div>
      <ul>
        <HeaderLabel nameLabel="Inicio" directionScroll="home" />
        <HeaderLabel nameLabel="Sobre mí" directionScroll="about" />
        <HeaderLabel nameLabel="Proyectos" directionScroll="projects" />
        <HeaderLabel nameLabel="Experiencia" directionScroll="experience" />
        <HeaderLabel nameLabel="Tecnologías" directionScroll="skills" />
        <HeaderLabel nameLabel="Certificaciones" directionScroll="certifications" />
        <HeaderLabel nameLabel="Contacto" directionScroll="contact" />
      </ul>
    </header>
  );
}

export default NavBar;
