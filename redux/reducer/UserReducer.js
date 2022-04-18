import { THEME_CHANGE} from '../action/Constant';

const initialState = {
  mode: 'light',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
