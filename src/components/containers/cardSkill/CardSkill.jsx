/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import './cardSkill.css';

function CardSkill({ skill })
{
  const { color, name, icon } = skill;

  return (
    <div className="cardSkill">
      <IconContext.Provider value={{ size: '8vw', color: `${color}` }}>
        {icon}
        <p>{ name }</p>
      </IconContext.Provider>
    </div>
  );
}

CardSkill.propTypes = {
  skill: PropTypes.objectOf(PropTypes.shape(
    {
      color: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    },
  )).isRequired,
};

export default CardSkill;
