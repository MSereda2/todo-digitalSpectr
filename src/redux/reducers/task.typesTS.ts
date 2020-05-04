import {TASK__TYPES} from './task.types';

// REDUCER TYPES
export type nestedTaskType = {
  id: number,
  isAllowedDelete: boolean,
  name: string,
};

export type taskObjectType = {
  id: number,
  isAllowedDelete: boolean,
  name: string,
  taskNested: Array<nestedTaskType>
};

export type InitialStateType = {
  tasks: Array<taskObjectType>
};

// ACTION TYPES
export type taskItemType = {
  taskName: string,
  selectLevel: string
};

export type itemId = {
  firstId?: number,
  secondId?: number
};

export type addTaskType = taskItemType & { type: typeof TASK__TYPES.ADD__TASK };
export type markDeletedType = itemId & { type: typeof TASK__TYPES.MARK_DELETED };
export type removeTaskType = itemId & { type: typeof TASK__TYPES.REMOVE_TASK };
export type actionsType = addTaskType | markDeletedType | removeTaskType;

