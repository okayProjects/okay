import React from 'react';
import style from './Button.module.css';

const button = (props) => (
    <button onClick={props.click} className={[style.Button, style[props.btnType]].join(' ')} disabled={props.disabled}>{props.children}</button>
)

export default button;

