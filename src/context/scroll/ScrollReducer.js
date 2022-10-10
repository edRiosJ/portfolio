import { SET_SCROLL } from '../types.js';

export default function ScrollReducer(state, action)
{
  const { payload, type } = action;

  switch (type)
  {
    case SET_SCROLL:
      return {
        ...state,
        scrollValue: payload,
      };
    default:
      return state;
  }
}
