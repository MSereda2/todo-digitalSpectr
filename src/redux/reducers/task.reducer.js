// Task Types
import { TASK__TYPES } from './task.types';

// Functions Utils
import { addTask, allowDelete, removeTask } from './task.utils';


const INITIAL_STATE = {
  tasks: [],
}

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASK__TYPES.ADD__TASK:
      return {
        ...state,
        tasks: addTask(state, action)
      }
    case TASK__TYPES.MARK_DELETED:
      return {
        ...state,
        tasks: allowDelete(state, action)
      }
    case TASK__TYPES.REMOVE_TASK:
      return {
        ...state,
        tasks: removeTask(state, action)
      }
    default: return state;
  }
}

export default taskReducer;

