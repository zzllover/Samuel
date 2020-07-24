import React, { Component } from 'react';
import style from './listItem.less';
import testImg from '../..//assets/testImg/touxiang.jpg';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: true,
      going: true,
    };
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
          <span className={this.state.going ? style.iGo : style.normal}>
            <i
              className={
                'iconfont' + (this.state.going ? ' icon-yes2' : ' icon-gou')
              }
            />
            <span>{this.state.going ? 'I am going' : '6 going'}</span>
          </span>
          <span className={this.state.liked ? style.iLike : style.normal}>
            <i
              className={
                'iconfont' + (this.state.liked ? ' icon-aixin' : ' icon-aixin1')
              }
            />
            <span>{this.state.liked ? 'I like it' : '6 liked'}</span>
          </span>
        </div>
      </div>
    );
  }
}
