// Packages
import React from 'react';

// Styles
import style from './parent-task-item.module.scss';

// Components
import TaskItem from './task-item/task-item.component';

// Types TS
import { nestedTaskType } from '../../types/task.typesTS';


const ParentTaskItem = (props: any) => {
  const types = ['pending', 'completed'];

  const componentLevel = (task: Array<nestedTaskType>, idLevel: string) => {
    return task.map(((task) =>
      <TaskItem
        key={task.id}
        {...{ [idLevel]: task.id }}
        isAllowedDelete={task.isAllowedDelete}
        name={task.name}
        removeTaskAC={props.removeTaskAC}
        markDeletedAC={props.markDeletedAC}
      />))
  }

  const nestedTask = ( level: Array<nestedTaskType>, status: string,idLevel:String, fn: (data: Array<nestedTaskType>, id: any) => void) => {
      const task = level.filter((task: any) => status === 'pending' ? !task.isAllowedDelete : task.isAllowedDelete)
      return fn(task,idLevel)
  }

  return (
    <div className={style.taskItem}>
      <ul className={style.taskItem__firstLevel}>
        <TaskItem {...props} />
        <ul className={style.taskItem__secondLevel}>
          {types.map(type => nestedTask(props.secondLevelNested, type, 'secondLevelId', componentLevel))}
          <ul className={style.taskItem__thirdLevel}>
            {types.map(type => nestedTask(props.thirdLevelNested, type, 'thirdLevelId', componentLevel))}
          </ul>
        </ul>
      </ul>
    </div>
  )
}

export default ParentTaskItem;
