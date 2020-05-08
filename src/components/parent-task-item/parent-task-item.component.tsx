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
        isAllowedDelete={task.isAllowedDelete}
        secondLevelId={task.id}
        name={task.name}
        markDeletedAC={props.markDeletedAC}
        removeTaskAC={props.removeTaskAC} />))
  }

  const componentThirdLevel = (task: Array<nestedTaskType>) => {
    return task.map(((task) =>
      <TaskItem
        key={task.id}
        isAllowedDelete={task.isAllowedDelete}
        thirdLevelId={task.id}
        name={task.name}
        markDeletedAC={props.markDeletedAC}
        removeTaskAC={props.removeTaskAC} />))
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

// {thirdLevelNested(pendinThirdtLevel)}
// {thirdLevelNested(completeThirdLevel)}
export default ParentTaskItem;


// const thirdLevelNested = (task: any) => {
//   return task.map(((task: any) =>
//     <TaskItem
//       key={task.id}
//       isAllowedDelete={task.isAllowedDelete}
//       thirdLevelId={task.id}
//       name={task.name}
//       markDeletedAC={props.markDeletedAC}
//       removeTaskAC={props.removeTaskAC} />))
// }

// const pendingSecondLevel = props.secondLevelNested.filter((task: any) => !task.isAllowedDelete);
// const completeSecondLevel = props.secondLevelNested.filter((task: any) => task.isAllowedDelete);

// const pendinThirdtLevel = props.thirdLevelNested.filter((task: any) => !task.isAllowedDelete);
// const completeThirdLevel = props.thirdLevelNested.filter((task: any) => task.isAllowedDelete);