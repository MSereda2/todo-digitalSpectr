// Packages
import { combineReducers } from "redux";

// Reducers
import taskReducer from './reducers/task.reducer';
import {reducer as formReducer} from 'redux-form';

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>;

const rootReducer = combineReducers({
  tasks: taskReducer,
  form: formReducer
})

export default rootReducer;