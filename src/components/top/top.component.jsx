// Packages
import React from 'react';

// Styles
import style from './top.module.scss';

const Top = (props) => {

  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const dayWeak = new Date().getDay();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const year = new Date().getFullYear();

  return (
    <div className={style.top}>
      <h3 className={style.top__data}>{`${days[dayWeak]} ${day} ${months[month]} ${year}`}</h3>
    </div>
  )
}

export default Top;
