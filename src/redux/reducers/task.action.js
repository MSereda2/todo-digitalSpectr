import {TASK__TYPES} from './task.types';

export const addTaskAC = ({taskName,selectLevel}) => ({
  type: TASK__TYPES.ADD__TASK,
  taskName,
  selectLevel
})

export const markDeletedAC = ({firstId,secondId}) => ({
  type: TASK__TYPES.MARK_DELETED,
  firstId,
  secondId
})

export const removeTaskAC = ({firstId,secondId}) => ({
  type: TASK__TYPES.REMOVE_TASK,
  firstId,
  secondId
})