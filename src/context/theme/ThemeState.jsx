import React from 'react';
import PropTypes from 'prop-types';
import ThemeReducer from './ThemeReducer.js';
import ThemeContext from './ThemeContext.js';
import { SET_THEME } from '../types.js';

function ThemeState({ children })
{
  const initialState = {
    themeValue: true,
  };

  const [state, dispatch] = React.useReducer(ThemeReducer, initialState);

  const setTheme = () => {
    dispatch({
      type: SET_THEME,
      payload: !state.themeValue,
    });
  };

  return (
    <ThemeContext.Provider value={{ themeValue: state.themeValue, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeState;
