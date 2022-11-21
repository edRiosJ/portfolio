import React from 'react';
import {
  AiOutlineContacts,
  AiOutlineFire,
  AiOutlineHome,
  AiOutlineLaptop,
  AiOutlineUser,
} from 'react-icons/ai';

const dataLabelHeader = [
  {
    nameLabel: 'Inicio',
    directionScroll: 'home',
    icon: <AiOutlineHome />,
  },
  {
    nameLabel: 'Sobre mí',
    directionScroll: 'about',
    icon: <AiOutlineUser />,
  },
  {
    nameLabel: 'Proyectos',
    directionScroll: 'projects',
    icon: <AiOutlineLaptop />,
  },
  {
    nameLabel: 'Tecnologías',
    directionScroll: 'skills',
    icon: <AiOutlineFire />,
  },
  {
    nameLabel: 'Contacto',
    directionScroll: 'contact',
    icon: <AiOutlineContacts />,
  },
];

export default dataLabelHeader;
