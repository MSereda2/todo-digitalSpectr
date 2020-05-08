import {TASK__TYPES} from './../redux/reducers/task.types';

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
  secondLevelNested: Array<nestedTaskType> ,
  thirdLevelNested: Array<nestedTaskType>
};

export type InitialStateType = {
  tasks: Array<taskObjectType>
};

///////////////////////////////////////////////////////////////////

// ACTION TYPES
export type taskItemType = {
  taskName: string,
  selectLevel: string,
  selectParent: string
};

export type itemId = {
  firstId: number,
  secondId: number,
  thirdId: number
};


export type addTaskTypeAC = {
   type: typeof TASK__TYPES.ADD__TASK,
   taskName: string,
   selectLevel: string,
   selectParent: string
 };

export type markDeletedTypeAC = {
   type: typeof TASK__TYPES.MARK_DELETED,
   firstId: number,
   secondId: number,
   thirdId: number
};

export type removeTaskTypeAC = {
   type: typeof TASK__TYPES.REMOVE_TASK
   firstId: number,
   secondId: number,
   thirdId: number
};

export type actionsType = addTaskTypeAC | markDeletedTypeAC | removeTaskTypeAC;

