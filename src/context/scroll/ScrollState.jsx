import React from 'react';
import ScrollReducer from './ScrollReducer.js';
import ScrollContext from './ScrollContext.js';

// eslint-disable-next-line react/prop-types
function ScrollState({ children })
{
  const initialState = {
    scrollValue: 0,
  };

  const [state, dispatch] = React.useReducer(ScrollReducer, initialState);

  const setScroll = () => {
    dispatch({
      type: 'SET_SCROLL',
      payload: window.scrollY,
    });
  };

  return (
    <ScrollContext.Provider value={
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      {
        scrollValue: state.scrollValue,
        setScroll,
      }
    }
    >
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollState;
