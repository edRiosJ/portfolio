/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import { IconContext } from 'react-icons';
import { FcLandscape, FcNightLandscape } from 'react-icons/fc';
import dataLabelHeader from '../../../utils/dataLabelHeader.jsx';
import HeaderLabel from '../headerLabel/HeaderLabel.jsx';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './navBar.css';

function NavBar()
{
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
      <div className="buttons-config">
        <IconContext.Provider value={{ size: '1.5vw' }}>
          {
            themeValue ? <FcLandscape onClick={setTheme} /> : <FcNightLandscape onClick={setTheme} />
          }
        </IconContext.Provider>
      </div>
    </header>
  );
}

export default NavBar;
