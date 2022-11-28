import React from 'react';
import PropTypes from 'prop-types';
import ScrollReducer from './ScrollReducer.js';
import ScrollContext from './ScrollContext.js';
import { SET_SCROLL } from '../types.js';

function ScrollState({ children })
{
  const initialState = {
    scrollValue: 0,
  };

  const [state, dispatch] = React.useReducer(ScrollReducer, initialState);

  const setScroll = () => {
    dispatch({
      type: SET_SCROLL,
      payload: window.scrollY,
    });
  };

  return (
    <ScrollContext.Provider value={{ scrollValue: state.scrollValue, setScroll }}>
      {children}
    </ScrollContext.Provider>
  );
}

ScrollState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollState;
