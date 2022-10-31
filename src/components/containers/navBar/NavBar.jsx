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
        <HeaderLabel nameLabel="Inicio" />
        <HeaderLabel nameLabel="Sobre mí" />
        <HeaderLabel nameLabel="Proyectos" />
        <HeaderLabel nameLabel="Tecnologías" />
        <HeaderLabel nameLabel="Contacto" />
      </ul>
    </header>
  );
}

export default NavBar;
