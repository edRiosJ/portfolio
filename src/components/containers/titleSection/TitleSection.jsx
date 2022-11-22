import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './titleSection.css';

function TitleSection({ title })
{
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <div data-aos="fade-right">
      <div className={`title-section ${themeValue ? 'title-section-lt' : 'title-section-dt'}`}>
        <h2>
          {title}
        </h2>
      </div>
    </div>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleSection;
