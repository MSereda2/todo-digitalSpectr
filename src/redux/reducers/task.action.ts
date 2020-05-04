import {TASK__TYPES} from './task.types';
import {addTaskType, markDeletedType, removeTaskType,itemId,taskItemType} from './task.typesTS';

export const addTaskAC = ({taskName,selectLevel}: taskItemType):addTaskType => ({
  type: TASK__TYPES.ADD__TASK,
  taskName,
  selectLevel,
})

export const markDeletedAC = ({firstId,secondId}: itemId):markDeletedType => ({
  type: TASK__TYPES.MARK_DELETED,
  firstId,
  secondId
})

export const removeTaskAC = ({firstId,secondId}: itemId):removeTaskType => ({
  type: TASK__TYPES.REMOVE_TASK,
  firstId,
  secondId
})