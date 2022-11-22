/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './headerLabel.css';

function HeaderLabel({ label })
{
  const { nameLabel, directionScroll, icon } = label;
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <li className={`header-label ${themeValue ? 'header-label-lt' : 'header-label-dt'}`}>
      <a href={`#${directionScroll}`}>
        <IconContext.Provider value={{ size: '1.21vw' }}>
          {icon}
        </IconContext.Provider>
        <span>{nameLabel}</span>
      </a>
    </li>
  );
}

HeaderLabel.propTypes = {
  label: PropTypes.objectOf(
    PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.node,
      ],
    ),
  ).isRequired,
};

export default HeaderLabel;
