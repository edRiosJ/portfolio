import React from 'react';
import { IconContext } from 'react-icons';
import { FcLandscape, FcNightLandscape } from 'react-icons/fc';
import dataLabelHeader from '../../../utils/dataLabelHeader.jsx';
import HeaderLabel from '../headerLabel/HeaderLabel.jsx';
import LanguageContext from '../../../context/language/LanguageContext.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import english from '../../../img/english.png';
import spanish from '../../../img/spanish.png';
import './navBar.css';

function NavBar()
{
  const { languageValue, setLanguage } = React.useContext(LanguageContext);
  const { themeValue, setTheme } = React.useContext(ThemeContext);

  return (
    <header
      id="header"
      role="navigation"
      className={`${themeValue ? 'header-lt' : 'header-dt'}`}
    >
      <div id="container-logo">
        <div id="image-logo" />
        <div id="text-logo">
          <span>EDR</span>
        </div>
      </div>
      <ul className="header-labels">
        {
          dataLabelHeader && dataLabelHeader.map((label) => (
            <HeaderLabel key={label.directionScroll} label={label} />
          ))
        }
      </ul>
      <div className="container-options">
        <div className="buttons-config">
          <IconContext.Provider value={{ size: '1.5vw' }}>
            {
              themeValue ? <FcLandscape onClick={setTheme} /> : <FcNightLandscape onClick={setTheme} />
            }
          </IconContext.Provider>
        </div>
        <div className="buttons-config">
          <img
            src={languageValue ? spanish : english}
            alt="flag"
            title={languageValue ? 'Español' : 'English'}
            onClick={setLanguage}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
