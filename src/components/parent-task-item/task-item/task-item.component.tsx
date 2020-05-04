import React from 'react';
import style from './task-item.module.scss';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

const TaskItem = (props: any) => {
  const { isAllowedDelete, removeTaskAC, markDeletedAC, id, nesteId, name } = props;

  const showWarning = () => {
    return Swal.fire({
      title: 'Вы уверены, что хотите удалить элемент?',
      text: "Данное действие необратимо",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Отмена',
      confirmButtonText: 'Да, Удалить'
    }).then((result) => {
      if (result.value) {
        if (id) {
          removeTaskAC({ firstId: id })
        } else {
          removeTaskAC({ secondId: nesteId })
        }
      }
    })
  }

  const markeAsDeleted = () => {
    if (nesteId) {
      markDeletedAC({ secondId: nesteId })
    } else {
      markDeletedAC({ firstId: id })
    }
  }
  return (
    <li className={style.taskItem}>
      <input
        checked={isAllowedDelete}
        onChange={markeAsDeleted}
        type="checkbox" />
      <span
        className={` ${style.text__item} ${isAllowedDelete ? style.completed : ''}`}>
        {name}
        {isAllowedDelete && <span onClick={showWarning} className={style.icon}>{<AiFillDelete />} </span>}
      </span>
    </li>
  )
}

export default TaskItem;



