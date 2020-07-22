import React, { Component } from 'react';
import style from './listItem.less';
import testImg from '../..//assets/testImg/touxiang.jpg';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.item}>
        <div className={style.userInfo}>
          <span className={style.userIcon}>
            <img src={testImg} />
          </span>
          <span className={style.userName}>username</span>
          <span className={style.channelName}>channel name</span>
        </div>
        <div className={style.activityName}>
          Activity Title Name Make it Longer May Longer than One Line
        </div>
        <div className={style.avtivityTime}>
          <i className={'iconfont icon-time'}></i>
          <span>14 may 201612:22 - 14 may 2016 18:00</span>
        </div>
        <div className={style.activityContent}>
          [No longer than 300 chars] Vivamus sagittis, diam in lobortis, sapien
          arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien mi
          potenti...
        </div>
        <div className={style.userOperate}>
          <span className={style.normal}>
            <i className={'iconfont icon-duigou_kuai'}></i>{' '}
            <span>I am going</span>
          </span>
          <span className={style.normal}>
            <i className={'iconfont icon-aixin'}></i> <span>I like it</span>
          </span>
        </div>
      </div>
    );
  }
}
