// Components
import React from 'react';

// Styles
import style from './modal.module.scss';

// Components
import ModalForm from './modal-form/modal-form.component';

const Modal = (props) => {
  const { modal, showModal, tasks, addTask } = props;

  const onSubmit = (data) => {
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