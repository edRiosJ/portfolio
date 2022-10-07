import React from 'react';
import PropTypes from 'prop-types';
import './headerabel.css';

function HeaderLabel({ nameLabel })
{
  return (
    <li className="header_label">
      <a href="w">{nameLabel}</a>
    </li>
  );
}

HeaderLabel.propTypes = {
  nameLabel: PropTypes.string.isRequired,
};

export default HeaderLabel;
