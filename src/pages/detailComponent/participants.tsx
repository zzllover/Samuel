import React, { useState } from 'react';
import style from './participants.less';
//import testImg from '../../assets/testImg/touxiang.jpg';
import moreIcon from '../../assets/icons/more.svg';

const LikedGoing = props => {
  const [more1, setMore1] = useState(true);
  const [more2, setMore2] = useState(true);

  return (
    <div id={'likedgoing'}>
      <div className={style.liked}>
        <div className={style.text}>
          <i className={'iconfont icon-gou'} />
          {props.participants.length + ' going'}
        </div>
        <div className={style.usericon}>
          {props.participants.length >= 8 && more1
            ? [
                props.participants.slice(0, 6).map((val, index) => {
                  return (
                    <img src={val.avatar} key={index} className={style.icon} />
                  );
                }),
                <img
                  src={moreIcon}
                  key={7}
                  className={style.icon}
                  onClick={() => {
                    setMore1(!more1);
                  }}
                />,
              ]
            : props.participants.map((val, index) => {
                return (
                  <img src={val.avatar} key={index} className={style.icon} />
                );
              })}
        </div>
      </div>
      <div className={style.going}>
        <div className={style.text}>
          <i className={'iconfont icon-aixin1'} />{' '}
          {props.eventLiker.length + ' likes'}
        </div>
        <div className={style.usericon}>
          {' '}
          {props.eventLiker.length >= 8 && more2
            ? [
                props.eventLiker.slice(0, 6).map((val, index) => {
                  return (
                    <img src={val.avatar} key={index} className={style.icon} />
                  );
                }),
                <img
                  src={moreIcon}
                  key={7}
                  className={style.icon}
                  onClick={() => {
                    setMore2(!more2);
                  }}
                />,
              ]
            : props.eventLiker.map((val, index) => {
                return (
                  <img src={val.avatar} key={index} className={style.icon} />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default LikedGoing;
