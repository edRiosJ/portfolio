import React from 'react';
import ThemeReducer from './ThemeReducer.js';
import ThemeContext from './ThemeContext.js';

// eslint-disable-next-line react/prop-types
function ThemeState({ children })
{
  const initialState = {
    themeValue: true,
  };

  const [state, dispatch] = React.useReducer(ThemeReducer, initialState);

  const setTheme = () => {
    dispatch({
      type: 'SET_THEME',
      payload: !state.themeValue,
    });
  };

  return (
    <ThemeContext.Provider value={
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      {
        themeValue: state.themeValue,
        setTheme,
      }
    }
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeState;
