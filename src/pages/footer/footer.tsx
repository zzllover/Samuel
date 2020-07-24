import React from 'react';
import { InputItem } from 'antd-mobile';
import style from './footer.less';
import { useState, useEffect } from 'react';

const Footer = props => {
  const [isWhich, setIsWhich] = useState(false);

  const noticeClickSend = () => {
    props.onClickSend();
  };

  return (
    <div className={style.wraper}>
      {isWhich ? (
        <div className={style.normal}>
          <div className={style.left}>
            <i
              className={'iconfont icon-liuyan'}
              onClick={() => setIsWhich(!isWhich)}
            ></i>
            <i className={'iconfont icon-aixin1'}></i>
          </div>
          <div
            className={style.right}
            onClick={() => {
              noticeClickSend();
            }}
          >
            <i className={'iconfont icon-gou'}></i>
            <span>Join</span>
          </div>
        </div>
      ) : (
        <div className={style.reply}>
          <div className={style.releft}>
            <i
              className={'iconfont icon-cha'}
              onClick={() => setIsWhich(!isWhich)}
            ></i>
          </div>
          <div className={style.middle}>
            <InputItem placeholder="Leave your comment here" />
          </div>
          <div
            className={style.reright}
            onClick={() => {
              noticeClickSend();
            }}
          >
            <i className={'iconfont icon-fasong'}></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
