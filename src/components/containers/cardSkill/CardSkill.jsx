import React from 'react';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './cardSkill.css';

function CardSkill({ skill })
{
  const { color, name, icon } = skill;
  const { themeValue } = React.useContext(ThemeContext);

  const getBorderValue = () => Math.floor((Math.random() * (75 - 25 + 1)) + 25);

  return (
    <div data-aos="zoom-in">
      <div
        className={`card-skill ${themeValue ? 'card-skill-lt' : 'card-skill-dt'}`}
        style={{ borderRadius: `${getBorderValue()}% ${getBorderValue()}% ${getBorderValue()}% ${getBorderValue()}% / ${getBorderValue()}% ${getBorderValue()}% ${getBorderValue()}% ${getBorderValue()}%` }}
      >
        <IconContext.Provider value={{ size: '5vw', color: `${color}` }}>
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
