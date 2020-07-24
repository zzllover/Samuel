import React from 'react';
import style from './noActivity.less';

export default () => {
  return (
    <div className={style.wraper}>
      <div className={style.pic}>
        <i className={'iconfont icon-06-copy'}></i>
      </div>
      <div className={style.text}>No activity found</div>
    </div>
  );
};
