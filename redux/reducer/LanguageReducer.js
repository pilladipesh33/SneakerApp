import {LANGUAGE_CHANGE} from '../action/Constant';
import { getCurrentLocale } from '../../utils/i18n';

const initialState = {
  lang: getCurrentLocale,
};

const LanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_CHANGE:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

export default LanguageReducer;
