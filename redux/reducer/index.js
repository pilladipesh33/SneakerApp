import {combineReducers} from 'redux';
import { LOGOUT_SUCCESS } from '../action/Constant';
import authReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import UserReducer from './UserReducer';



const appReducer = combineReducers({
  auth: authReducer,
  theme: UserReducer,
  lang: UserReducer,
  profile: ProfileReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
