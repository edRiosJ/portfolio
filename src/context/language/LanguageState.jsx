import React from 'react';
import PropTypes from 'prop-types';
import LanguageContext from './LanguageContext.js';
import LanguageReducer from './LanguageReducer.js';
import { SET_LANGUAGE } from '../types.js';

function LanguageState({ children })
{
  const initialState = {
    languageValue: true,
  };

  const [state, dispatch] = React.useReducer(LanguageReducer, initialState);

  const setLanguage = () => {
    dispatch({
      type: SET_LANGUAGE,
      payload: !state.languageValue,
    });
  };

  return (
    <LanguageContext.Provider value={{ languageValue: state.languageValue, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageState;
