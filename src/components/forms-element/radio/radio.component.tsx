import React, { FC } from 'react';
import style from './radio.module.scss';

type propsType = {
  input: object,
  meta: object,
  level: string
}

const Radio: FC<propsType> = ({ input, meta, level, ...props }) =>
  (
    <div className={style.radio}>
      <input {...input} {...props} />
      <label className={style.radio__label}>{level}</label>
    </div>

  )


export default Radio;
