// Packages
import React from 'react';

// Styles
import style from './parent-task-item.module.scss';

// Components
import TaskItem from './task-item/task-item.component';

// Types TS
import { nestedTaskType } from '../../types/task.typesTS';

const ParentTaskItem = (props: any) => {

  const componentSecondLevel = (task: Array<nestedTaskType>) => {
    return task.map(((task) =>
      <TaskItem
        key={task.id}
        secondLevelId={task.id}
        isAllowedDelete={task.isAllowedDelete}
        name={task.name}
        removeTaskAC={props.removeTaskAC}
        markDeletedAC={props.markDeletedAC}
         />))
  }

  const componentThirdLevel = (task: Array<nestedTaskType>) => {
    return task.map(((task) =>
      <TaskItem
        key={task.id}
        thirdLevelId={task.id}
        isAllowedDelete={task.isAllowedDelete}
        name={task.name}
        removeTaskAC={props.removeTaskAC}
        markDeletedAC={props.markDeletedAC} />))
  }

  const nestedTask = (
    level: Array<nestedTaskType>,
    status: string,
    fn: (data: Array<nestedTaskType>) => void) => {
    if (status === 'pending') {
      const pendingTask = level.filter((task: any) => !task.isAllowedDelete);
      return fn(pendingTask);
    } else if (status === 'completed') {
      const completedTask = level.filter((task: any) => task.isAllowedDelete);
      return fn(completedTask)
    }
  }

  return (
    <div className={style.taskItem}>
      <ul className={style.taskItem__firstLevel}>
        <TaskItem {...props} />
        <ul className={style.taskItem__secondLevel}>
          {nestedTask(props.secondLevelNested, 'pending', componentSecondLevel)}
          {nestedTask(props.secondLevelNested, 'completed', componentSecondLevel)}
          <ul className={style.taskItem__thirdLevel}>
            {nestedTask(props.thirdLevelNested, 'pending', componentThirdLevel)}
            {nestedTask(props.thirdLevelNested, 'completed', componentThirdLevel)}
          </ul>
        </ul>
      </ul>
    </div>
  )
}

export default ParentTaskItem;
