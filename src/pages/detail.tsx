import React, { Component } from 'react';
import { Link } from 'umi';
import Header from './header/header';
import DetailsInfo from './detailComponent/detailsInfo';
import LikedGoing from './detailComponent/participants';
import Comments from './detailComponent/comments';
import style from './detail.less';
import testImg from '../assets/testImg/touxiang.jpg';

export default class Detail extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <div className={style.wraper}>
          <div className={style.commonInfo}>
            <span className={style.channelName}>Channel Name</span>
            <div className={style.activityName}>
              Activity Title Name Make it Longer May Longer than One Line
            </div>
            <div className={style.user}>
              <div className={style.usericon}>
                <img src={testImg} />
              </div>
              <div className={style.text}>
                <div className={style.username}>Username</div>
                <div className={style.publishtime}>Published 2 days ago</div>
              </div>
            </div>
          </div>
          <div className={style.tabBar}>
            <Link to="#detailInfo">
              <span>Details</span>
            </Link>
            <Link to="#likedgoing">
              <span>Participants</span>
            </Link>
            <Link to="#likedgoing">
              {' '}
              <span>Comments</span>
            </Link>
          </div>
          <DetailsInfo
            data1={[
              'AiyWuByWklrrUDlFignR',
              'TekJlZRVCjLFexlOCuWn',
              'IJOtIlfsYdTyaDTRVrLI',
            ]}
          />
          <LikedGoing />
          <Comments />
        </div>
      </div>
    );
  }
}
