// Packages
import React, {FC} from 'react';

// Styles
import style from './btn.module.scss';

type propTypes = {
  text: string
}

const Btn:FC<propTypes> = ({text}) => (<button type="submit" className={style.btn}>{text}</button>)

export default Btn;