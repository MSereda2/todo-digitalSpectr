// Packages
import React, {FC} from 'react';

// Style
import style from './add-task-btn.module.scss';

type propsType = {
  showModal: (modal: boolean) => void,
  modal: boolean
}

const AddTaskBtn:FC<propsType> = ({ showModal, modal }) => {
  return (
    <button onClick={() => showModal(!modal)} className={style.btnTask}>
      <span>+</span>
    </button>
  )
}

export default AddTaskBtn;