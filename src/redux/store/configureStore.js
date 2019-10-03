import { createStore, combineReducers } from 'redux';
import authReducer from '../reducers/auth';
import messageReducer from '../reducers/message';
import projectReducer from '../reducers/projects';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      message: messageReducer,
      projects: projectReducer,
    }),
  );
  return store;
};
