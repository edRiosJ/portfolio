import React from 'react';
import PropTypes from 'prop-types';
import './imageParallax.css';

function ImageParallax({ image, styleValue })
{
  return (
    <img
      id={image.slice(14).split('.')[0]}
      src={image}
      alt={image.slice(14).split('.')[0]}
      style={styleValue}
    />
  );
}

ImageParallax.propTypes = {
  image: PropTypes.string.isRequired,
  styleValue: PropTypes.objectOf(PropTypes.string),
};

ImageParallax.defaultProps = {
  styleValue: null,
};

export default ImageParallax;
