import { SET_THEME } from '../types.js';

export default function ThemeReducer(state, action)
{
  const { payload, type } = action;

  switch (type)
  {
    case SET_THEME:
      return { themeValue: payload };
    default:
      return state;
  }
}
