import React, { Component } from 'react';
import style from './listItem.less';
import { timeToShow } from '../../utils/_time';
import testImg from '../..//assets/testImg/touxiang.jpg';

export default class ListItem extends Component {
  constructor(props: any) {
    super(props);
    console.log(this.props.item);
    this.state = {
      liked: this.props.item.me_likes,
      going: this.props.item.me_going,
      likes_count: this.props.item.likes_count,
      goings_count: this.props.item.goings_count,
      ...this.props.item.creator,
      ...this.props.item.channel,
      beginTime: timeToShow(this.props.item.begin_time),
      endTime: timeToShow(this.props.item.end_time),
      description:
        this.props.item.description.length > 200
          ? this.props.item.description.slice(0, 200) + '......'
          : this.props.item.description,
    };
  }

  render() {
    return (
      <div className={style.item}>
        <div className={style.userInfo}>
          <span className={style.userIcon}>
            <img src={this.state.avatar} />
          </span>
          <span className={style.userName}>{this.state.username}</span>
          <span className={style.channelName}>{this.state.name}</span>
        </div>
        <div className={style.activityName}>{this.props.item.name}</div>
        <div className={style.avtivityTime}>
          <i className={'iconfont icon-time'}></i>
          <span>{this.state.beginTime + ' - ' + this.state.endTime}</span>
        </div>
        <div className={style.activityContent}>{this.state.description}</div>
        <div className={style.userOperate}>
          <span className={this.state.going ? style.iGo : style.normal}>
            <i
              className={
                'iconfont' + (this.state.going ? ' icon-yes2' : ' icon-gou')
              }
            />
            <span>
              {this.state.going
                ? 'I am going'
                : this.state.goings_count + ' going'}
            </span>
          </span>
          <span className={this.state.liked ? style.iLike : style.normal}>
            <i
              className={
                'iconfont' + (this.state.liked ? ' icon-aixin' : ' icon-aixin1')
              }
            />
            <span>
              {this.state.liked
                ? 'I like it'
                : this.state.likes_count + ' liked'}
            </span>
          </span>
        </div>
      </div>
    );
  }
}
