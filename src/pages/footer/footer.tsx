import React from 'react';
import { InputItem } from 'antd-mobile';
import style from './footer.less';
import { useState, useEffect } from 'react';

const Footer = props => {
  const [isWhich, setIsWhich] = useState(true);
  const [inputVal, setInputVal] = useState('');

  const noticeClickSend = () => {
    props.onClickSend(inputVal);
    setInputVal('');
  };

  const noticeGoing = () => {
    props.onClickGoing();
  };

  const noticeReply = () => {
    props.onClickReply();
  };

  const noticeLike = () => {
    props.onClickLike();
  };

  return (
    <div className={style.wraper}>
      {isWhich ? (
        <div className={style.normal}>
          <div className={style.left}>
            <i
              className={'iconfont icon-liuyan'}
              onClick={() => {
                setIsWhich(!isWhich);
                noticeReply();
              }}
            ></i>
            {
              <i
                onClick={noticeLike}
                className={
                  'iconfont ' + (props.me_likes ? 'icon-aixin' : 'icon-aixin1')
                }
                style={{ color: props.me_likes ? '#FF5C5C' : '#000' }}
              />
            }
          </div>
          <div
            className={style.right}
            style={{ backgroundColor: props.me_going ? '#bababa' : '#d5ef7f' }}
            onClick={noticeGoing}
          >
            {props.me_going ? (
              <>
                <i
                  className={'iconfont icon-yes2'}
                  style={{ color: '#AECB4F' }}
                ></i>
                <span>I am going</span>
              </>
            ) : (
              <>
                <i className={'iconfont icon-gou'}></i>
                <span>Join</span>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className={style.reply}>
          <div className={style.releft}>
            <i
              className={'iconfont icon-cha'}
              onClick={() => {
                setIsWhich(!isWhich);
              }}
            ></i>
          </div>
          <div className={style.middle}>
            <InputItem
              placeholder="Leave your comment here"
              value={inputVal}
              onChange={val => {
                setInputVal(val);
              }}
            />
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
