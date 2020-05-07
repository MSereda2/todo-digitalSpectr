import React from 'react';
import style from './radio.module.scss';

const Radio = ({ input, meta, ...props }) => 
  (
      <div className={style.radio}>
        <input {...input} {...props}/>
        <label className={style.radio__label}>{props.level}</label>
      </div>
    
  )


export default Radio;
