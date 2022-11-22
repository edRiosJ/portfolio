import React from 'react';
import {
  HiComputerDesktop,
  HiEnvelopeOpen,
  HiFire,
  HiHome,
  HiUser,
} from 'react-icons/hi2';

const dataLabelHeader = [
  {
    nameLabel: 'Inicio',
    directionScroll: 'home',
    icon: <HiHome />,
  },
  {
    nameLabel: 'Sobre mí',
    directionScroll: 'about',
    icon: <HiUser />,
  },
  {
    nameLabel: 'Proyectos',
    directionScroll: 'projects',
    icon: <HiComputerDesktop />,
  },
  {
    nameLabel: 'Tecnologías',
    directionScroll: 'skills',
    icon: <HiFire />,
  },
  {
    nameLabel: 'Contacto',
    directionScroll: 'contact',
    icon: <HiEnvelopeOpen />,
  },
];

export default dataLabelHeader;
