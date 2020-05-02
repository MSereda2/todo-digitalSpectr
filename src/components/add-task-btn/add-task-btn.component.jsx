// Packages
import React from 'react';

// Style
import style from './add-task-btn.module.scss';

const AddTaskBtn = ({ showModal, modal }) => {
  return (
    <button onClick={() => showModal(!modal)} className={style.btnTask}>
      <span>+</span>
    </button>
  )
}

export default AddTaskBtn;