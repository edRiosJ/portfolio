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
    general: {
      logoProject: logoYourCountry,
      altImage: 'Your Country',
      linkDeployProject: 'https://app-countries-omega.vercel.app',
      imageDeploy: yourCountry,
      linkRepositoryProject: 'https://github.com/edRiosJ/App-countries',
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
    spanish: {
      descriptionProject: [
        'Aplicación web con tema de países que realiza peticiones a una API y base de datos.',
        '📌 Realizar búsquedas por nombre de país.',
        '📌 Filtrar países por continente y/o actividad turistica.',
        '📌 Ordenar países alfabeticamente o por número de habitantes tanto de forma ascendente como descendente.',
        '📌 Crear actividades turisticas para uno o varios paises al mismo tiempo.',
      ],
    },
    english: {
      descriptionProject: [
        'Web application with country theme that makes requests to an API and database.',
        '📌 Search by country name.',
        '📌 Filter countries by continent and/or tourist activity.',
        '📌 Sort countries alphabetically or by number of inhabitants in ascending or descending order.',
        '📌 Create tourist activities for one or more countries at the same time.',
      ],
    },
  },
  {
    general: {
      logoProject: <p>PadelApp</p>,
      altImage: 'PadelApp',
      linkDeployProject: 'https://padelapp.netlify.app',
      imageDeploy: padelApp,
      linkRepositoryProject: 'https://github.com/pfpadelapp',
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
    spanish: {
      descriptionProject: [
        'Aplicación web que tiene como objetivo simplificar la interacción entre el usuario que quiere reservar una cancha de padel y los propietarios de las mismas.',
        '📌 El usuario puede buscar cancha por nombre, rango de precio o tipo de cancha.',
        '📌 El usuario puede reservar una cancha y pagar la reservacion con PayPal.',
        '📌 El usuario puede calificar y dejar comentarios de las canchas.',
        '📌 El propietario puede agregar y eliminar sus canchas.',
        '📌 El Administrador puede banear y desbanear usuarios, propietarios y canchas.',
        '📌 Y mas funcionalidades...',
      ],
    },
    english: {
      descriptionProject: [
        'Web application that has objective simplify the interaction between the user who wants to book a padel field and the padel field owners.',
        '📌 The user can search padel field by name, price range or type of court.',
        '📌 The user can book a field and pay for the reservation with PayPal.',
        '📌 The user can rate and comment on the fields.',
        '📌 The owner can add and delete his fields.',
        '📌 The admin can ban and unban users, owners and fields.',
        '📌 And more features...',
      ],
    },
  },
];

export default dataProjects;
