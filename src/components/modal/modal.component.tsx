// Components
import React, {FC} from 'react';

// Styles
import style from './modal.module.scss';

// Components
import ModalForm from './modal-form/modal-form.component';

// Types TS
import {taskObjectType,taskItemType} from '../../redux/reducers/task.typesTS';

type propsType = {
  modal: boolean,
  showModal: (data: boolean) => void,
  tasks: Array<taskObjectType>,
  addTask: (data: taskItemType) => void
}

const Modal:FC<propsType> = ({ modal, showModal, tasks, addTask }) => {
  

  const onSubmit = (data: taskItemType) => {
    console.log(data)
    addTask(data);
    showModal(false);
  }

  return (
    <>
      {modal &&
        <div className={style.modal}>
          <div className={style.modal__top}>
            <h3 className={style.modal__heading}>Создать задание</h3>
            <button onClick={() => showModal(false)} className={style.modal__close}>x</button>
          </div>
          <ModalForm tasks={tasks} onSubmit={onSubmit} />
        </div>
      }
    </>
  )
}

export default Modal;