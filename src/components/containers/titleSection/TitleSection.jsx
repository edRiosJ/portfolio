import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './titleSection.css';

function TitleSection({ title })
{
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <div data-aos="fade-up">
      <h2 className={`title-section ${themeValue ? 'title-section-lt' : 'title-section-dt'}`}>
        {title}
      </h2>
    </div>
  );
}

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleSection;
