// Packages
import React, { FC } from 'react';



// Styles
import style from './select.module.scss';

// Types TS
import { taskObjectType } from '../../../types/task.typesTS';

type propsType = {
  input: object,
  tasks: Array<taskObjectType>,
  meta: any

}

const Select:FC<propsType> = ({ input, tasks, meta, ...props }) => {

  return (
    <>
    <select {...input} {...props} className={style.select} >
        <option disabled>Выберите родителский элемент</option>
        <option>Создать новый родителский элемент</option>
        {tasks.map(task => (
          <option key={task.id}>{task.name}</option>
        ))}

    </select>
    </>
  )

}

export default Select;
