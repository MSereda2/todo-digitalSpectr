// Packages
import React from 'react';

// Styles
import style from './btn.module.scss';

const Btn = (props) => (<button type="submit" className={style.btn}>{props.text}</button>)

export default Btn;