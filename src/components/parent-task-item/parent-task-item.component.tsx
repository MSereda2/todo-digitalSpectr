// Packages
import React from 'react';

// Styles
import style from './parent-task-item.module.scss';

// Components
import TaskItem from './task-item/task-item.component';

const ParentTaskItem = (props: any) => {

  const nestedTaskList = (task: any) => {
    return task.map(((task: any) =>
      <TaskItem
        key={task.id}
        isAllowedDelete={task.isAllowedDelete}
        nesteId={task.id}
        name={task.name}
        markDeletedAC={props.markDeletedAC}
        removeTaskAC={props.removeTaskAC} />))
  }

  const pending = props.taskNested.filter((task: any) => !task.isAllowedDelete);
  const complete = props.taskNested.filter((task: any) => task.isAllowedDelete);

  return (
    <div className={style.taskItem}>
      <ul className={style.taskItem__firstLevel}>
        <TaskItem {...props} />
        <ul className={style.taskItem__secondLevel}>
          {nestedTaskList(pending)}
          {nestedTaskList(complete)}
        </ul>
      </ul>
    </div>
  )
}

export default ParentTaskItem;