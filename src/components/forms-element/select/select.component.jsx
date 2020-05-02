// Packages
import React from 'react';

// Styles
import style from './select.module.scss';

const Select = ({ input, tasks, meta, ...props }) => (
  <>
    <label className={style.select__label}>Родителский элемент</label>

    <select {...input} {...props} className={style.select} type="select">

      <option disabled>Выберите родителский элемент</option>
      <option>Создать новый родителский элемент</option>
      {tasks.map(task => (
        <option key={task.id}>{task.name}</option>
      ))}

    </select>
  </>
)

export default Select;