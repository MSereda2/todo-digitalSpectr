import {TASK__TYPES} from './task.types';
import {addTaskType, markDeletedType, removeTaskType,itemId,taskItemType} from './task.typesTS';

export const addTaskAC = ({taskName,selectLevel,selectParent}: taskItemType):addTaskType => ({
  type: TASK__TYPES.ADD__TASK,
  taskName,
  selectLevel,
  selectParent
})

export const markDeletedAC = ({firstId,secondId,thirdId}: itemId):markDeletedType => ({
  type: TASK__TYPES.MARK_DELETED,
  firstId,
  secondId,
  thirdId
})

export const removeTaskAC = ({firstId,secondId,thirdId}: itemId):removeTaskType => ({
  type: TASK__TYPES.REMOVE_TASK,
  firstId,
  secondId,
  thirdId
})