// Packages
import React from 'react';

// Styles
import style from './input.module.scss';

const Input = ({ input, meta, ...props }) => {

  const hasError = meta ? meta.touched && meta.error : null;

  return (
    <>
      <label className={style.label}>Задания</label>
      <input {...input} {...props} className={style.input} />
      {hasError && <span className={`${hasError && style.error}`}>{meta.error}</span>}
    </>
  )

}

export default Input;