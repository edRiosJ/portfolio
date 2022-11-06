import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiChakraui,
  SiAuth0,
  SiMongodb,
} from 'react-icons/si';
import logoYourCountry from '../img/logoYourCountry.svg';
import padelApp from '../img/padelApp.png';
import yourCountry from '../img/yourCountry.png';

const dataProjects = [
  {
    logoProject: logoYourCountry,
    altImage: 'Your Country',
    linkDeployProject: 'https://app-countries-omega.vercel.app',
    imageDeploy: yourCountry,
    linkRepositoryProject: 'https://github.com/edRiosJ/App-countries',
    descriptionProyect: [
      'Aplicación web con tema de países que realiza peticiones a una api y base de datos.',
      '📌 Realizar búsquedas por nombre de país',
      '📌 Filtrar países por continente y/o actividad turistica.',
      '📌 Ordenar países de alfabeticamente o por número de habitantes tanto de forma ascendente como descendente.',
      '📌 Crear actividades turisticas para uno o varios paises al mismo tiempo.',
    ],
    icons: [
      { color: '#F7E018', name: 'JavaScript', icon: <SiJavascript /> },
      { color: '#61DAFB', name: 'React', icon: <SiReact /> },
      { color: '#764ABC', name: 'Redux', icon: <SiRedux /> },
      { color: '#121212', name: 'ReactRouter', icon: <SiReactrouter /> },
      { color: '#43853D', name: 'Node.js', icon: <SiNodedotjs /> },
      { color: '#353535', name: 'Express', icon: <SiExpress /> },
      { color: '#52B0E7', name: 'Sequelize', icon: <SiSequelize /> },
      { color: '#336791', name: 'PostgresSQL', icon: <SiPostgresql /> },
    ],
    linkVideo: 'https://www.youtube.com/embed/f-wBPwd9FKA',
  },
  {
    logoProject: <p>PadelApp</p>,
    altImage: 'PadelApp',
    linkDeployProject: 'https://padelapp.netlify.app',
    imageDeploy: padelApp,
    linkRepositoryProject: 'https://github.com/pfpadelapp',
    descriptionProyect: [
      'Aplicación que tiene como objetivo simplificar la interacción entre el usuario que quiere reservar una cancha de padel y los propietarios de las mismas.',
      '📌 Usuario puede buscar cancha por nombre, rango de precio, tipo de cancha.',
      '📌 Usuario puede reservar una cancha y pagar la reservacion con PayPal.',
      '📌 Usuario puede calificar y dejar comentarios de las canchas.',
      '📌 Propietario puede agregar y eliminar sus canchas.',
      '📌 Administrador puede banear y desbanear usuarios, propietarios y canchas.',
      '📌 Y mas funcionalidades...',
    ],
    icons: [
      { color: '#F7E018', name: 'JavaScript', icon: <SiJavascript /> },
      { color: '#61DAFB', name: 'React', icon: <SiReact /> },
      { color: '#764ABC', name: 'Redux Toolkit', icon: <SiRedux /> },
      { color: '#5EC9CA', name: 'Chakra UI', icon: <SiChakraui /> },
      { color: '#121212', name: 'ReactRouter', icon: <SiReactrouter /> },
      { color: '#EB5424', name: 'Auth0', icon: <SiAuth0 /> },
      { color: '#43853D', name: 'Node.js', icon: <SiNodedotjs /> },
      { color: '#353535', name: 'Express', icon: <SiExpress /> },
      { color: '#008000', name: 'MongoDB', icon: <SiMongodb /> },
    ],
    linkVideo: 'https://www.youtube.com/embed/Ruw-wEPetV4',
  },
];

export default dataProjects;
