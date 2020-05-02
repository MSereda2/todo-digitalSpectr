// Packages
import { combineReducers } from "redux";

// Reducers
import taskReducer from './reducers/task.reducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  tasks: taskReducer,
  form: formReducer
})

export default rootReducer;