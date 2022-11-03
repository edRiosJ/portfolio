/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './headerLabel.css';

function HeaderLabel({ nameLabel, directionScroll })
{
  return (
    <li className="header_label">
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
