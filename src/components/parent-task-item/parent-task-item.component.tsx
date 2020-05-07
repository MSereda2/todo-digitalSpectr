// Packages
import React from 'react';

// Styles
import style from './parent-task-item.module.scss';

// Components
import TaskItem from './task-item/task-item.component';

const ParentTaskItem = (props: any) => {

  const secondLevelNested = (task: any) => {
    return task.map(((task: any) =>
      <TaskItem
        key={task.id}
        isAllowedDelete={task.isAllowedDelete}
        secondLevelId={task.id}
        name={task.name}
        markDeletedAC={props.markDeletedAC}
        removeTaskAC={props.removeTaskAC} />))
  }

  const thirdLevelNested = (task: any) => {
    return task.map(((task: any) =>
    <TaskItem
      key={task.id}
      isAllowedDelete={task.isAllowedDelete}
      thirdLevelId={task.id}
      name={task.name}
      markDeletedAC={props.markDeletedAC}
      removeTaskAC={props.removeTaskAC} />))
  }

  const pendingSecondLevel = props.secondLevelNested.filter((task: any) => !task.isAllowedDelete);
  const completeSecondLevel = props.secondLevelNested.filter((task: any) => task.isAllowedDelete);

  const pendinThirdtLevel = props.thirdLevelNested.filter((task: any) => !task.isAllowedDelete);
  const completeThirdLevel = props.thirdLevelNested.filter((task: any) => task.isAllowedDelete);

  return (
    <div className={style.taskItem}>
      <ul className={style.taskItem__firstLevel}>
        <TaskItem {...props} />
        <ul className={style.taskItem__secondLevel}>
          {secondLevelNested(pendingSecondLevel)}
          {secondLevelNested(completeSecondLevel)}
           <ul className={style.taskItem__thirdLevel}>
             {thirdLevelNested(pendinThirdtLevel)}
             {thirdLevelNested(completeThirdLevel)}
           </ul>
        </ul>
      </ul>
    </div>
  )
}

export default ParentTaskItem;