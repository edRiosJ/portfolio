/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './headerLabel.css';

function HeaderLabel({ nameLabel, directionScroll })
{
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <li className={`header-label ${themeValue ? 'header-label-lt' : 'header-label-dt'}`}>
      <a href={`#${directionScroll}`}>
        {nameLabel}
      </a>
    </li>
  );
}

HeaderLabel.propTypes = {
  nameLabel: PropTypes.string.isRequired,
  directionScroll: PropTypes.string.isRequired,
};

export default HeaderLabel;
