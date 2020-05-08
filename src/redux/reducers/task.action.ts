import {TASK__TYPES} from './task.types';
import {
  addTaskTypeAC,
  markDeletedTypeAC,
  removeTaskTypeAC,
  itemId,
  taskItemType
} from '../../types/task.typesTS';

export const addTaskAC = ({taskName,selectLevel,selectParent}: taskItemType):addTaskTypeAC => ({
  type: TASK__TYPES.ADD__TASK,
  taskName,
  selectLevel,
  selectParent
})

export const markDeletedAC = ({firstId,secondId,thirdId}: itemId):markDeletedTypeAC => ({
  type: TASK__TYPES.MARK_DELETED,
  firstId,
  secondId,
  thirdId
})

export const removeTaskAC = ({firstId,secondId,thirdId}: itemId):removeTaskTypeAC => ({
  type: TASK__TYPES.REMOVE_TASK,
  firstId,
  secondId,
  thirdId
})