// Packages
import React from 'react';
import { connect } from 'react-redux';

// Styles
import style from './to-do.module.scss';

// Components
import ParentTaskItem from '../parent-task-item/parent-task-item.component';
import CreateTask from '../create-task/create-task.component';

// Actions
import { markDeletedAC, removeTaskAC } from '../../redux/reducers/task.action';

const ToDo = (props) => {

  const listItems = (tasks) => tasks.map(task =>
       <ParentTaskItem key={task.id} {...task} {...props} />);

  const completed = props.tasks.filter(task => task.isAllowedDelete);
  const pending = props.tasks.filter(task => !task.isAllowedDelete);

  return (
    <main className={style.toDo}>
      <h2 className={style.toDo__heading}>To do List</h2>
      {listItems(pending)}
      {listItems(completed)}
      <CreateTask />
    </main>
  )
}

const mapStatetoProps = (state) => ({
  tasks: state.tasks.tasks
})

export default connect(mapStatetoProps, { markDeletedAC, removeTaskAC})(ToDo);