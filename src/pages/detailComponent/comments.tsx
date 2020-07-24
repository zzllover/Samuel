import React from 'react';
import style from './comments.less';
import testImg from '../../assets/testImg/touxiang.jpg';

const Comments = () => {
  const data = [{}, {}];

  return (
    <div className={style.comment} id={'comment'}>
      {data.map((val, index) => {
        return (
          <div className={style.list} key={index}>
            <div className={style.usericon}>
              <img src={testImg} />
            </div>
            <div className={style.text}>
              <div className={style.username}>
                <strong>UserName</strong>
                <span>time</span>
              </div>
              <div className={style.content}>
                Nullam ut tincidunt nunc. Petus lacus, commodo eget justo ut,
                rutrum varius nunc.
              </div>
            </div>
            <div className={style.reply}>
              <i className={'iconfont icon-Reply-1-copy'}></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
