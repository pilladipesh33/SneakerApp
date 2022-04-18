import {LANGUAGE_CHANGE} from '../action/Constant';

const initialState = {
  lang: 'eng',
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
