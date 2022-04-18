import {LANGUAGE_CHANGE, THEME_CHANGE} from '../action/Constant';

const initialState = {
  mode: 'light',
  lang: 'eng',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        mode: action.payload,
      };
    case LANGUAGE_CHANGE:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
