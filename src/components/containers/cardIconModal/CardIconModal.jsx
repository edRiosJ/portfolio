import React from 'react';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import './cardIconModal.css';

function CardIconModal({ children, color, name })
{
  return (
    <div className="card-icon-modal">
      <IconContext.Provider value={{ size: '4vw', color: `${color}` }}>
        {children}
        <p>{ name }</p>
      </IconContext.Provider>
    </div>
  );
}

CardIconModal.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardIconModal;
