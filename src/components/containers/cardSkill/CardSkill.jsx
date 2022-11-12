/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './cardSkill.css';

function CardSkill({ skill })
{
  const { color, name, icon } = skill;
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <div data-aos="zoom-out-down">
      <div className={`card-skill ${themeValue ? 'card-skill-lt' : 'card-skill-dt'}`}>
        <IconContext.Provider value={{ size: '8vw', color: `${color}` }}>
          {icon}
          <p>{ name }</p>
        </IconContext.Provider>
      </div>
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
