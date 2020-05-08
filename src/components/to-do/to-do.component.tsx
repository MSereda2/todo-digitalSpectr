// Packages
import React, {FC} from 'react';
import { connect } from 'react-redux';

// Styles
import style from './to-do.module.scss';

// Components
import ParentTaskItem from '../parent-task-item/parent-task-item.component';
import CreateTask from '../create-task/create-task.component';

// Actions
import { markDeletedAC, removeTaskAC } from '../../redux/reducers/task.action';

// types TS
import {appStateType} from '../../redux/rootReducer';
import {taskObjectType,itemId} from '../../types/task.typesTS';

type mapStatePropsType = {
  tasks: Array<taskObjectType>
}

type mapDispatchPropsType = {
  markDeletedAC: (data: itemId) => void,
  removeTaskAC: (data: itemId) => void
}

type propsType = mapStatePropsType & mapDispatchPropsType;

const ToDo:FC<propsType> = ({tasks,...props}) => {

  const listItems = (tasks: Array<taskObjectType>) => tasks.map(task =>
       <ParentTaskItem key={task.id} {...task} {...props} />);

  const completed = tasks.filter(task => task.isAllowedDelete);
  const pending = tasks.filter(task => !task.isAllowedDelete);

  return (
    <main className={style.toDo}>
      <h2 className={style.toDo__heading}>To do List</h2>
      {listItems(pending)}
      {listItems(completed)}
      <CreateTask />
    </main>
  )
}

const mapStatetoProps = (state: appStateType) => ({
  tasks: state.tasks.tasks
})

export default connect(mapStatetoProps, { markDeletedAC, removeTaskAC})(ToDo);