/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import './cardSkill.css';

function CardSkill({ skill })
{
  const { color, name, icon } = skill;

  return (
    <div className="card-skill" data-aos="zoom-out-down">
      <IconContext.Provider value={{ size: '8vw', color: `${color}` }}>
        {icon}
        <p>{ name }</p>
      </IconContext.Provider>
    </div>
  );
}

CardSkill.propTypes = {
  skill: PropTypes.objectOf(
    PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.node,
      ],
    ),
  ).isRequired,
};

export default CardSkill;
