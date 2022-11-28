import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import LanguageContext from '../../../context/language/LanguageContext.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './headerLabel.css';

function HeaderLabel({ label })
{
  const {
    nameLabelSpanish,
    nameLabelEnglish,
    directionScroll,
    icon,
  } = label;
  const { languageValue } = React.useContext(LanguageContext);
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <li className={`header-label ${themeValue ? 'header-label-lt' : 'header-label-dt'}`}>
      <a href={`#${directionScroll}`}>
        <IconContext.Provider value={{ size: '1.21vw' }}>
          {icon}
        </IconContext.Provider>
        <span>
          {languageValue ? nameLabelSpanish : nameLabelEnglish}
        </span>
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
