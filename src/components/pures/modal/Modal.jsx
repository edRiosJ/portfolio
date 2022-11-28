import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaWindowClose } from 'react-icons/fa';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './modal.css';

function Modal({ children, isOpen, closeModal })
{
  const handleModalContainerClick = (e) => e.stopPropagation();
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <article
      className={`modal ${isOpen && 'modal-open'}`}
      onClick={closeModal}
    >
      <div
        className={`modal-container ${themeValue ? 'modal-container-lt' : 'modal-container-dt'}`}
        onClick={handleModalContainerClick}
      >
        <button
          type="button"
          className="modal-close"
          onClick={closeModal}
        >
          <IconContext.Provider value={{ size: '5vw', color: '#ff0000' }}>
            <FaWindowClose />
          </IconContext.Provider>
        </button>
        { children }
      </div>
    </article>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
