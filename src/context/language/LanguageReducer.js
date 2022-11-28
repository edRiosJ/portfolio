import { SET_LANGUAGE } from '../types.js';

export default function LanguageReducer(state, action)
{
  const { payload, type } = action;

  switch (type)
  {
    case SET_LANGUAGE:
      return { languageValue: payload };
    default:
      return state;
  }
}
