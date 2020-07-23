import React from 'react';
import style from './participants.less';
import testImg from '../../assets/testImg/touxiang.jpg';

const LikedGoing = () => {
  const imgs = [
    <img src={testImg} />,
    <img src={testImg} />,
    <img src={testImg} />,
    <img src={testImg} />,
    <img src={testImg} />,
    <img src={testImg} />,
    <img src={testImg} />,
    <img src={testImg} />,
    <img src={testImg} />,
  ];

  return (
    <div id={'likedgoing'}>
      <div className={style.liked}>
        <div className={style.text}>
          <i className={'iconfont icon-gou'} />
          34 going
        </div>
        <div className={style.usericon}>{imgs}</div>
      </div>
      <div className={style.going}>
        <div className={style.text}>
          <i className={'iconfont icon-aixin1'} /> 7 likes
        </div>
        <div className={style.usericon}>{imgs}</div>
      </div>
    </div>
  );
};

export default LikedGoing;
