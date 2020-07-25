import React from 'react';
import style from './comments.less';
import testImg from '../../assets/testImg/touxiang.jpg';

const Comments = props => {
  // const data = [{}, {}];

  return (
    <div className={style.comment} id={'comment'}>
      {props.commentLists.map((val, index) => {
        return (
          <div className={style.list} key={index}>
            <div className={style.usericon}>
              <img src={val.user.avatar} />
            </div>
            <div className={style.text}>
              <div className={style.username}>
                <strong>{val.user.username}</strong>
                <span>{val.create_time}</span>
              </div>
              <div className={style.content}>{val.comment}</div>
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
