import React from 'react';
import style from './toast.less';

const Toast = props => {
  return (
    <div
      className={style.toast}
      style={{ backgroundColor: props.color, top: props.top }}
    >
      {props.text}
    </div>
  );
};

export default Toast;
