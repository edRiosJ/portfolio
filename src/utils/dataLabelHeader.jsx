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
    nameLabelSpanish: 'Inicio',
    nameLabelEnglish: 'Home',
    directionScroll: 'home',
    icon: <HiHome />,
  },
  {
    nameLabelSpanish: 'Sobre mí',
    nameLabelEnglish: 'About',
    directionScroll: 'about',
    icon: <HiUser />,
  },
  {
    nameLabelSpanish: 'Proyectos',
    nameLabelEnglish: 'Projects',
    directionScroll: 'projects',
    icon: <HiComputerDesktop />,
  },
  {
    nameLabelSpanish: 'Tecnologías',
    nameLabelEnglish: 'Skills',
    directionScroll: 'skills',
    icon: <HiFire />,
  },
  {
    nameLabelSpanish: 'Contacto',
    nameLabelEnglish: 'Contact',
    directionScroll: 'contact',
    icon: <HiEnvelopeOpen />,
  },
];

export default dataLabelHeader;
