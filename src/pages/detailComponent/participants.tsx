import React, { useState } from 'react';
import style from './participants.less';
import testImg from '../../assets/testImg/touxiang.jpg';
import moreIcon from '../../assets/icons/more.svg';

const LikedGoing = () => {
  const data1 = [{}, {}, {}, {}, {}, {}, {}, {}];
  const data2 = [{}, {}, {}, {}, {}, {}, {}];
  const [more1, setMore1] = useState(true);
  const [more2, setMore2] = useState(true);

  return (
    <div id={'likedgoing'}>
      <div className={style.liked}>
        <div className={style.text}>
          <i className={'iconfont icon-gou'} />
          34 going
        </div>
        <div className={style.usericon}>
          {data1.length >= 8 && more1
            ? [
                data1.slice(0, 6).map((val, index) => {
                  return (
                    <img src={testImg} key={index} className={style.icon} />
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
            : data1.map((val, index) => {
                return <img src={testImg} key={index} className={style.icon} />;
              })}
        </div>
      </div>
      <div className={style.going}>
        <div className={style.text}>
          <i className={'iconfont icon-aixin1'} /> 7 likes
        </div>
        <div className={style.usericon}>
          {' '}
          {data2.length >= 8 && more2
            ? [
                data2.slice(0, 6).map((val, index) => {
                  return (
                    <img src={testImg} key={index} className={style.icon} />
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
            : data2.map((val, index) => {
                return <img src={testImg} key={index} className={style.icon} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default LikedGoing;
